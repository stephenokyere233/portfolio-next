import HeroVisual from "@/hero-visual";
import WidthConstraint from "@/width-constraint";
import Link from "next/link";
import { CONTACTS, SITE } from "../constants";

const SOCIAL_LABELS: Record<string, string> = {
  mailto: "Email Stephen",
  twitter: "Twitter profile",
  linkedin: "LinkedIn profile",
  github: "GitHub profile",
  instagram: "Instagram profile",
};

function socialLabel(link: string): string {
  if (link.startsWith("mailto:")) return SOCIAL_LABELS.mailto;
  for (const [key, label] of Object.entries(SOCIAL_LABELS)) {
    if (link.includes(key)) return label;
  }
  return link;
}

const Hero = () => {
  const [firstName, ...rest] = SITE.name.split(" ");
  const lastName = rest.join(" ");

  return (
    <section className="relative flex items-center min-h-[calc(100dvh-5rem)] py-20 sm:py-24 md:py-28 mt-16">
      <WidthConstraint className="w-full">
        <div className="grid lg:grid-cols-[1fr_minmax(280px,440px)] gap-10 sm:gap-12 xl:gap-20 items-center">
          <div className="flex flex-col gap-6 sm:gap-7">
            <header className="hero-rise hero-rise-2">
              <h1
                className="font-bold tracking-[-0.03em] text-white whitespace-nowrap"
                style={{
                  fontSize: "clamp(2.5rem, 6vw + 0.5rem, 5rem)",
                  lineHeight: 1.05,
                }}
              >
                {firstName} {lastName}
              </h1>
              <p
                className="text-white/55 font-medium mt-4 sm:mt-5"
                style={{ fontSize: "clamp(1rem, 1.5vw + 0.75rem, 1.25rem)" }}
              >
                {SITE.role}
              </p>
            </header>

            <p className="hero-rise hero-rise-3 text-white/70 text-base sm:text-[17px] leading-[1.7] max-w-[58ch]">
              {SITE.heroIntro}
            </p>

            <div className="hero-rise hero-rise-4 flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-3 sm:gap-x-6 sm:gap-y-3">
              <Link
                href="/#work"
                className="btn-primary text-sm w-full sm:w-auto text-center"
              >
                View Work
              </Link>
              <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
                <Link
                  href="/contact"
                  className="text-sm text-white/60 hover:text-white link transition-colors duration-200 py-2"
                >
                  Get in Touch &rarr;
                </Link>
                <Link
                  href="/resume/2026.pdf"
                  className="text-sm text-white/60 hover:text-white link transition-colors duration-200 py-2"
                >
                  Download CV
                </Link>
              </div>
            </div>

            <div className="hero-rise hero-rise-5 flex items-center gap-5">
              {CONTACTS.map((contact, index) => (
                <Link
                  key={index}
                  href={contact.link}
                  target={contact.link.startsWith("http") ? "_blank" : undefined}
                  rel={
                    contact.link.startsWith("http") ? "noopener noreferrer" : undefined
                  }
                  className="text-muted hover:text-white transition-colors duration-200"
                  aria-label={socialLabel(contact.link)}
                >
                  <contact.icon size={20} />
                </Link>
              ))}
            </div>
          </div>

          <div className="hero-rise hero-rise-3 w-full max-w-[380px] sm:max-w-[420px] mx-auto lg:max-w-[440px] lg:mx-0 lg:ml-auto lg:w-full">
            <HeroVisual />
          </div>
        </div>
      </WidthConstraint>
    </section>
  );
};

export default Hero;
