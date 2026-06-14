import Title from "@/title";
import WidthConstraint from "@/width-constraint";
import { SERVICES } from "../constants";

const WhatIDo = () => {
  return (
    <section className="py-24 border-t border-white/[0.06]">
      <WidthConstraint>
        <Title label="What I Do" />
        <p className="text-[17px] text-white/70 leading-relaxed max-w-2xl mt-4">
          Four areas where I spend most of my time building for web and mobile.
        </p>

        <ul className="mt-12 md:mt-14 grid md:grid-cols-2 md:gap-x-16 lg:gap-x-20">
          {SERVICES.map((service, index) => (
            <li
              key={service.title}
              className="group relative border-t border-white/10 py-8 md:py-9"
            >
              <span
                aria-hidden
                className="pointer-events-none absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-gradient-brand transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100"
              />
              <span className="text-sm font-medium tabular-nums text-brand-start/70">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 font-semibold text-xl text-white transition-colors duration-200 group-hover:text-brand-start">
                {service.title}
              </h3>
              <p className="mt-2.5 text-[15px] text-white/65 leading-relaxed max-w-[42ch]">
                {service.description}
              </p>
            </li>
          ))}
        </ul>
      </WidthConstraint>
    </section>
  );
};

export default WhatIDo;
