import Head from "next/head";
import { SITE } from "../../constants";

const MetaHead = () => {
  return (
    <Head>
      <title>{SITE.title}</title>
      <meta name="title" content={SITE.title} />
      <meta name="description" content={SITE.description} />
      <meta name="author" content={SITE.name} />
      <link rel="canonical" href={SITE.url} />

      <meta property="og:type" content="website" />
      <meta property="og:url" content={SITE.url} />
      <meta property="og:title" content={SITE.title} />
      <meta property="og:description" content={SITE.description} />
      <meta property="og:site_name" content={SITE.name} />
      <meta
        property="og:image"
        content="https://res.cloudinary.com/devsteveserver/image/upload/v1687901242/Trailers_Home_3_xv3spg.png"
      />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={SITE.url} />
      <meta property="twitter:title" content={SITE.title} />
      <meta property="twitter:description" content={SITE.description} />
      <meta
        property="twitter:image"
        content="https://res.cloudinary.com/devsteveserver/image/upload/v1687901242/Trailers_Home_3_xv3spg.png"
      />
    </Head>
  );
};

export default MetaHead;
