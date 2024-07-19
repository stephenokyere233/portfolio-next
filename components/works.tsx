import React from "react";
import ProjectCard from "@/cards/project-card";
import Title from "@/title";
import { PROJECTS } from "../constants";
import WidthConstraint from "@/width-constraint";

const Projects = () => {
  return (
    <section id="projects" className=" py-10 pb-20 snap-y scroll-mt-[6em]">
      <WidthConstraint>
        <Title label="My Works" />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20   mt-10">
          {PROJECTS.map((project) => (
            <ProjectCard
              key={project.name}
              name={project.name}
              description={project.desc}
              src={project.imgSrc}
              link={project.siteLink}
            />
          ))}
        </div>
      </WidthConstraint>
    </section>
  );
};

export default Projects;
