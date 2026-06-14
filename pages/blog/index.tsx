import WidthConstraint from "@/width-constraint";
import Head from "next/head";
import { SITE } from "../../constants";

const BlogHome = () => {
  return (
    <>
      <Head>
        <title>Blog — {SITE.name}</title>
        <meta name="description" content={SITE.blogDescription} />
        <link rel="canonical" href={`${SITE.url}blog`} />
      </Head>
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
    </>
  );
};

export default BlogHome;
