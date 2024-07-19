import React from "react";
import Head from "next/head";

const BlogMeta = ({ title }: { title: string }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta title={title} content="" />
    </Head>
  );
};

export default BlogMeta;
