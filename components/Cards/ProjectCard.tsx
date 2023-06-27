import React, { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { Project } from "../../interfaces";        
import { MdArrowForwardIos} from "react-icons/md"



const ProjectCard: FC<Project> = ({
  src,
  description,
  name,
  link,
  techStack,
}) => {
  return (
    <section
      style={{ background: "rgba(17, 25, 40, 0.37)" }}
      className="min-w-[200px]  min-h-[320px]  md:min-h-[450px] relative  rounded-2xl overflow-hidden shadow-2xl  "
    >
      <Image
        src={src}
        width={400}
        height={400}
        alt={name}
        className="h-[200px] opacity-80 md:h-[320px] object-cover bg-cover w-full"
      />
      <article className="px-6 py-4 relative leading-[2em] ">
        <h3 className="font-semibold text-xl">{name}</h3>
        <p>{description}</p>
        <div className="flex flex-wrap gap-2 w-full">
          {techStack.map((stack, index) => {
            return (
              <p
                key={index}
                className="border px-4 py-1 bg-[#2221] rounded-2xl text-sm"
              >
                {stack}
              </p>
            );
          })}
        </div>
        <Link href={link} className=" absolute top-4 right-4 p-3 border rounded-lg">
          <MdArrowForwardIos size={28}/>  
        </Link>
      </article>
    </section>
  );
};

export default ProjectCard;
