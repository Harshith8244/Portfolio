import Reveal from "./Reveal";

export default function EntryHeader({ path, title, index }) {
  return (
    <Reveal className="mb-10 md:mb-14">
      <div className="flex items-baseline gap-3 mb-3">
        <span className="entry-label text-ember">/{path}</span>
        <span className="entry-label text-paper-dim">
          entry {String(index).padStart(2, "0")}
        </span>
      </div>
      <h2 className="font-display text-4xl md:text-5xl font-medium text-paper tracking-tight">
        {title}
      </h2>
      <div className="mt-4 h-px w-16 bg-ember" />
    </Reveal>
  );
}
