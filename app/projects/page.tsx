import JsonLd from "@/json-ld";
import ProjectsShowcase from "@/projects-showcase";
import Title from "@/title";
import WidthConstraint from "@/width-constraint";
import { PROJECTS, SITE } from "../../constants";
import { getProjectsJsonLd } from "../../lib/json-ld";
import { createPageMetadata } from "../../lib/metadata";

export const metadata = createPageMetadata({
  title: `Projects — ${SITE.name}`,
  description: SITE.worksIntro,
  path: "projects",
});

export default function ProjectsPage() {
  return (
    <>
      <JsonLd data={getProjectsJsonLd()} />
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
}
