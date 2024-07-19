import React from "react";
import Logo from "@/logo";
import Link from "next/link";
import { useRouter } from "next/router";
import { ROUTES } from "../constants";
import WidthConstraint from "./width-constraint";

const Header = () => {
  const router = useRouter();
  return (
    <header className={` bg-[#222] w-screen z-10 h-[5em] flex items-center  fixed top-0`}>
      <WidthConstraint className=" w-full flex justify-between items-center">
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
      </WidthConstraint>
    </header>
  );
};

export default Header;
