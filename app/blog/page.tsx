import WidthConstraint from "@/width-constraint";
import { SITE } from "../../constants";
import { createPageMetadata } from "../../lib/metadata";

export const metadata = createPageMetadata({
  title: `Blog — ${SITE.name}`,
  description: SITE.blogDescription,
  path: "blog",
});

export default function BlogPage() {
  return (
    <div className="min-h-[calc(100dvh-64px)] flex items-center justify-center pt-16">
      <WidthConstraint>
        <div className="box-surface px-8 py-16 md:px-20 md:py-24 text-center">
          <h1
            className="font-bold gradient-text"
            style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)" }}
          >
            Coming Soon
          </h1>
          <p className="text-white/60 text-[15px] mt-4">
            I&apos;m writing. Expect posts on React, Next.js, Vue, Nuxt, Flutter, and
            React Native — check back soon.
          </p>
        </div>
      </WidthConstraint>
    </div>
  );
}
