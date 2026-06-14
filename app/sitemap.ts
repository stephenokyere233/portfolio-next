import type { MetadataRoute } from "next";
import { getSiteOrigin } from "../lib/json-ld";

const ROUTES: Array<{
  path: string;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  priority: number;
}> = [
  { path: "", changeFrequency: "weekly", priority: 1 },
  { path: "/projects", changeFrequency: "monthly", priority: 0.9 },
  { path: "/blog", changeFrequency: "monthly", priority: 0.7 },
  { path: "/contact", changeFrequency: "monthly", priority: 0.8 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const origin = getSiteOrigin();

  return ROUTES.map(({ path, changeFrequency, priority }) => ({
    url: `${origin}${path}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }));
}
