import { HiCode, HiPuzzle, HiCursorClick } from "react-icons/hi";
import { AiFillCode } from "react-icons/ai";
import {
  FaEnvelope,
  FaInstagram,
  FaTwitter,
  FaGithub,
  FaLinkedin,
  FaYoutube,
  FaCss3,
  FaHtml5,
  FaJs,
  FaReact,
  FaGit,
  FaSass,
} from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { SiTailwindcss, SiRedux, SiFirebase } from "react-icons/si";

export const PROJECTS = [
  {
    name: "Chain 2055",
    imgSrc: "/chain.png",
    desc: "An event registration website",
    siteLink: "https://chain2055.com/",
    // techStack: ["NextJS", "TailwindCSS", "Firebase"],
  },
  {
    name: "Yeb Gallery",
    imgSrc: "/yeb-gallery.png",
    desc: "An art gallery website",
    siteLink: "https://yebgallery.com/",
    // techStack: ["NextJS", "TailwindCSS", "Firebase"],
  },
  {
    name: "Bryllupslisten",
    imgSrc: "/bryllup.png",
    desc: "Ecommerce site",
    siteLink: "https://bryllupslisten.no/",
    // techStack: ["NextJS", "TailwindCSS", "Firebase"],
  },
  {
    name: "Degen Tribe",
    imgSrc: "/degen.png",
    desc: "A web3 Community Platform",
    siteLink: "https://degentribe.com/",
    // techStack: ["NextJS", "TailwindCSS", "Firebase"],
  },

  {
    name: "Macel Care Limited",
    imgSrc: "/marcel.png",
    desc: "Health Care website",
    siteLink: "https://macelcare.com/",
    // techStack: ["NextJS", "TailwindCSS", "Firebase"],
  },
  {
    name: "Openwaver Company Limited",
    imgSrc: "/openwaver.png",
    desc: "Openwaver company website",
    siteLink: "https://openwaver.com/",
    // techStack: ["NextJS", "TailwindCSS"],
  },
  {
    name: "Bithub Inc.",
    imgSrc: "/bithub.png",
    desc: "Bithub company website",
    siteLink: "https://bithubinc.com/",
    // techStack: ["NextJS", "TailwindCSS"],
  },
  {
    name: "Trailers Home",
    imgSrc: "/palmflix.png",
    desc: "Movie App with Trailers",
    siteLink: "https://palmflix.vercel.app/",
    // techStack: ["NextJS", "Firebase", "TailwindCSS", "ContextAPI"],
  },
  {
    name: "Rogue Reports",
    imgSrc: "/rogue-reports.png",
    desc: "Blog and Newsletter website ",
    siteLink: "https://www.roguereports.com/",
  },
  {
    name: "Palmplayy",
    imgSrc: "/palmplayy.png",
    desc: "Music streaming app",
    siteLink: "https://palmplayy.vercel.app/",
    // techStack: ["NextJS", "NextAuth", "TailwindCSS", "Redux"],
  },

  {
    name: "Palmstore",
    imgSrc: "/palmstore1.png",
    desc: "Twitter and showwcase thread to images",
    siteLink: "https://palmstore-next.vercel.app/",
  },
  {
    name: "Be-Little",
    imgSrc: "/belittle.png",
    desc: "Image Compression App",
    siteLink: "https://be-little.vercel.app/",
  },

  {
    name: "Waverpass",
    imgSrc: "/waverpass.png",
    desc: "Waverpass Mint page",
    siteLink: "https://www.waverpass.com/",
  },
  {
    name: "Magna",
    imgSrc: "/magna.webp",
    desc: "NFT Project Landing Page",
    siteLink: "https://www.buymagna.com/",
  },

  {
    name: "Snap-A-Shot",
    imgSrc: "/snapashot.png",
    desc: "Twitter and showwcase thread to images",
    siteLink: "https://snap-a-shot.vercel.app/",
  },
];

