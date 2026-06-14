import type { Metadata } from "next";
import { SITE } from "../constants";

type PageMetadataOptions = {
  title: string;
  description: string;
  path?: string;
};

function getOgImageUrl(title: string, description: string) {
  const base = SITE.url.replace(/\/$/, "");
  const params = new URLSearchParams({ title, description });
  return `${base}/og?${params.toString()}`;
}

export function createPageMetadata({
  title,
  description,
  path = "",
}: PageMetadataOptions): Metadata {
  const url = `${SITE.url}${path}`;
  const ogImageUrl = getOgImageUrl(title, description);

  return {
    title,
    description,
    authors: [{ name: SITE.name }],
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "website",
      url,
      title,
      description,
      siteName: SITE.name,
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImageUrl],
    },
  };
}

export const homeMetadata = createPageMetadata({
  title: SITE.title,
  description: SITE.description,
});
