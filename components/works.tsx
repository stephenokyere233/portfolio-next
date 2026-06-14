import ProjectsShowcase from "@/projects-showcase";
import Title from "@/title";
import WidthConstraint from "@/width-constraint";
import Link from "next/link";
import { PROJECTS, SITE } from "../constants";

const INITIAL_COUNT = 6;

const Projects = () => {
  const displayed = PROJECTS.slice(0, INITIAL_COUNT);
  const hasMore = PROJECTS.length > INITIAL_COUNT;

  return (
    <section id="work" className="py-24 scroll-mt-24">
      <WidthConstraint>
        <Title label="Selected Work" />
        <p className="text-[17px] text-white/70 leading-relaxed max-w-2xl mt-5 mb-10 lg:mb-12">
          {SITE.worksIntro}
        </p>
        <ProjectsShowcase projects={displayed} />
        {hasMore && (
          <div className="mt-16 lg:mt-20 pt-10 border-t border-border text-center">
            <Link href="/projects" className="btn-secondary text-sm inline-block">
              View all projects
            </Link>
          </div>
        )}
      </WidthConstraint>
    </section>
  );
};

export default Projects;
