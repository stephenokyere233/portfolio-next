import Image from "next/image";
import Link from "next/link";
import { PROJECTS } from "../constants";

const HERO_PROJECTS = [PROJECTS[0], PROJECTS[1], PROJECTS[2], PROJECTS[3]] as const;

type HeroProject = (typeof HERO_PROJECTS)[number];

type TileConfig = {
  project: HeroProject;
  wrapperClass: string;
  float?: boolean;
  floatDelay?: boolean;
};

const TILES: TileConfig[] = [
  {
    project: HERO_PROJECTS[0],
    wrapperClass: "left-0 top-0 w-[54%] -rotate-[3deg] z-10",
  },
  {
    project: HERO_PROJECTS[1],
    wrapperClass: "right-0 top-[2%] w-[50%] rotate-[4deg] z-20",
    float: true,
  },
  {
    project: HERO_PROJECTS[2],
    wrapperClass:
      "left-[2%] top-[46%] sm:top-auto sm:bottom-0 w-[48%] rotate-[2deg] z-15",
  },
  {
    project: HERO_PROJECTS[3],
    wrapperClass:
      "right-[2%] top-[48%] sm:top-auto sm:bottom-[3%] w-[52%] -rotate-[3deg] z-25",
    float: true,
    floatDelay: true,
  },
];

function ProjectTile({ project }: { project: HeroProject }) {
  return (
    <Link
      href={project.siteLink}
      target="_blank"
      rel="noopener noreferrer"
      className="group block overflow-hidden border border-border bg-[#1c1c1c] shadow-[0_10px_28px_rgba(0,0,0,0.32)] transition-[border-color,box-shadow] duration-200 hover:border-border-strong hover:shadow-[0_14px_36px_rgba(0,0,0,0.4)]"
      aria-label={`View ${project.name} project`}
    >
      <div className="relative aspect-[3/2] overflow-hidden">
        <Image
          src={project.imgSrc}
          alt={`${project.name} — ${project.desc}`}
          fill
          sizes="(max-width: 640px) 45vw, (max-width: 1024px) 200px, 240px"
          className="object-cover object-top transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"
        />
      </div>
      <p className="px-2.5 py-2 text-[11px] sm:text-xs font-medium text-white/50 truncate border-t border-border group-hover:text-white/75 transition-colors duration-200">
        {project.name}
      </p>
    </Link>
  );
}

const HeroVisual = () => {
  return (
    <div className="relative w-full aspect-square" aria-label="Featured projects">
      {TILES.map((tile) => (
        <div key={tile.project.name} className={`absolute ${tile.wrapperClass}`}>
          <div
            className={
              tile.float
                ? `hero-float${tile.floatDelay ? " hero-float-delay" : ""}`
                : undefined
            }
          >
            <ProjectTile project={tile.project} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default HeroVisual;
