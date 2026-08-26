import { motion } from "framer-motion";
import { profile } from "../data/profile";

export default function Header() {
  return (
    <section
      id="entry-00"
      aria-labelledby="entry-00-heading"
      className="min-h-[92vh] flex flex-col justify-between px-6 md:px-16 pt-28 pb-10 relative overflow-hidden"
    >
      <div className="flex flex-wrap items-center gap-3">
        <span className="entry-label text-paper-dim">LOG OPEN · SUBJECT: DANGETI.HARSHITH</span>
        <span className="entry-label text-ink bg-flag px-2 py-0.5">CURRENT</span>
      </div>

      <div>
        <motion.h1
          id="entry-00-heading"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="font-display font-medium text-paper leading-[0.95] tracking-tight"
          style={{ fontSize: "clamp(44px, 9vw, 128px)" }}
        >
          Harshith Babu
          <br />
          Dangeti
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="entry-label text-ember mt-6 text-sm md:text-base"
        >
          {profile.role.toUpperCase()}
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="font-body text-paper-dim max-w-prose mt-4 text-base md:text-lg"
        >
          Full-stack developer keeping a running log of what's shipped — from
          RESTful APIs to containerized deployments. This page is that log.
        </motion.p>
      </div>

      <div className="flex flex-wrap items-end justify-between gap-6 pt-10 border-t border-line mt-10">
        <div className="flex flex-col gap-1 entry-label text-paper-dim">
          <span>{profile.location}</span>
          <a href={`mailto:${profile.email}`} className="hover:text-ember transition-colors w-fit">
            {profile.email}
          </a>
          <span>{profile.phone}</span>
        </div>
        <a
          href="#entry-01"
          className="entry-label text-paper-dim hover:text-ember transition-colors flex items-center gap-2"
        >
          scroll to begin log
          <span aria-hidden="true">↓</span>
        </a>
      </div>
    </section>
  );
}
