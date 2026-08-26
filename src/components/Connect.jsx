import EntryHeader from "./EntryHeader";
import Reveal from "./Reveal";
import { profile } from "../data/profile";

const links = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { label: "Phone", value: profile.phone, href: `tel:${profile.phone}` },
  { label: "GitHub", value: "github.com/Harshith8244", href: profile.github },
  { label: "LinkedIn", value: "linkedin.com/in/harshith-dangeti", href: profile.linkedin },
];

export default function Connect() {
  return (
    <section
      id="entry-07"
      aria-labelledby="entry-07-heading"
      className="px-6 md:px-16 py-24 md:py-32"
    >
      <EntryHeader path="connect" title="Close the log" index={7} />
      <Reveal delay={0.1}>
        <p id="entry-07-heading" className="font-body text-lg md:text-xl text-paper-dim max-w-prose mb-12">
          Eight entries, one running streak. If there's a role where the next
          entry could be written together — reach out below.
        </p>
      </Reveal>
      <div className="grid sm:grid-cols-2 gap-px bg-line border border-line">
        {links.map((l, i) => (
          <Reveal key={l.label} delay={0.05 * i}>
            <a
              href={l.href}
              target={l.href.startsWith("http") ? "_blank" : undefined}
              rel={l.href.startsWith("http") ? "noreferrer" : undefined}
              className="group block bg-ink p-6 md:p-8 hover:bg-panel transition-colors h-full"
            >
              <p className="entry-label text-paper-dim mb-2">{l.label}</p>
              <p className="font-display text-xl md:text-2xl text-paper group-hover:text-ember transition-colors break-all">
                {l.value}
              </p>
            </a>
          </Reveal>
        ))}
      </div>
      <Reveal delay={0.2} className="mt-10">
        <a
          href="/Harshith_Babu_Dangeti_Resume.pdf"
          download
          className="inline-flex items-center gap-2 entry-label text-ember border border-ember/50 px-4 py-3 hover:bg-ember hover:text-ink transition-colors"
        >
          download resume (pdf)
          <span aria-hidden="true">↓</span>
        </a>
      </Reveal>

      <footer className="mt-20 pt-8 border-t border-line flex flex-wrap justify-between gap-4 entry-label text-paper-dim">
        <span>{profile.location}</span>
        <span>log ends // entry 07 of 07</span>
      </footer>
    </section>
  );
}
