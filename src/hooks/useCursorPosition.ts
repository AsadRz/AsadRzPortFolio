import { useEffect, useRef, useState } from 'react';

/**
 * rAF-throttled pointer position, for the CAD-style coordinate readout.
 * Kept in its own leaf component's hook so re-renders on every pointer
 * move stay isolated to that small subtree.
 */
export function useCursorPosition() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const frame = useRef<number | null>(null);

  useEffect(() => {
    const handleMove = (event: PointerEvent) => {
      if (frame.current !== null) return;
      const { clientX, clientY } = event;
      frame.current = requestAnimationFrame(() => {
        setPos({ x: Math.round(clientX), y: Math.round(clientY) });
        frame.current = null;
      });
    };

    window.addEventListener('pointermove', handleMove);
    return () => {
      window.removeEventListener('pointermove', handleMove);
      if (frame.current !== null) cancelAnimationFrame(frame.current);
    };
  }, []);

  return pos;
}
