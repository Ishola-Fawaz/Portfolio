import { experience } from "@/data/experience";

export function Experience() {
  return (
    <section id="experience" className="border-t border-zinc-800 py-24">
      <h2 className="font-mono text-sm text-zinc-500">Experience</h2>
      <div className="mt-10 flex flex-col gap-4">
        {experience.map((entry) => (
          <div
            key={`${entry.company}-${entry.role}`}
            className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1"
          >
            <p className="text-zinc-200">
              {entry.role} <span className="text-zinc-500">— {entry.company}</span>
            </p>
            <p className="font-mono text-xs text-zinc-500">{entry.dates}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
