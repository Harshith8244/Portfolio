import EntryHeader from "./EntryHeader";
import Reveal from "./Reveal";
import { experience } from "../data/profile";

export default function Shipped() {
  return (
    <section
      id="entry-03"
      aria-labelledby="entry-03-heading"
      className="px-6 md:px-16 py-24 md:py-32"
    >
      <EntryHeader path="shipped" title="Shipped" index={3} />
      <p id="entry-03-heading" className="sr-only">
        Professional experience
      </p>
      <div className="flex flex-col gap-10">
        {experience.map((job) => (
          <Reveal key={job.org} className="corner border border-line bg-panel p-6 md:p-10">
            <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
              <div>
                <h3 className="font-display text-2xl md:text-3xl text-paper">{job.role}</h3>
                <p className="entry-label text-ember mt-1">{job.org}</p>
              </div>
              <div className="text-right">
                {job.current && (
                  <span className="entry-label text-ink bg-streak px-2 py-0.5 inline-block mb-1">
                    IN PROGRESS
                  </span>
                )}
                <p className="entry-label text-paper-dim">{job.period}</p>
                <p className="entry-label text-paper-dim">{job.location}</p>
              </div>
            </div>
            <ul className="flex flex-col gap-3">
              {job.bullets.map((b, i) => (
                <li key={i} className="font-body text-paper-dim leading-relaxed pl-5 relative max-w-prose">
                  <span className="absolute left-0 top-[0.6em] w-2 h-px bg-ember" aria-hidden="true" />
                  {b}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
