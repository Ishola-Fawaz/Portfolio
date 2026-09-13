export type Project = {
  title: string;
  category: string;
  problem: string;
  approach: string;
  outcome: string;
  liveUrl?: string;
  repoUrl?: string;
};

// TODO: replace with real shipped projects (title, category/domain tag,
// problem -> approach -> outcome, live + repo links).
export const projects: Project[] = [
  {
    title: "Project One",
    category: "Placeholder",
    problem: "TODO: the real problem this project solved.",
    approach: "TODO: the real technical approach taken.",
    outcome: "TODO: the real, measurable outcome.",
    liveUrl: "#",
    repoUrl: "#",
  },
  {
    title: "Project Two",
    category: "Placeholder",
    problem: "TODO: the real problem this project solved.",
    approach: "TODO: the real technical approach taken.",
    outcome: "TODO: the real, measurable outcome.",
    liveUrl: "#",
    repoUrl: "#",
  },
  {
    title: "Project Three",
    category: "Placeholder",
    problem: "TODO: the real problem this project solved.",
    approach: "TODO: the real technical approach taken.",
    outcome: "TODO: the real, measurable outcome.",
    liveUrl: "#",
    repoUrl: "#",
  },
];
