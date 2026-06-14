import Logo from "@/logo";
import WidthConstraint from "@/width-constraint";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { ROUTES } from "../constants";

const Header = () => {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 16);
      setMenuOpen((open) => (open ? false : open));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const closeMenu = () => setMenuOpen(false);
    router.events.on("routeChangeComplete", closeMenu);
    return () => router.events.off("routeChangeComplete", closeMenu);
  }, [router.events]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 h-16 flex items-center transition-[border-color] duration-300 ${
        scrolled || menuOpen
          ? "border-b border-border bg-page"
          : "border-b border-transparent"
      }`}
    >
      <WidthConstraint className="w-full flex justify-between items-center">
        <Logo />

        <div className="flex items-center gap-8">
          <nav className="hidden md:flex items-center gap-8">
            {ROUTES.map((route) => {
              const isActive =
                router.asPath === route.pathname ||
                (route.pathname.startsWith("/#") &&
                  router.pathname === "/" &&
                  router.asPath.includes(route.pathname.slice(1)));

              return (
                <div className={isActive ? "navlink" : "link"} key={route.name}>
                  <Link
                    href={route.pathname}
                    className="text-[15px] font-medium py-2 text-white/80 hover:text-white transition-colors"
                  >
                    {route.name}
                  </Link>
                </div>
              );
            })}
          </nav>

          <Link
            href="/resume.pdf"
            className="hidden sm:inline-block gradient-border-button text-sm font-semibold"
          >
            Download CV
          </Link>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col justify-center items-center gap-[5px] w-8 h-8"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            <span
              className={`block w-[18px] h-px bg-white transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] origin-center ${
                menuOpen ? "rotate-45 translate-y-[3px]" : ""
              }`}
            />
            <span
              className={`block w-[18px] h-px bg-white transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] origin-center ${
                menuOpen ? "-rotate-45 -translate-y-[3px]" : ""
              }`}
            />
          </button>
        </div>
      </WidthConstraint>

      <div
        className={`absolute top-16 left-0 right-0 bg-page border-b border-border md:hidden transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] overflow-hidden ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 border-transparent"
        }`}
      >
        <nav className="flex flex-col px-5 py-6 gap-4">
          {ROUTES.map((route) => (
            <Link
              key={route.name}
              href={route.pathname}
              onClick={() => setMenuOpen(false)}
              className="text-lg text-white/80 hover:text-white transition-colors"
            >
              {route.name}
            </Link>
          ))}
          <Link
            href="/resume.pdf"
            onClick={() => setMenuOpen(false)}
            className="gradient-border-button text-sm font-semibold w-max mt-2"
          >
            Download CV
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
