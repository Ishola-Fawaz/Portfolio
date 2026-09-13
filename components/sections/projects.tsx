import { projects } from "@/data/projects";

export function Projects() {
  return (
    <section id="projects" className="border-t border-zinc-800 py-24">
      <h2 className="font-mono text-sm text-zinc-500">Projects</h2>
      <div className="mt-10 flex flex-col gap-16">
        {projects.map((project) => (
          <article key={project.title} className="flex flex-col gap-3">
            <div className="flex items-baseline justify-between gap-4">
              <h3 className="text-2xl font-medium text-zinc-50">
                {project.title}
              </h3>
              <span className="font-mono text-xs text-zinc-500">
                {project.category}
              </span>
            </div>
            <p className="max-w-2xl text-zinc-400">
              {project.problem} {project.approach} {project.outcome}
            </p>
            <div className="flex gap-4 text-sm">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  className="text-zinc-300 underline underline-offset-4 hover:text-zinc-50"
                >
                  Live
                </a>
              )}
              {project.repoUrl && (
                <a
                  href={project.repoUrl}
                  className="text-zinc-300 underline underline-offset-4 hover:text-zinc-50"
                >
                  Repo
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
