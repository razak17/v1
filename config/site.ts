import type { Icons } from "../components/icons";

type ProjectType = {
  title: string;
  description: string;
  image: string;
  tech: string[];
  github?: string;
  external?: string;
};

export const skills = [
  "JavaScript",
  "TypeScript",
  "React",
  "Node.js",
  "Express",
  "Docker",
  "Python",
  "Postgresql",
];

export const navLinks = [
  {
    name: "Home",
    url: "#",
  },
  {
    name: "About",
    url: "#about",
  },
  {
    name: "Projects",
    url: "#projects",
  },
  {
    name: "Contact",
    url: "#contact",
  },
];

export const socialMedia = [
  {
    name: "GitHub",
    url: "https://github.com/razak17",
    icon: "github" as keyof typeof Icons,
  },

  {
    name: "Twitter",
    url: "https://twitter.com/theRazakMo",
    icon: "twitter" as keyof typeof Icons,
  },
];

export const footerLinks = [
  {
    name: "Blog",
    url: "https://blog.razakmo.me",
  },
  {
    name: "Projects",
    url: "#projects",
  },
  {
    name: "Imprint",
    url: "#",
  },
  {
    name: "Privacy Policy",
    url: "#",
  },
];

export const projects: ProjectType[] = [
  {
    title: "Howwdy",
    description:
      "A social media web application (twitter clone) that allows users to post, like, comment on posts and follow other users.",
    tech: [
      "react",
      "mantine",
      "react query",
      "node",
      "express",
      "mongodb",
      "firebase",
    ],
    image: "/projects/howdy.png",
    github: "https://github.com/razak17/howdy-ui",
    external: "https://howwwdy-ui.vercel.app",
  },
  {
    title: "Video sharing platform",
    description:
      "Basically a youtube clone. Users can upload videos, like, dislike, comment on videos and subscribe to channels.",
    tech: [
      "react",
      "node",
      "material UI",
      "styled components",
      "express",
      "firebase",
    ],
    image: "/projects/yt.png",
    github: "https://github.com/razak17/youtube-clone-frontend",
    external: "https://yt-clone-v1.vercel.app",
  },
  {
    title: "Tik Tok Clone",
    description:
      "A tik tok clone that allows users to upload videos, like, comment on videos and like videos.",
    tech: ["react", "redux", "express", "mongodb", "fireabase"],
    image: "/projects/tiktik.png",
    github: "https://github.com/razak17/howdy",
    external: "https://tiktik-ui.vercel.app",
  },
  {
    title: "Algorithm Visualizer",
    description:
      "Visualize sorting algorithms like bubble sort, merge sort, quick sort, and more. See how they work step by step.",
    tech: ["react", "tailwind", "algorithms"],
    image: "/projects/algo-visual.png",
    github: "https://github.com/razak17/algo-visualizer",
    external: "https://algo-visualizer-razakmo.vercel.app",
  },
];

export const featuredProjects: ProjectType[] = [
  {
    title: "Evershop",
    description:
      "A ecommerce shop for electronics built with Next.js, Shadcn, Postgresql and Stripe.",
    tech: ["NextJS", "Shadcn", "Postgresql", "Neon", "Stripe"],
    image: "/projects/evershop.png",
    github: "https://github.com/razak17/next-ecommerce-app",
    external: "https://ecommerce.razakmo.tech",
  },
  {
    title: "G-Client",
    description:
      "A comprehensive learning management system (LMS) built as part of Azubi Africa's TMP program (Cohort 2).",
    tech: ["NextJS", "Tailwind", "Postgres"],
    image: "/projects/g-client.png",
    github: "https://github.com/razak17/next-lms-platform",
    external: "https://lms.razakmo.tech",
  },
  {
    title: "Docs",
    description: "A Google Docs clone built with Next.js 15 and React 19.",
    tech: ["NextJS", "Tailwind", "Convex"],
    image: "/projects/docs.png",
    github: "https://github.com/razak17/fullstack-docs-clone",
    external: "https://fullstack-docs-clone.vercel.app",
  },
  {
    title: "Algorithm Visualizer",
    description:
      "Visualize sorting algorithms. See how they work step by step.",
    tech: ["react", "tailwind", "algorithms"],
    image: "/projects/algo-visual.png",
    github: "https://github.com/razak17/algo-visualizer",
    external: "https://algo-visualizer-razakmo.vercel.app",
  },
];
