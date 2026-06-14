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
  title: "Stephen Okyere | Software Developer — React, Next.js & Flutter",
  description:
    "Software developer Stephen Okyere builds fast web and mobile apps with React, Next.js, Vue, Nuxt, Flutter, and React Native. Open to contract work.",
  heroIntro:
    "I build web and mobile products that load fast and feel polished — React, Next.js, Vue, and Nuxt on the web; Flutter and React Native on mobile.",
  aboutIntro:
    "Web and mobile developer. A bit about how I got here and what I bring to a project.",
  aboutStory:
    "I came to programming later than most people do, but it stuck fast. I learn by building things, and I try to ship something new whenever I can.",
  aboutFocus:
    "Most days I'm shipping across platforms — web apps, mobile builds, the occasional side project. I care about clean code, interfaces that make sense, and work that holds up when real people use it.",
  footerTagline: "Software developer. React, Next.js, Vue, Nuxt, Flutter, React Native.",
  worksIntro:
    "Client websites, web apps, and side projects — a selection of what I've built and shipped.",
  contactIntro:
    "Hiring a developer for your next project? I work with React, Next.js, Vue, Nuxt, Flutter, and React Native. Send a message — happy to talk scope, timeline, and fit.",
  blogDescription:
    "Notes on React, Next.js, Vue, Nuxt, Flutter, and React Native — from someone who builds with them daily. New posts coming soon.",
  whatIDoIntro:
    "Web apps, mobile builds, UI work, and the tricky problems in between — four areas where I spend most of my time.",
} as const;

/** Disposable, throwaway, and commonly abused email domains. */
export const EMAIL_BLOCKLIST = {
  domains: [
    "10minutemail.com",
    "dispostable.com",
    "discard.email",
    "emailondeck.com",
    "fakeinbox.com",
    "fakemailgenerator.com",
    "getairmail.com",
    "getnada.com",
    "grr.la",
    "guerrillamail.com",
    "guerrillamailblock.com",
    "jetable.org",
    "mail-temp.com",
    "mailcatch.com",
    "maildrop.cc",
    "mailinator.com",
    "mailinator.net",
    "mailinator.org",
    "mailnesia.com",
    "mailnator.com",
    "mintemail.com",
    "mohmal.com",
    "mytemp.email",
    "pokemail.net",
    "sharklasers.com",
    "spam4.me",
    "spambox.us",
    "spamgourmet.com",
    "temp-mail.org",
    "tempail.com",
    "tempinbox.com",
    "tempmail.com",
    "throwaway.email",
    "trashmail.com",
    "yopmail.com",
  ],
  addresses: [] as string[],
} as const;

