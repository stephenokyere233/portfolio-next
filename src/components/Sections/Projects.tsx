import React from "react";
import { PROJECTS } from "@/constants/projects";
import ProjectCard from "../Cards/ProjectCard";

const Projects = () => {
  return (
    <section
      id="projects"
      className=" w-full min-h-[85vh] py-10  snap-y scroll-mt-[6em]"
    >
      <h2 className="font-[500] text-5xl pb-6" >
        Projects
      </h2>
      <p className="text-xl lg:text-2xl">Some stuff I built</p>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20   mt-10">
        {PROJECTS.map((project) => (
          <ProjectCard
            key={project.id}
            name={project.name}
            description={project.desc}
            src={project.imgSrc}
            link={project.siteLink}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
