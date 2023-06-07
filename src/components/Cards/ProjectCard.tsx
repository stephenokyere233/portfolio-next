import React, { FC } from "react";
import Image from "next/image";
import Link from "next/link";

interface Project {
  name: string
  src: string
  description: string
  link: string

}

const ProjectCard: FC<Project> = ({ src, description, name, link }) => {
  return (
    <section
      className="backdrop-blur-[25px] min-w-[200px] backdrop-saturate-[200%] h-[320px]  md:h-[450px] bg-[rgba(17, 25, 40, 0.37)]  rounded-2xl overflow-hidden shadow-2xl snap-y scroll-mt-[7.5em] "
    >
      <Image
        src={src}
        width={400}
        height={400}
        alt={name}
        className="h-[200px] md:h-[320px] object-cover bg-cover w-full"
      />
      <article className="px-6 py-4 leading-[2em] ">
        <h3 className="font-semibold text-xl">{name}</h3>
        <p>{description}</p>
        <Link href={link} className="text-purple-600">
          Go To Site&rarr;
        </Link>
      </article>
    </section>
  );
};

export default ProjectCard;
