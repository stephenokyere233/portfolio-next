import React from "react";
import Image from "next/image";
import Link from "next/link";
import { CONTACTS } from "../../constants/contact";

const Hero = () => {
  const styles = {
    // height: "calc(100dvh - 0em)",
    background: "rgba(169, 169, 169, 0.2)",
  };

  return (
    <section className="overflow-hidden lg:h-[100dvh] flex flex-col lg:flex-row gap-4 mb-20 py-10 justify-evenly items-center ">
      <div
        style={{ background: styles.background }}
        className="rounded-full max-w-[30em] overflow-clip max-h-[30em] w-[20em] h-[20em] sm:w-[30em] sm:h-[30em] p-6"
      >
        <Image
          className="w-full h-full object-cover rounded-full"
          src="/profile1.JPG"
          alt="Stephen Okyere"
          width={300}
          height={300}
        />
      </div>
      <section className="w-full lg:w-[650px] flex flex-col gap-3 ">
        <p className="font-semibold text-lg opacity-60 ">
          Software Developer &clubs; Content Creator
        </p>
        <h3 className="gradient-text text-4xl font-bold tracking-wider">
          Stephen Okyere
        </h3>
        <h3 className="md:text-xl text-[18px] font-medium">
          I am a proficient software developer with years of experience in the web and
          mobile app development industry. I specialize in creating visually appealing and
          intuitive websites and mobile applications to deliver exceptional user
          experiences and I love to build cool stuff. I have a sharp eye for detail and am
          dedicated to turning your web vision into reality.
        </h3>
        <div className="flex gap-6 pb-4">
          {CONTACTS.map((contact, index) => {
            return (
              <Link key={index} href={contact.link}>
                <contact.icon size={28} />
              </Link>
            );
          })}
        </div>
        <div className="flex gap-4 text-[16px] md:text-xl">
          <Link className="gradient-border-button" href="/resume.pdf">
            Download CV
          </Link>
          <Link
            style={{ background: styles.background }}
            href="/contact"
            className="py-[10px] px-6 hero-link"
          >
            Hire Me &rarr;
          </Link>
        </div>
      </section>
    </section>
  );
};

export default Hero;