export const CONTACTS = [
  {
    link: "mailto:stephenokyere621@gmail.com",
    icon: FaEnvelope,
    color: "text-gray-400",
  },
  {
    link: "https://twitter.com/dev__steve",
    icon: FaTwitter,
    color: "text-blue-500",
  },
  {
    link: "https://www.linkedin.com/in/devsteve23/?originalSubdomain=gh",
    icon: FaLinkedin,
    color: "text-blue-800",
  },
  {
    link: "https://github.com/stephenokyere233",
    icon: FaGithub,
    color: "",
  },
  {
    link: "https://www.youtube.com/@stevedevelops",
    icon: FaYoutube,
    color: "text-red-600",
  },
  {
    link: "https://www.instagram.com/dev.__steve/",
    icon: FaInstagram,
    color: "text-purple-600",
  },
];

export const ROUTES = [
  {
    name: "Home",
    pathname: "/",
  },
  {
    name: "About",
    pathname: "/#about",
  },
  {
    name: "Projects",
    pathname: "/#projects",
  },
  {
    name: "Blog",
    pathname: "/blog",
  },
];

export const SERVICES = [
  {
    title: "Web Development",
    description:
      "Proficient in crafting engaging user interfaces and dynamic experiences using HTML, CSS, and JavaScript. Skilled in utilizing popular front-end frameworks such as React, Vue, and Next.js. Experienced with Tailwind CSS and TypeScript to ensure efficient and scalable development. Strong emphasis on responsive design and cross-browser compatibility.",
    icon: AiFillCode,
  },
  {
    title: "Mobile App Development",
    description:
      "Extensive expertise in developing cross-platform mobile applications with React Native framework. Proficient in leveraging platform-specific APIs and integrating third-party libraries for enhanced functionality. Familiarity with Expo and React Navigation to streamline development and optimize navigation.",
    icon: HiCode,
  },
  {
    title: "UI/UX Design",
    description:
      "While not a professional UI/UX designer, I possess the skills to create visually appealing interfaces and user experiences. Let's discuss how I can assist with your next project.",
    icon: HiCursorClick,
  },
  {
    title: "Problem Solving and Debugging",
    description:
      "Equipped with an analytical mindset and strong problem-solving abilities to efficiently troubleshoot and resolve technical issues. Proficient in utilizing debugging tools and techniques to identify and address software bugs promptly. Committed to staying updated on the latest development practices and technologies.",
    icon: HiPuzzle,
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
  {
    name: "Stephen Okyere",
    title: "CEO - Ember Consulting",
    image: "/logo.png",
    message:
      "Mauris neque libero, aliquet vel mollis nec, euismod sed tellus. Mauris convallis dictum elit id volutpat. Vivamus blandit, dolor vitae lacinia maximus, risus velit vehicula odio, a tincidunt turpis turpis tempus ex.",
  },
  {
    name: "Stephen Okyere",
    title: "CEO - Ember Consulting",
    image: "/logo.png",
    message:
      "Mauris neque libero, aliquet vel mollis nec, euismod sed tellus. Mauris convallis dictum elit id volutpat. Vivamus blandit, dolor vitae lacinia maximus, risus velit vehicula odio, a tincidunt turpis turpis tempus ex.",
  },
  {
    name: "Stephen Okyere",
    title: "CEO - Ember Consulting",
    image: "/logo.png",
    message:
      "Mauris neque libero, aliquet vel mollis nec, euismod sed tellus. Mauris convallis dictum elit id volutpat. Vivamus blandit, dolor vitae lacinia maximus, risus velit vehicula odio, a tincidunt turpis turpis tempus ex.",
  },
];

export const STACK = [
  {
    name: "ReactJS",
    icon: FaReact,
  },
  {
    name: "NextJS",
    icon: TbBrandNextjs,
  },
  {
    name: "HTML5",
    icon: FaHtml5,
  },
  {
    name: "CSS3",
    icon: FaCss3,
  },
  {
    name: "JavaScript",
    icon: FaJs,
  },
  {
    name: "Sass",
    icon: FaSass,
  },
  {
    name: "Git",
    icon: FaGit,
  },
  {
    name: "TailwindCSS",
    icon: SiTailwindcss,
  },
  {
    name: "Redux",
    icon: SiRedux,
  },
  {
    name: "Firebase",
    icon: SiFirebase,
  },
];
