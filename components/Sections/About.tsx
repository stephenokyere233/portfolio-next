import React from "react";
import Title from "@/title";
import WidthConstraint from "@/width-constraint";

const About = () => {
  return (
    <section id="about" className=" w-full mb-20 py-10 snap-y scroll-mt-[6em]">
      <WidthConstraint>
        <Title label="About Me" />
        <p className="align-justify text-[18px] leading-[1.8em]  md:leading-[2em] md:text-xl ">
          Tech is one thing I&apos;m very passionate about,I love to learn new stuff. I
          was a bit late to programming tho buh I&apos;m doing my best and I try to
          document my progress everyday by building new stuff. I craft stunning, intuitive
          websites and mobile apps that deliver exceptional user experiences. Turning your
          vision into reality on the web, one pixel at a time.
          <br />
        </p>
      </WidthConstraint>
    </section>
  );
};

export default About;
