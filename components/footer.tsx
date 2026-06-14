import Logo from "@/logo";
import WidthConstraint from "@/width-constraint";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CONTACTS, SITE } from "../constants";

const FooterBanner = () => {
  return (
    <div className="box-surface relative overflow-hidden my-20">
      <div className="absolute top-0 left-0 right-0 h-[3px] gradient-bg" />
      <div className="px-6 py-16 md:py-20 md:px-12 flex flex-col items-center text-center gap-6">
        <h2
          className="font-semibold leading-tight"
          style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
        >
          Want to build
          <br />
          <span className="gradient-text">something cool?</span>
        </h2>
        <p className="text-white/60 text-[15px] max-w-md">
          Building something on web or mobile? Tell me what you&apos;re working on —
          I&apos;d love to hear about it.
        </p>
        <Link
          href="mailto:stephenokyere621@gmail.com"
          className="btn-secondary text-[15px] inline-block"
        >
          stephenokyere621@gmail.com
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
          <span>
            Copyright &copy; {new Date().getFullYear()} |{" "}
            <span className="gradient-text">My Portfolio</span>
          </span>
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
