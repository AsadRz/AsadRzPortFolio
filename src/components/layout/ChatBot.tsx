import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { EASE_STANDARD } from '../../lib/easing';
import { profile } from '../../data/profile';
import styles from './ChatBot.module.css';

interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

const GREETING: ChatMessage = {
  role: 'assistant',
  content: `Ask me anything about ${profile.shortName}'s experience, skills, or projects.`,
};

export function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([GREETING]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' });
  }, [messages, isLoading]);

  async function sendMessage() {
    const content = input.trim();
    if (!content || isLoading) return;

    const nextMessages = [...messages, { role: 'user', content } as ChatMessage];
    setMessages(nextMessages);
    setInput('');
    setError(null);
    setIsLoading(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ messages: nextMessages }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error ?? 'Something went wrong.');
      setMessages([...nextMessages, { role: 'assistant', content: data.reply }]);
    } catch {
      setError(`Couldn't reach the assistant. Try again, or email ${profile.email}.`);
    } finally {
      setIsLoading(false);
    }
  }

  function handleKeyDown(event: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      sendMessage();
    }
  }

  return (
    <>
      <motion.button
        type="button"
        className={styles.toggle}
        onClick={() => setIsOpen((v) => !v)}
        aria-expanded={isOpen}
        aria-label={isOpen ? 'Close AI assistant' : 'Open AI assistant'}
        whileHover={{ y: -1 }}
        transition={{ duration: 0.15, ease: EASE_STANDARD }}
      >
        <span className={styles.toggleDot} aria-hidden="true" />
        {isOpen ? 'CLOSE' : 'ASK AI'}
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={styles.panel}
            role="dialog"
            aria-label="AI assistant chat"
            initial={{ opacity: 0, y: 12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.98 }}
            transition={{ duration: 0.2, ease: EASE_STANDARD }}
          >
            <header className={styles.header}>
              <span className={styles.tag}>AI ASSISTANT</span>
              <span className={styles.tag}>{profile.shortName.toUpperCase()}</span>
            </header>

            <div className={styles.messages} ref={scrollRef}>
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={message.role === 'user' ? styles.messageUser : styles.messageAssistant}
                >
                  {message.content}
                </div>
              ))}
              {isLoading && <div className={styles.messageAssistant}>Thinking…</div>}
              {error && <div className={styles.error}>{error}</div>}
            </div>

            <div className={styles.inputRow}>
              <textarea
                className={styles.input}
                value={input}
                onChange={(event) => setInput(event.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask about experience, skills, projects…"
                rows={1}
                disabled={isLoading}
              />
              <button
                type="button"
                className={styles.send}
                onClick={sendMessage}
                disabled={isLoading || !input.trim()}
              >
                SEND
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
