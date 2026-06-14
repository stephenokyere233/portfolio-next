import { CONTACTS, PROJECTS, SERVICES, SITE, STACK } from "../constants";

export function getSiteOrigin() {
  return SITE.url.replace(/\/$/, "");
}

export function getSocialLinks() {
  return CONTACTS.filter((contact) => !contact.link.startsWith("mailto:")).map(
    (contact) => contact.link.split("?")[0],
  );
}

type JsonLd = Record<string, unknown>;

function withContext(data: JsonLd | JsonLd[]) {
  return {
    "@context": "https://schema.org",
    ...(Array.isArray(data) ? { "@graph": data } : data),
  };
}

export function getGlobalJsonLd() {
  const origin = getSiteOrigin();

  return withContext([
    {
      "@type": "WebSite",
      "@id": `${origin}/#website`,
      url: `${origin}/`,
      name: SITE.name,
      description: SITE.description,
      inLanguage: "en",
      publisher: { "@id": `${origin}/#person` },
    },
    {
      "@type": "Person",
      "@id": `${origin}/#person`,
      name: SITE.name,
      url: `${origin}/`,
      image: `${origin}/profile/stephen.jpg`,
      jobTitle: SITE.role,
      email: SITE.email,
      description: SITE.aboutFocus,
      sameAs: getSocialLinks(),
      knowsAbout: STACK.map((item) => item.name),
    },
    {
      "@type": "ProfessionalService",
      "@id": `${origin}/#business`,
      name: SITE.name,
      url: `${origin}/`,
      image: `${origin}/profile/stephen.jpg`,
      description: SITE.description,
      email: SITE.email,
      founder: { "@id": `${origin}/#person` },
      sameAs: getSocialLinks(),
      areaServed: "Worldwide",
      serviceType: SERVICES.map((service) => service.title),
    },
    {
      "@type": "ProfilePage",
      "@id": `${origin}/#webpage`,
      url: `${origin}/`,
      name: SITE.title,
      description: SITE.description,
      inLanguage: "en",
      isPartOf: { "@id": `${origin}/#website` },
      about: { "@id": `${origin}/#person` },
      mainEntity: { "@id": `${origin}/#person` },
    },
  ]);
}

export function getProjectsJsonLd() {
  const origin = getSiteOrigin();
  const pageUrl = `${origin}/projects`;

  return withContext([
    {
      "@type": "CollectionPage",
      "@id": `${pageUrl}/#webpage`,
      url: pageUrl,
      name: `Projects — ${SITE.name}`,
      description: SITE.worksIntro,
      inLanguage: "en",
      isPartOf: { "@id": `${origin}/#website` },
      about: { "@id": `${origin}/#person` },
      mainEntity: { "@id": `${pageUrl}/#itemlist` },
    },
    {
      "@type": "ItemList",
      "@id": `${pageUrl}/#itemlist`,
      name: "Selected client and side projects",
      description: SITE.worksIntro,
      numberOfItems: PROJECTS.length,
      itemListElement: PROJECTS.map((project, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "CreativeWork",
          name: project.name,
          description: project.desc,
          url: project.siteLink,
          creator: { "@id": `${origin}/#person` },
        },
      })),
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: `${origin}/`,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Projects",
          item: pageUrl,
        },
      ],
    },
  ]);
}

export function getContactJsonLd() {
  const origin = getSiteOrigin();
  const pageUrl = `${origin}/contact`;

  return withContext([
    {
      "@type": "ContactPage",
      "@id": `${pageUrl}/#webpage`,
      url: pageUrl,
      name: `Contact — ${SITE.name}`,
      description: SITE.contactIntro,
      inLanguage: "en",
      isPartOf: { "@id": `${origin}/#website` },
      about: { "@id": `${origin}/#person` },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: `${origin}/`,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Contact",
          item: pageUrl,
        },
      ],
    },
  ]);
}

export function getBlogJsonLd() {
  const origin = getSiteOrigin();
  const pageUrl = `${origin}/blog`;

  return withContext([
    {
      "@type": "Blog",
      "@id": `${pageUrl}/#blog`,
      url: pageUrl,
      name: `Blog — ${SITE.name}`,
      description: SITE.blogDescription,
      inLanguage: "en",
      publisher: { "@id": `${origin}/#person` },
      author: { "@id": `${origin}/#person` },
    },
    {
      "@type": "WebPage",
      "@id": `${pageUrl}/#webpage`,
      url: pageUrl,
      name: `Blog — ${SITE.name}`,
      description: SITE.blogDescription,
      inLanguage: "en",
      isPartOf: { "@id": `${origin}/#website` },
      about: { "@id": `${origin}/#person` },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: `${origin}/`,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Blog",
          item: pageUrl,
        },
      ],
    },
  ]);
}
