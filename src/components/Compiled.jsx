import EntryHeader from "./EntryHeader";
import Reveal from "./Reveal";
import { certifications } from "../data/profile";

export default function Compiled() {
  return (
    <section
      id="entry-05"
      aria-labelledby="entry-05-heading"
      className="px-6 md:px-16 py-24 md:py-32"
    >
      <EntryHeader path="compiled" title="Compiled" index={5} />
      <p id="entry-05-heading" className="sr-only">
        Certifications
      </p>
      <div className="flex flex-col">
        {certifications.map((c, i) => (
          <Reveal key={c.name} delay={i * 0.04}>
            <div className="flex flex-wrap items-center justify-between gap-3 py-5 border-b border-line">
              <div className="flex items-center gap-4">
                <span className="w-1.5 h-1.5 bg-streak flex-shrink-0" aria-hidden="true" />
                <span className="font-body text-paper text-base md:text-lg">{c.name}</span>
              </div>
              <div className="flex items-center gap-4 entry-label text-paper-dim">
                <span>{c.issuer}</span>
                <span className="text-ember">{c.date}</span>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
