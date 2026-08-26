import { useEffect, useState } from "react";
import { entries } from "../data/profile";

// Tracks which sections have been scrolled into (or past) view, and which
// one is currently most "active" — powers the Streak Rail.
export function useEntryProgress() {
  const [visited, setVisited] = useState(() => new Set());
  const [activeId, setActiveId] = useState(entries[0].id);

  useEffect(() => {
    const els = entries
      .map((e) => document.getElementById(e.id))
      .filter(Boolean);

    if (els.length === 0) return;

    const observer = new IntersectionObserver(
      (observedEntries) => {
        observedEntries.forEach((obs) => {
          if (obs.isIntersecting) {
            setActiveId(obs.target.id);
            setVisited((prev) => {
              if (prev.has(obs.target.id)) return prev;
              const next = new Set(prev);
              next.add(obs.target.id);
              return next;
            });
          }
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return { visited, activeId };
}
