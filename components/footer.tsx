"use client";
import Link from "next/link";
import React from "react";
import Logo from "@/logo";
import { CONTACTS } from "../constants";
import WidthConstraint from "@/width-constraint";
import { usePathname } from "next/navigation";

const FooterBanner = () => {
  return (
    <div
      style={{ background: "rgba(169, 169, 169, 0.2)" }}
      className="mx-auto max-w-6xl h-[350px]  md:h-[400px] rounded-lg flex text-center  gap-4 items-center justify-center flex-col my-20"
    >
      <h2 className="text-[2.5em] md:text-[5em] font-semibold md:leading-[80px] ">
        Want to build <br /> something cool?
      </h2>
      <button className="bg-[#222] rounded-[30px] p-2 px-6">
        <Link href="mailto:stephenokyere621@gmail.com">stephenokyere621@gmail.com</Link>
      </button>
    </div>
  );
};

const Footer = () => {
  const pathname = usePathname();
  return (
    <footer className="pt-6 space-y-10  text-[18px] md:text-xl">
      {pathname !== "/blog" && (
        <WidthConstraint>
          <FooterBanner />
        </WidthConstraint>
      )}
      <WidthConstraint className="mx-auto grid h-full min-h-[200px]  justify-between gap-6 px-4 md:grid-cols-2 md:px-10 lg:grid-cols-3 lg:px-0">
        <section className={"flex lg:items-center flex-col"}>
          <div className="flex-1">
            <div className="w-[150px] mb-4">
              <Logo />
            </div>
            <p className="my-4">Want to build something cool?</p>
            <div className="flex gap-6 pb-4">
              {CONTACTS.map((contact, index) => {
                return (
                  <Link key={index} href={contact.link}>
                    <contact.icon size={28} />
                  </Link>
                );
              })}
            </div>
            <p className="mt-4">
              <Link href="mailto:stephenokyere621@gmail.com">
                stephenokyere621@gmail.com
              </Link>
            </p>
          </div>
        </section>
        <section className="flex flex-col">
          <div className="lg:mx-auto lg:w-[200px]">
            <h3 className="text-xl font-medium uppercase tracking-wider gradient-text">
              Quick links
            </h3>
            <div className="mt-4 flex flex-col gap-3 capitalize">
              <Link href="/#about">About</Link>
              <Link href="/contact">Services</Link>
              <Link href="/#projects">Projects</Link>
            </div>
          </div>
        </section>
        <section className="flex lg:items-center flex-col">
          <div className="lg:mx-auto lg:w-[200px]">
            <h3 className="text-xl font-medium uppercase tracking-wider gradient-text">
              important links
            </h3>
            <div className="mt-4 flex flex-col gap-3 capitalize">
              <Link href="/contact">Contact</Link>
            </div>
          </div>
        </section>
      </WidthConstraint>
      <WidthConstraint className="sm:text-md flex-col md:flex-row  gap-4 flex items-start py-5 md:items-center justify-center md:justify-between border-t text-sm border-gray-500 md:text-lg lg:text-xl">
        <span>
          Copyright © {new Date().getFullYear()} |{" "}
          <span className="gradient-text">My PortFolio</span>
        </span>
        <span>
          Designed By{" "}
          <Link href="https://twitter.com/dev__steve" className="gradient-text">
            dev_steve
          </Link>
        </span>
      </WidthConstraint>
    </footer>
  );
};

export default Footer;