export const PROJECTS = [
  {
    name: "Eldad Nutakor",
    imgSrc: "/projects/eldad-www.png",
    desc: "Eldad Nutakor coaches leaders through consulting, storytelling, and leadership development",
    siteLink: "https://eldadnutakor.com/",
  },
  {
    name: "Oxegene",
    imgSrc: "/projects/oxegene.png",
    desc: "Venture and innovation firm building ideas, companies, and culture across Africa",
    siteLink: "https://www.oxegene.com/",
  },
  {
    name: "MG Creatives",
    imgSrc: "/projects/mg-creatives.png",
    desc: "Creative agency for design, digital experiences, and storytelling",
    siteLink: "https://mgcreatives.co.uk/",
  },
  {
    name: "dEX Ghana",
    imgSrc: "/projects/dex-ghana.png",
    desc: "Accra design foundation building community, programmes, and platforms for African designers",
    siteLink: "https://dexghana.org/",
  },
  {
    name: "Marafiq",
    imgSrc: "/projects/marafiq.png",
    desc: "Facility management company bringing purpose and performance to every property",
    siteLink: "https://marafiqgh.com/",
  },
  {
    name: "Crux Global",
    imgSrc: "/projects/crux.png",
    desc: "Music distribution platform for independent artists",
    siteLink: "https://www.cruxmusic.global/",
  },
  {
    name: "P&O Convenience",
    imgSrc: "/projects/pno.png",
    desc: "E-pharmacy and organic marketplace for healthcare in Ghana",
    siteLink: "https://www.pharmandorganic.com/",
  },
  {
    name: "Web3 Nigeria Blog",
    imgSrc: "/projects/web3nigeria-blog.png",
    desc: "Web3 news, articles, and podcasts with live crypto price tracking",
    siteLink: "https://www.web3nigeria.org/",
  },
  {
    name: "Difudi",
    imgSrc: "/projects/difudi.png",
    desc: "Discover and save discounts from local businesses",
    siteLink: "https://difudi.com/",
  },
  {
    name: "Reidad",
    imgSrc: "/projects/reidad.png",
    desc: "Real estate platform to search property listings for sale and rent",
    siteLink: "https://reidad.vercel.app/",
  },
  {
    name: "Oarcoin",
    imgSrc: "/projects/oarcoin.png",
    desc: "Community-powered open digital currency for everyday transactions",
    siteLink: "https://www.oarcoin.org/",
  },

  {
    name: "Vyky",
    imgSrc: "/projects/vyky.png",
    desc: "E-commerce for recovery kits built for travel and daily wellness",
    siteLink: "https://stories.vyky.co/",
  },

  {
    name: "Nigeria Blockchain Week",
    imgSrc: "/projects/nigeria-blockchain-week.png",
    desc: "Event site for Nigeria's blockchain week with conferences, hackathons, and awards",
    siteLink: "https://www.nigeriablockchainweek.org/",
  },
  {
    name: "Velour",
    imgSrc: "/projects/velour.png",
    desc: "Digital wedding invitation with RSVP tracking and event details",
    siteLink: "https://velour.vercel.app/",
  },
  {
    name: "No Ordinary Techie",
    imgSrc: "/projects/no-ordinary-techie.png",
    desc: "Community platform for techies to connect, learn, and grow",
    siteLink: "https://not-www.vercel.app/",
  },
  {
    name: "Yeb Gallery",
    imgSrc: "/projects/yeb-gallery.png",
    desc: "Online gallery for contemporary art",
    siteLink: "https://yebgallery.com/",
  },
  {
    name: "Bryllupslisten",
    imgSrc: "/projects/bryllup.png",
    desc: "Norwegian wedding wishlist registry linked to top retailers",
    siteLink: "https://bryllupslisten.no/",
  },
  {
    name: "Prisem Medical",
    imgSrc: "/projects/prisem.png",
    desc: "Medical supplies company transforming healthcare delivery across Ghana",
    siteLink: "https://prisem-www.vercel.app/",
  },
  {
    name: "Degen Tribe",
    imgSrc: "/projects/degen.png",
    desc: "Onchain community forum building the largest degen tribe on the web",
    siteLink: "https://degentribe.com/",
  },
  {
    name: "Macel Care Limited",
    imgSrc: "/projects/macel.png",
    desc: "Healthcare site for booking appointments and joining the care team",
    siteLink: "https://macelcare.com/",
  },
  {
    name: "Openwaver",
    imgSrc: "/projects/openwaver.png",
    desc: "Web3 studio building blockchain solutions and dApp infrastructure",
    siteLink: "https://openwaver.com/",
  },
  {
    name: "Bithub Inc.",
    imgSrc: "/projects/bithub.png",
    desc: "Remote talent marketplace for hiring vetted developers from $12/hr",
    siteLink: "https://bithubinc.com/",
  },
  {
    name: "Fifth Avenue Apartments",
    imgSrc: "/projects/fifthavenue.png",
    desc: "Luxury executive apartment bookings tailored to your comfort",
    siteLink: "https://www.fifthavenueluxuryapartments.com/",
  },
  {
    name: "Kobby's Apartments",
    imgSrc: "/projects/kobbysapartment.png",
    desc: "Lodge and short-stay apartment site with booking and property tours",
    siteLink: "https://kobbysapartments.vercel.app/",
  },
  {
    name: "Ton Summit",
    imgSrc: "/projects/tonsummit.png",
    desc: "Landing page for the TON ecosystem's flagship developer summit",
    siteLink: "https://www.tonsummit.org/",
  },
  {
    name: "Web3 Nigeria",
    imgSrc: "/projects/web3nigeria.png",
    desc: "Community hub connecting 5,000+ members across Nigeria's Web3 ecosystem",
    siteLink: "https://www.web3nigeria.org/",
  },
  {
    name: "Chain 2055",
    imgSrc: "/projects/chain.png",
    desc: "Registration site for the Solana Summer Global Meetup on blockchain",
    siteLink: "https://chain2055.com/",
  },
  {
    name: "Tigerians NFT",
    imgSrc: "/projects/tigerians.png",
    desc: "Art-focused NFT community exploring use cases for the Tigerians IP",
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
    // siteLink: "https://www.roguereports.com/",
    siteLink: "https://roguereports.vercel.app/",
  },
  {
    name: "Palmplayy",
    imgSrc: "/projects/palmplayy.png",
    desc: "Music streaming app to discover artists, charts, and new tracks",
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
    desc: "Mint a Waver Pass for exclusive access to Openwaver Web3 products",
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
      "Websites and web apps with React, Next.js, Vue, and Nuxt. Speed, accessibility, and code that's easy to maintain later.",
  },
  {
    title: "Mobile Development",
    description:
      "iOS and Android from one codebase with Flutter and React Native. Native feel without running two separate apps.",
  },
  {
    title: "UI/UX Design",
    description:
      "Landing pages, dashboards, and flows that are straightforward to use. Good design should get out of the way.",
  },
  {
    title: "Problem Solving",
    description:
      "Slow pages, stubborn bugs, messy architecture — I like digging into hard problems across the stack.",
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
