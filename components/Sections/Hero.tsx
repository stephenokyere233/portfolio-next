import React from 'react'
import Image from "next/image";
import Link from 'next/link';

const Hero = () => {
  const styles = {
    height: "calc(100vh - 5em)",
    background: "rgba(169, 169, 169, 0.2)"
  }

  return (
    <section style={{ height: styles.height }} className="overflow-hidden h-max flex flex-col lg:flex-row gap-4 justify-evenly items-center ">
      <div style={{ background: styles.background }} className='rounded-full'>
        <Image
          className="md:w-[30em] m-6 rounded-[9999px] overflow-x-hidden"
          src="/profile.jpeg"
          alt=""
          width={300}
          height={400}
        />
      </div>
      <section className="w-full lg:w-[650px] flex flex-col gap-3 ">
        <p className="font-semibold text-lg opacity-60 ">
          Frontend Developer &clubs; Content Creator
        </p>
        <h3 className="gradient-text text-4xl font-bold tracking-wider">Stephen Okyere</h3>
        <h3 className="text-xl font-medium">
          I am proficient frontend developer with years of
          experience in the web and mobile app development
          industry. I specialize in creating visually appealing
          and intuitive websites and mobile applications to
          deliver exceptional user experiences. I have a sharp
          eye for detail and am dedicated to turning your web
          vision into reality.
        </h3>
        <div className='flex gap-4 text-xl'>
          <Link className='gradient-border-button' href="/resume.pdf" >
            Download CV
          </Link>
          <Link
            style={{ background: styles.background }}
            href="#contact"
            className="py-[10px] px-6 hero-link"
          >
            Let&apos;s Link Up!&rarr;
          </Link>
        </div>
      </section>
    </section>
  );
}

export default Hero