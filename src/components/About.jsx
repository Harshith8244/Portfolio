import EntryHeader from "./EntryHeader";
import Reveal from "./Reveal";
import { profile, traits } from "../data/profile";

export default function About() {
  return (
    <section
      id="entry-01"
      aria-labelledby="entry-01-heading"
      className="px-6 md:px-16 py-24 md:py-32"
    >
      <EntryHeader path="about" title="About the subject" index={1} />
      <div className="grid md:grid-cols-3 gap-10 md:gap-16">
        <Reveal delay={0.1} className="md:col-span-2">
          <p id="entry-01-heading" className="font-body text-lg md:text-xl leading-relaxed text-paper max-w-prose">
            {profile.summary}
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="entry-label text-paper-dim mb-4">observed traits</p>
          <ul className="flex flex-col gap-2">
            {traits.map((t) => (
              <li
                key={t}
                className="entry-label text-paper border-b border-line pb-2 flex items-center gap-2"
              >
                <span className="w-1.5 h-1.5 bg-streak" aria-hidden="true" />
                {t}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
