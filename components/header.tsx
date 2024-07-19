import React from "react";
import Logo from "@/logo";
import Link from "next/link";
import { useRouter } from "next/router";
import { ROUTES } from "../constants";

const Header = () => {
  const router = useRouter();
  return (
    <header
      className={` bg-[#222] w-screen lg:px-10 z-10 px-6 h-[5em] flex items-center  fixed top-0`}
    >
      <div className=" mx-auto max-w-[1350px] w-full flex justify-between items-center">
        <Logo />
        <div className="flex items-center gap-10">
          <nav className=" hidden lg:flex gap-x-10 text-[18px] font-semibold">
            {ROUTES.map((route) => {
              const { name, pathname } = route;
              return (
                <div
                  className={router.pathname === pathname ? "navlink" : "link"}
                  key={name}
                >
                  <Link href={pathname}>
                    <p className="py-2">{name}</p>
                  </Link>
                </div>
              );
            })}
          </nav>
          <Link className="gradient-border-button" href="/resume.pdf">
            Download CV
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
