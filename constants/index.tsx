import {
  FaCss3,
  FaEnvelope,
  FaGit,
  FaGithub,
  FaHtml5,
  FaInstagram,
  FaJs,
  FaLinkedin,
  FaReact,
  FaSass,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import {
  SiFirebase,
  SiFlutter,
  SiNuxt,
  SiRedux,
  SiTailwindcss,
  SiVuedotjs,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

export const SITE = {
  name: "Stephen Okyere",
  url: "https://devstephen.pro/",
  email: "stephenokyere621@gmail.com",
  role: "Software developer",
  title: "Stephen Okyere — Software developer",
  description:
    "I'm Stephen Okyere — a software developer building with React, Next.js, Vue, Nuxt, Flutter, and React Native. Open to freelance and contract work.",
  heroIntro:
    "I build products that feel fast and look polished — from web apps with React, Next.js, Vue, and Nuxt to mobile with Flutter and React Native.",
  aboutFocus:
    "Most days I'm shipping software across platforms. I care about clean code, interfaces that make sense, and work that holds up once real people use it.",
  footerTagline:
    "Software developer. React, Next.js, Vue, Nuxt, Flutter, React Native.",
  worksIntro: "A mix of client work and side projects. Here's some of what I've shipped.",
  contactIntro:
    "Need a software developer for your next project? I work with React, Next.js, Vue, Nuxt, Flutter, and React Native. Send a message and let's talk.",
  blogDescription: "Notes on building software. More posts coming soon.",
} as const;

export const PROJECTS = [
  {
    name: "Yeb Gallery",
    imgSrc: "/projects/yeb-gallery.png",
    desc: "Online gallery for contemporary art",
    siteLink: "https://yebgallery.com/",
  },
  {
    name: "Bryllupslisten",
    imgSrc: "/projects/bryllup.png",
    desc: "Wedding registry and ecommerce for Norwegian couples",
    siteLink: "https://bryllupslisten.no/",
  },
  {
    name: "Degen Tribe",
    imgSrc: "/projects/degen.png",
    desc: "Community hub for Web3 builders",
    siteLink: "https://degentribe.com/",
  },
  {
    name: "Macel Care Limited",
    imgSrc: "/projects/macel.png",
    desc: "Healthcare services and patient information",
    siteLink: "https://macelcare.com/",
  },
  {
    name: "Openwaver",
    imgSrc: "/projects/openwaver.png",
    desc: "Corporate site for a tech company",
    siteLink: "https://openwaver.com/",
  },
  {
    name: "Bithub Inc.",
    imgSrc: "/projects/bithub.png",
    desc: "Corporate site for a software firm",
    siteLink: "https://bithubinc.com/",
  },
  {
    name: "Fifth Avenue Apartments",
    imgSrc: "/projects/fifthavenue.png",
    desc: "Luxury apartment bookings online",
    siteLink: "https://www.fifthavenueluxuryapartments.com/",
  },
  {
    name: "Kobby's Apartments",
    imgSrc: "/projects/kobbysapartment.png",
    desc: "Short-stay apartment listings",
    siteLink: "https://kobbysapartments.vercel.app/",
  },
  {
    name: "Ton Summit",
    imgSrc: "/projects/tonsummit.png",
    desc: "Landing page for a blockchain summit",
    siteLink: "https://www.tonsummit.org/",
  },
  {
    name: "Web3 Nigeria",
    imgSrc: "/projects/web3nigeria.png",
    desc: "Homepage for Nigeria's Web3 community",
    siteLink: "https://www.web3nigeria.org/",
  },
  {
    name: "Chain 2055",
    imgSrc: "/projects/chain.png",
    desc: "Conference sign-up and event details",
    siteLink: "https://chain2055.com/",
  },
  {
    name: "Tigerians NFT",
    imgSrc: "/projects/tigerians.png",
    desc: "NFT collection and mint experience",
    siteLink: "https://tigerians.io/",
  },
  {
    name: "Trailers Home",
    imgSrc: "/projects/palmflix.png",
    desc: "Browse films and watch trailers",
    siteLink: "https://palmflix.ce055.web.app/",
  },
  {
    name: "Rogue Reports",
    imgSrc: "/projects/rogue-reports.png",
    desc: "Independent journalism and newsletter",
    siteLink: "https://www.roguereports.com/",
  },
  {
    name: "Palmplayy",
    imgSrc: "/projects/palmplayy.png",
    desc: "Stream and discover new music",
    siteLink: "https://palmplayy.vercel.app/",
  },
  {
    name: "Palmstore",
    imgSrc: "/projects/palmstore1.png",
    desc: "Turn Twitter threads into shareable images",
    siteLink: "https://palmstore-next.vercel.app/",
  },
  {
    name: "Be-Little",
    imgSrc: "/projects/belittle.png",
    desc: "Compress images without losing quality",
    siteLink: "https://be-little.vercel.app/",
  },
  {
    name: "Waverpass",
    imgSrc: "/projects/waverpass.png",
    desc: "Mint passes for an NFT collection",
    siteLink: "https://www.waverpass.com/",
  },
  {
    name: "Magna",
    imgSrc: "/projects/magna.webp",
    desc: "Landing page for an NFT drop",
    siteLink: "https://www.buymagna.com/",
  },
  {
    name: "Snap-A-Shot",
    imgSrc: "/projects/snapashot.png",
    desc: "Save Twitter threads as images",
    siteLink: "https://snap-a-shot.vercel.app/",
  },
];

export const CONTACTS = [
  {
    link: "mailto:stephenokyere621@gmail.com",
    icon: FaEnvelope,
  },
  {
    link: "https://twitter.com/dev__steve",
    icon: FaTwitter,
  },
  {
    link: "https://www.linkedin.com/in/devsteve23/?originalSubdomain=gh",
    icon: FaLinkedin,
  },
  {
    link: "https://github.com/stephenokyere233",
    icon: FaGithub,
  },
  {
    link: "https://www.youtube.com/@stevedevelops",
    icon: FaYoutube,
  },
  {
    link: "https://www.instagram.com/dev.__steve/",
    icon: FaInstagram,
  },
];

export const ROUTES = [
  {
    name: "About",
    pathname: "/#about",
  },
  {
    name: "Work",
    pathname: "/projects",
  },
  {
    name: "Blog",
    pathname: "/blog",
  },
  {
    name: "Contact",
    pathname: "/contact",
  },
];

export const SERVICES = [
  {
    title: "Web Development",
    description:
      "Websites and web apps with React, Next.js, Vue, and Nuxt. I focus on speed, accessibility, and code that won't fight you later.",
  },
  {
    title: "Mobile Development",
    description:
      "iOS and Android from one codebase with Flutter and React Native. Apps that feel native without maintaining two separate builds.",
  },
  {
    title: "UI/UX Design",
    description:
      "Interfaces that are easy to use — whether it's a landing page or a full dashboard. Good design should get out of the way.",
  },
  {
    title: "Problem Solving",
    description:
      "Stuck on a bug, a slow page, or a messy architecture? I like digging into hard problems across the stack.",
  },
];

export const TESTIMONIALS = [
  {
    name: "Stephen Okyere",
    title: "CEO - Ember Consulting",
    image: "/logo.png",
    message:
      "Mauris neque libero, aliquet vel mollis nec, euismod sed tellus. Mauris convallis dictum elit id volutpat. Vivamus blandit, dolor vitae lacinia maximus, risus velit vehicula odio, a tincidunt turpis turpis tempus ex.",
  },
];

export const STACK = [
  { name: "ReactJS", icon: FaReact },
  { name: "NextJS", icon: TbBrandNextjs },
  { name: "Vue", icon: SiVuedotjs },
  { name: "Nuxt", icon: SiNuxt },
  { name: "Flutter", icon: SiFlutter },
  { name: "React Native", icon: FaReact },
  { name: "HTML5", icon: FaHtml5 },
  { name: "CSS3", icon: FaCss3 },
  { name: "JavaScript", icon: FaJs },
  { name: "Sass", icon: FaSass },
  { name: "Git", icon: FaGit },
  { name: "TailwindCSS", icon: SiTailwindcss },
  { name: "Redux", icon: SiRedux },
  { name: "Firebase", icon: SiFirebase },
];
