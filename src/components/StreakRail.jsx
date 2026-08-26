import { entries } from "../data/profile";
import { useEntryProgress } from "../hooks/useEntryProgress";

export default function StreakRail() {
  const { visited, activeId } = useEntryProgress();
  const count = visited.size;

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      {/* Desktop: vertical rail, right edge */}
      <nav
        aria-label="Log entry progress"
        className="hidden lg:flex fixed right-6 top-1/2 -translate-y-1/2 z-50 flex-col items-center gap-3"
      >
        <span className="entry-label rotate-0 mb-1 text-paper-dim">
          {String(count).padStart(2, "0")}/{String(entries.length).padStart(2, "0")}
        </span>
        <div className="flex flex-col gap-2 bg-panel/80 backdrop-blur-sm border border-line px-2 py-3 corner">
          {entries.map((e) => {
            const isVisited = visited.has(e.id);
            const isActive = activeId === e.id;
            return (
              <button
                key={e.id}
                onClick={() => scrollTo(e.id)}
                aria-label={`Jump to ${e.label}`}
                aria-current={isActive}
                className="group relative w-3 h-3 border transition-colors duration-300"
                style={{
                  borderColor: isActive ? "#E8763D" : "#26332F",
                  background: isVisited ? "#4FB286" : "transparent",
                }}
              >
                <span className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 whitespace-nowrap entry-label opacity-0 group-hover:opacity-100 transition-opacity bg-panel border border-line px-2 py-1">
                  /{e.label.toLowerCase()}
                </span>
              </button>
            );
          })}
        </div>
        <span className="entry-label text-paper-dim mt-1 [writing-mode:vertical-rl]">
          streak rail
        </span>
      </nav>

      {/* Mobile: top progress bar */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-50 h-1 bg-line" aria-hidden="true">
        <div
          className="h-full bg-ember transition-all duration-300"
          style={{ width: `${(count / entries.length) * 100}%` }}
        />
      </div>

      {/* visually-hidden live region for a11y */}
      <p className="sr-only" role="status">
        Reading progress: entry {count} of {entries.length}
      </p>
    </>
  );
}
