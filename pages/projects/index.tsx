import ProjectsShowcase from "@/projects-showcase";
import Title from "@/title";
import WidthConstraint from "@/width-constraint";
import Head from "next/head";
import { PROJECTS, SITE } from "../../constants";

const ProjectsPage = () => {
  return (
    <>
      <Head>
        <title>Projects — {SITE.name}</title>
        <meta name="description" content={SITE.worksIntro} />
        <link rel="canonical" href={`${SITE.url}projects`} />
      </Head>
      <div className="pt-24 pb-24">
        <WidthConstraint>
          <Title label="All Projects" />
          <p className="text-[17px] text-white/70 leading-relaxed max-w-2xl mt-5 mb-10 lg:mb-12">
            {SITE.worksIntro}
          </p>
          <ProjectsShowcase projects={PROJECTS} />
        </WidthConstraint>
      </div>
    </>
  );
};

export default ProjectsPage;
