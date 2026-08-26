import EntryHeader from "./EntryHeader";
import Reveal from "./Reveal";
import { skills } from "../data/profile";

export default function Stack() {
  return (
    <section
      id="entry-02"
      aria-labelledby="entry-02-heading"
      className="px-6 md:px-16 py-24 md:py-32 bg-panel/40 border-y border-line"
    >
      <EntryHeader path="stack" title="Stack trace" index={2} />
      <p id="entry-02-heading" className="sr-only">
        Technical skills
      </p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-line border border-line">
        {skills.map((group, i) => (
          <Reveal key={group.group} delay={i * 0.05} className="bg-ink p-6 md:p-8">
            <p className="entry-label text-ember mb-4">{group.group}</p>
            <ul className="flex flex-col gap-2">
              {group.items.map((item) => (
                <li key={item} className="font-body text-paper text-sm md:text-base">
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
