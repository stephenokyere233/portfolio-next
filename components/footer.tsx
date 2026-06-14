import Logo from "@/logo";
import WidthConstraint from "@/width-constraint";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CONTACTS, SITE } from "../constants";

const FooterBanner = () => {
  return (
    <div className="box-surface relative overflow-hidden my-20">
      <div className="absolute top-0 left-0 right-0 h-[2px] gradient-bg" />
      <div className="px-8 py-14 md:px-12 md:py-16 flex flex-col md:flex-row md:items-center md:justify-between gap-8 md:gap-12">
        <h2
          className="font-bold tracking-[-0.03em] leading-[1.1] text-white"
          style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
        >
          Got something to ship?
        </h2>
        <Link
          href="mailto:stephenokyere621@gmail.com"
          className="link text-[15px] text-white/70 hover:text-white transition-colors shrink-0"
        >
          stephenokyere621@gmail.com &rarr;
        </Link>
      </div>
    </div>
  );
};

const Footer = () => {
  const pathname = usePathname();

  return (
    <footer className="pt-6">
      {pathname !== "/blog" && (
        <WidthConstraint>
          <FooterBanner />
        </WidthConstraint>
      )}
      <div className="border-t border-border">
        <WidthConstraint className="grid gap-10 py-12 md:grid-cols-3">
          <section>
            <div className="w-[150px] mb-4">
              <Logo />
            </div>
            <p className="text-white/60 text-[15px] mb-5">{SITE.footerTagline}</p>
            <div className="flex gap-5">
              {CONTACTS.map((contact, index) => (
                <Link
                  key={index}
                  href={contact.link}
                  target={contact.link.startsWith("http") ? "_blank" : undefined}
                  rel={
                    contact.link.startsWith("http") ? "noopener noreferrer" : undefined
                  }
                  className="text-muted hover:text-white transition-colors duration-200"
                  aria-label={contact.link}
                >
                  <contact.icon size={18} />
                </Link>
              ))}
            </div>
          </section>
          <section>
            <h3 className="text-sm font-semibold uppercase tracking-wider gradient-text mb-4">
              Quick links
            </h3>
            <div className="flex flex-col gap-3 text-[15px] text-white/70">
              <Link href="/#about" className="hover:text-white transition-colors">
                About
              </Link>
              <Link href="/projects" className="hover:text-white transition-colors">
                Projects
              </Link>
              <Link href="/contact" className="hover:text-white transition-colors">
                Contact
              </Link>
            </div>
          </section>
          <section>
            <h3 className="text-sm font-semibold uppercase tracking-wider gradient-text mb-4">
              Contact
            </h3>
            <Link
              href="mailto:stephenokyere621@gmail.com"
              className="text-[15px] text-white/70 hover:text-white transition-colors"
            >
              stephenokyere621@gmail.com
            </Link>
          </section>
        </WidthConstraint>
        <WidthConstraint className="flex flex-col sm:flex-row items-center justify-between gap-4 py-5 border-t border-border text-sm text-muted">
          <span>Copyright &copy; {new Date().getFullYear()} </span>
          <span>
            Designed by{" "}
            <Link
              href="https://twitter.com/dev__steve"
              className="gradient-text hover:opacity-80 transition-opacity"
            >
              dev_steve
            </Link>
          </span>
        </WidthConstraint>
      </div>
    </footer>
  );
};

export default Footer;
