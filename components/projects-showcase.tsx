"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { cn } from "../lib/cn";

export type ShowcaseProject = {
  name: string;
  desc: string;
  imgSrc: string;
  siteLink: string;
};

type ProjectsShowcaseProps = {
  projects: ShowcaseProject[];
};

const STICKY_TOP = "top-20";

export default function ProjectsShowcase({ projects }: ProjectsShowcaseProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const entryRefs = useRef<(HTMLElement | null)[]>([]);
  const ratiosRef = useRef<Map<number, number>>(new Map());

  useEffect(() => {
    const elements = entryRefs.current.filter(Boolean) as HTMLElement[];
    if (!elements.length) return;

    ratiosRef.current = new Map();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number((entry.target as HTMLElement).dataset.index);
          ratiosRef.current.set(index, entry.intersectionRatio);
        });

        let bestIndex = 0;
        let bestRatio = 0;
        ratiosRef.current.forEach((ratio, index) => {
          if (ratio > bestRatio) {
            bestRatio = ratio;
            bestIndex = index;
          }
        });

        if (bestRatio > 0) {
          setActiveIndex(bestIndex);
        }
      },
      {
        threshold: Array.from({ length: 11 }, (_, i) => i / 10),
        rootMargin: "-20% 0px -55% 0px",
      }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [projects]);

  return (
    <div className="border-t border-border">
      <div className="relative lg:grid lg:grid-cols-2">
        <div className="flex flex-col lg:border-r lg:border-border">
          {projects.map((project, index) => (
            <article
              key={project.name}
              ref={(el) => {
                entryRefs.current[index] = el;
              }}
              data-index={index}
              className={cn(
                "scroll-mt-24 py-16 sm:py-20 lg:py-0 lg:pb-14",
                index === 0 ? "lg:pt-10" : "lg:pt-12",
                index !== projects.length - 1 && "border-b border-border"
              )}
            >
              <div className="lg:hidden mb-10 pb-10 border-b border-border">
                <Image
                  src={project.imgSrc}
                  width={800}
                  height={600}
                  alt={`${project.name} — ${project.desc}`}
                  className="w-full aspect-[5/3] object-contain bg-white/5"
                />
              </div>

              <div className="max-w-md">
                <p className="text-[11px] uppercase tracking-[0.16em] text-white/30 font-medium tabular-nums">
                  {String(index + 1).padStart(2, "0")}
                  <span className="text-white/20 mx-2">/</span>
                  {String(projects.length).padStart(2, "0")}
                </p>

                <h3
                  className={cn(
                    "mt-2 lg:mt-3 text-2xl sm:text-[1.75rem] font-semibold tracking-[-0.025em] leading-[1.15] transition-opacity duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none",
                    activeIndex === index ? "lg:opacity-100" : "lg:opacity-35"
                  )}
                >
                  {project.name}
                </h3>

                <p
                  className={cn(
                    "mt-3 lg:mt-4 text-base sm:text-[17px] text-white/55 leading-[1.65] max-w-[38ch] transition-opacity duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none",
                    activeIndex === index ? "lg:opacity-100" : "lg:opacity-35"
                  )}
                >
                  {project.desc}
                </p>

                <div className="mt-7 lg:mt-8">
                  <Link
                    href={project.siteLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      "inline-flex items-center gap-1.5 text-sm font-medium text-white/50 hover:text-white link transition-colors duration-200",
                      activeIndex === index
                        ? "lg:opacity-100 lg:text-white/65"
                        : "lg:opacity-35"
                    )}
                  >
                    Visit site &rarr;
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="hidden lg:block">
          <div className={cn("sticky pl-8 xl:pl-10", STICKY_TOP, "pt-10")}>
            <div className="relative w-full h-[min(38vh,20rem)]">
              {projects.map((project, index) => (
                <Image
                  key={project.name}
                  src={project.imgSrc}
                  alt={`${project.name} — ${project.desc}`}
                  fill
                  sizes="50vw"
                  priority={index === 0}
                  className={cn(
                    "object-contain object-left-top transition-opacity duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none",
                    activeIndex === index ? "opacity-100" : "opacity-0"
                  )}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
