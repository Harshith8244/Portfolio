import EntryHeader from "./EntryHeader";
import Reveal from "./Reveal";
import { education } from "../data/profile";

export default function Origins() {
  return (
    <section
      id="entry-06"
      aria-labelledby="entry-06-heading"
      className="px-6 md:px-16 py-24 md:py-32 bg-panel/40 border-y border-line"
    >
      <EntryHeader path="origins" title="Origins" index={6} />
      <p id="entry-06-heading" className="sr-only">
        Education
      </p>
      <div className="flex flex-col gap-0">
        {education.map((ed, i) => (
          <Reveal key={ed.school} delay={i * 0.06}>
            <div className="grid md:grid-cols-[1fr_auto] gap-2 md:gap-8 py-6 border-b border-line items-baseline">
              <div>
                <h3 className="font-display text-xl md:text-2xl text-paper">{ed.school}</h3>
                <p className="font-body text-paper-dim text-sm md:text-base mt-1">{ed.credential}</p>
                <p className="entry-label text-ember mt-1">{ed.detail}</p>
              </div>
              <div className="entry-label text-paper-dim text-right">
                <p>{ed.period}</p>
                <p>{ed.location}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
