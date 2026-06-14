import Title from "@/title";
import WidthConstraint from "@/width-constraint";
import { SITE } from "../constants";

const About = () => {
  return (
    <section id="about" className="py-24 scroll-mt-24 border-t border-white/[0.06]">
      <WidthConstraint>
        <Title label="About Me" />
        <p className="text-[17px] text-white/70 leading-relaxed max-w-2xl mt-4">
          {SITE.aboutIntro}
        </p>
        <div className="max-w-2xl space-y-5 mt-8">
          <p className="text-[17px] text-white/70 leading-relaxed">{SITE.aboutStory}</p>
          <p className="text-[17px] text-white/70 leading-relaxed">{SITE.aboutFocus}</p>
        </div>
      </WidthConstraint>
    </section>
  );
};

export default About;
