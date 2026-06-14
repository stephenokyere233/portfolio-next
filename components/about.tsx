import Title from "@/title";
import WidthConstraint from "@/width-constraint";
import { SITE } from "../constants";

const About = () => {
  return (
    <section id="about" className="py-24 scroll-mt-24">
      <WidthConstraint>
        <Title label="About Me" />
        <div className="max-w-2xl space-y-5 mt-6">
          <p className="text-[17px] text-white/75 leading-relaxed">
            I came to programming later than most people do, but it stuck — fast. I learn
            by building things, and I try to ship something new whenever I can.
          </p>
          <p className="text-[17px] text-white/75 leading-relaxed">{SITE.aboutFocus}</p>
        </div>
      </WidthConstraint>
    </section>
  );
};

export default About;
