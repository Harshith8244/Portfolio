import EntryHeader from "./EntryHeader";
import Reveal from "./Reveal";
import { projects } from "../data/profile";

export default function Builds() {
  return (
    <section
      id="entry-04"
      aria-labelledby="entry-04-heading"
      className="px-6 md:px-16 py-24 md:py-32 bg-panel/40 border-y border-line"
    >
      <EntryHeader path="builds" title="Builds" index={4} />
      <p id="entry-04-heading" className="sr-only">
        Projects
      </p>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.1} className="corner border border-line bg-ink p-6 md:p-8 flex flex-col">
            <p className="entry-label text-paper-dim mb-1">{p.subtitle}</p>
            <h3 className="font-display text-2xl md:text-3xl text-paper mb-4">{p.title}</h3>
            <ul className="flex flex-col gap-3 mb-6 flex-1">
              {p.bullets.map((b, j) => (
                <li key={j} className="font-body text-paper-dim text-sm leading-relaxed pl-5 relative">
                  <span className="absolute left-0 top-[0.55em] w-2 h-px bg-ember" aria-hidden="true" />
                  {b}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-2 pt-4 border-t border-line">
              {p.stack.map((tech) => (
                <span key={tech} className="entry-label text-streak border border-streak/40 px-2 py-1">
                  {tech}
                </span>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
