import React from "react";
import Head from "next/head";

const MetaHead = () => {
  return (
    <Head>
      <title>Stephen Okyere — Software Developer</title>
      <meta name="title" content="Stephen Okyere — Software Developer" />
      <meta
        name="description"
        content="Skilled Software developer with expertise in React, Next.js, and Tailwind. I craft stunning, intuitive websites that deliver exceptional user experiences. Turning your vision into reality on the web, one pixel at a time."
      />

      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://devsteve.pro/" />
      <meta property="og:title" content="Stephen Okyere — Software Developer" />
      <meta
        property="og:description"
        content="Skilled Software developer with expertise in React, Next.js, and Tailwind. I craft stunning, intuitive websites that deliver exceptional user experiences. Turning your vision into reality on the web, one pixel at a time."
      />
      <meta
        property="og:image"
        content="https://res.cloudinary.com/devsteveserver/image/upload/v1687901242/Trailers_Home_3_xv3spg.png"
      />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://devsteve.pro/" />
      <meta property="twitter:title" content="Stephen Okyere — Software Developer" />
      <meta
        property="twitter:description"
        content="Skilled Software developer with expertise in React, Next.js, and Tailwind. I craft stunning, intuitive websites that deliver exceptional user experiences. Turning your vision into reality on the web, one pixel at a time."
      />
      <meta
        property="twitter:image"
        content="https://res.cloudinary.com/devsteveserver/image/upload/v1687901242/Trailers_Home_3_xv3spg.png"
      />
    </Head>
  );
};

export default MetaHead;
