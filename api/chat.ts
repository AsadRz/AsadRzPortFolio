import { profile } from '../src/data/profile';
import { experience } from '../src/data/experience';
import { caseStudies } from '../src/data/projects';
import { education, certifications, languages } from '../src/data/education';
import { skillCategories } from '../src/data/skills';

export const config = { runtime: 'edge' };

const MODEL = 'gpt-4o-mini';
const MAX_HISTORY = 12;
const MAX_MESSAGE_LENGTH = 2000;

interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

function buildKnowledgeBase(): string {
  const experienceText = experience
    .map(
      (entry) =>
        `- ${entry.role} @ ${entry.org} (${entry.period}, ${entry.location})\n  ${entry.bullets.join(' ')}\n  Stack: ${entry.stack.join(', ')}`,
    )
    .join('\n');

  const caseStudyText = caseStudies
    .map(
      (study) =>
        `- ${study.name} (${study.org}, ${study.period}) — ${study.description} Impact: ${study.impact
          .map((metric) => `${metric.label}: ${metric.value}`)
          .join(', ')}`,
    )
    .join('\n');

  const skillsText = skillCategories
    .map((category) => `- ${category.title}: ${category.items.map((item) => item.name).join(', ')}`)
    .join('\n');

  const certsText = certifications.map((cert) => `- ${cert.name} (${cert.issuer})`).join('\n');
  const languagesText = languages.map((lang) => `- ${lang.name}: ${lang.level}`).join('\n');

  return `Name: ${profile.name}
Title: ${profile.title}
Focus: ${profile.focus}
Location: ${profile.location}
Email: ${profile.email}
LinkedIn: ${profile.linkedinLabel}

Summary:
${profile.summary}

Experience:
${experienceText}

Case Studies:
${caseStudyText}

Skills:
${skillsText}

Education: ${education.degree}, ${education.school} (${education.period})

Certifications:
${certsText}

Languages:
${languagesText}`;
}

const SYSTEM_PROMPT = `You are the AI assistant embedded in ${profile.shortName}'s portfolio website, answering visitor questions about ${profile.shortName}'s background, work, skills and projects.

Voice and style — follow these strictly:
- Plain prose only. Never use markdown: no **bold**, no bullet points, no numbered lists, no headers. Write like you're giving a quick, clear spoken answer.
- Default to 1-3 short sentences. Only go longer if the visitor explicitly asks for more detail, a full list, or "everything about X."
- Don't recite the knowledge base. A vague question like "what experience does he have" gets a brief, high-level summary — not a rundown of every role. Pick only what's relevant and put it in your own words.
- Refer to ${profile.shortName} in the third person. Be warm and conversational, not like a resume readout.

Ground every answer in the knowledge base below — never invent facts, dates, or numbers. If something isn't covered, say you don't have that info and suggest emailing ${profile.email}.

--- KNOWLEDGE BASE ---
${buildKnowledgeBase()}
--- END KNOWLEDGE BASE ---`;

function stripMarkdown(text: string): string {
  return text
    .replace(/\*\*(.*?)\*\*/g, '$1')
    .replace(/__(.*?)__/g, '$1')
    .replace(/^#{1,6}\s+/gm, '')
    .replace(/^[-*]\s+/gm, '')
    .replace(/\n{2,}/g, '\n')
    .trim();
}

function isChatMessage(value: unknown): value is ChatMessage {
  return (
    typeof value === 'object' &&
    value !== null &&
    (('role' in value && (value as ChatMessage).role === 'user') ||
      (value as ChatMessage).role === 'assistant') &&
    typeof (value as ChatMessage).content === 'string'
  );
}

export default async function handler(request: Request): Promise<Response> {
  if (request.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), { status: 405 });
  }

  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    return new Response(JSON.stringify({ error: 'Server is not configured with an API key.' }), {
      status: 500,
    });
  }

  let messages: ChatMessage[];
  try {
    const body = (await request.json()) as { messages?: unknown };
    if (!Array.isArray(body.messages) || !body.messages.every(isChatMessage)) {
      throw new Error('invalid');
    }
    messages = body.messages;
  } catch {
    return new Response(JSON.stringify({ error: 'Invalid request body.' }), { status: 400 });
  }

  const trimmedMessages = messages.slice(-MAX_HISTORY).map((message) => ({
    role: message.role,
    content: message.content.slice(0, MAX_MESSAGE_LENGTH),
  }));

  const upstream = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: MODEL,
      max_tokens: 512,
      messages: [{ role: 'system', content: SYSTEM_PROMPT }, ...trimmedMessages],
    }),
  });

  if (!upstream.ok) {
    const detail = await upstream.text();
    console.error('OpenAI upstream error', upstream.status, detail);
    return new Response(JSON.stringify({ error: 'The assistant is unavailable right now.' }), {
      status: 502,
    });
  }

  const data = (await upstream.json()) as { choices?: { message?: { content?: string } }[] };
  const rawReply = data.choices?.[0]?.message?.content ?? "Sorry, I couldn't generate a response.";
  const reply = stripMarkdown(rawReply);

  return new Response(JSON.stringify({ reply }), {
    status: 200,
    headers: { 'content-type': 'application/json' },
  });
}
