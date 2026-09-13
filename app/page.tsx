import { Hero } from "@/components/sections/hero";
import { Projects } from "@/components/sections/projects";
import { Experience } from "@/components/sections/experience";
import { Blog } from "@/components/sections/blog";
import { About } from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="mx-auto flex w-full max-w-3xl flex-1 flex-col px-6">
      <Hero />
      <Projects />
      <Experience />
      <Blog />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}
