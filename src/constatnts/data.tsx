import { GithubIcon, LinkedinIcon, MailIcon, TwitterIcon } from "lucide-react";

export const projects = [
  {
    id: 1,
    title: "Nestora Real Estate (In Progress)",
    description:
      "A full-stack real estate listing platform for seamless property discovery, connecting landlord and tenants with filtering, and booking.",
    subDescription: [
      "Developing a modern real estate interface using Next.js, TypeScript, and Tailwind CSS for a fast and responsive experience.",
      "Utilizing Prisma ORM with PostgreSQL for scalable and secure data modeling.",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/1.png",
    tags: [
      { id: 1, name: "Next.js", path: "/assets/logos/Next.js (1).svg" },
      { id: 2, name: "TypeScript", path: "/assets/logos/TypeScript.svg" },
      { id: 3, name: "TailwindCSS", path: "/assets/logos/Tailwind CSS.svg" },
      { id: 4, name: "PostgreSQL", path: "/assets/logos/PostgresSQL.svg" },
      { id: 5, name: "Prisma", path: "/assets/logos/prisma.svg" },
    ],
  },
  {
    id: 2,
    title: "Cartella E-Commerce",
    description:
      "An end-to-end ecommerce web application with real-time checkout and robust admin capabilities.",
    subDescription: [
      "Built with Next.js and TypeScript for scalable frontend and backend integration.",
      "Implemented Stripe for secure, real-time payments and transaction handling.",
    ],
    href: "https://cartella-e-commerce.vercel.app/",
    logo: "",
    image: "/assets/projects/3.png",
    tags: [
      { id: 1, name: "Next.js", path: "/assets/logos/Next.js (1).svg" },
      { id: 2, name: "TypeScript", path: "/assets/logos/TypeScript.svg" },
      { id: 3, name: "TailwindCSS", path: "/assets/logos/Tailwind CSS.svg" },
      { id: 4, name: "Stripe", path: "/assets/logos/stripe.svg" },
      { id: 6, name: "Sanity", path: "/assets/logos/sanity.svg" },
    ],
  },
  {
    id: 3,
    title: "Finance Dashboard",
    description:
      "An analytics dashboard for visualizing personal and business financial data.",
    subDescription: [
      "Engineered with MERN stack and TypeScript for strong type safety and modularity.",
      "Integrated Redux for reliable state management and real-time chart updates.",
    ],
    href: "https://finance-dashboard-backend-fy04.onrender.com/",
    logo: "",
    image: "/assets/projects/2.png",
    tags: [
      { id: 1, name: "React", path: "/assets/logos/React.svg" },
      { id: 2, name: "TypeScript", path: "/assets/logos/JavaScript.svg" },
      { id: 3, name: "MongoDB", path: "/assets/logos/MongoDB.svg" },
      { id: 4, name: "ExpressJs", path: "/assets/logos/express.svg" },
      { id: 5, name: "Redux", path: "/assets/logos/Redux.svg" },
      { id: 6, name: "Chart.js", path: "/assets/logos/chartjs.svg" },
    ],
  },
  {
    id: 4,
    title: "Lumeo E-Commerce Frontend",
    description:
      "A clean and responsive ecommerce user interface for product discovery and shopping.",
    subDescription: [
      "Designed and developed with React and Tailwind CSS for fast, accessible UX.",
      "Built a reusable component system and dynamic product card grid.",
    ],
    href: "https://lumeo-ecommerce-website.vercel.app/",
    logo: "",
    image: "/assets/projects/4.png",
    tags: [
      { id: 1, name: "React", path: "/assets/logos/React.svg" },
      { id: 2, name: "TailwindCSS", path: "/assets/logos/Tailwind CSS.svg" },
      { id: 3, name: "JavaScript", path: "/assets/logos/JavaScript.svg" },
    ],
  },
  {
    id: 6,
    title: "Geritch Restaurant Landing Page",
    description:
      "A modern landing page for a restaurant with animations and mobile responsiveness.",
    subDescription: [
      "Designed using Tailwind CSS with rich visual hierarchy and clean layouts.",
      "Implemented scroll-based animations and hover effects using JavaScript.",
    ],
    href: "https://geritcht-restaurant-website.vercel.app/",
    logo: "",
    image: "/assets/projects/5.png",
    tags: [
      { id: 1, name: "React", path: "/assets/logos/React.svg" },
      { id: 2, name: "JavaScript", path: "/assets/logos/JavaScript.svg" },
      { id: 3, name: "TailwindCSS", path: "/assets/logos/Tailwind CSS.svg" },
    ],
  },
];

export const mySocials = [
  {
    name: "WhatsApp",
    href: "",
    icon: "/assets/socials/whatsApp.svg",
  },
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/ali-sanati/",
    icon: "/assets/socials/linkedIn.svg",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/ali.sanatidev/reels/",
    icon: "/assets/socials/instagram.svg",
  },
];

export const experiences = [
  {
    title: "Front-End Developer",
    job: "5GS Media",
    date: "November, 2024 - February, 2025",
    contents: [
      "My main responsibility was to design, develop and optimize the user experience interface, ensuring a seamless, responsive experience across devices and browser.",
      "I collaborated with the design team to turn wireframes and mockupsinto interactive webpages using NextJs, ContextAPI & API",
      "I developed a responsive landing page, client dashboard and admin dashboard, as well as a streamlined sign-up to improve user registration and onboarding.",
      "In collaboration with the design and back-end teams, I integrated APIs to display dynamic content and enable real-time update across the site.",
    ],
  },
  {
    title: "Back-End Developer",
    job: "5GS Media",
    date: "March, 2025 - April, 2025",
    contents: [
      "I was hired to Implement secure APIs gateway corrections and update the codebase",
      "Ensured easy appointment bookings, product display function and messaging system between users and admin",
      "Built the cart and products API's ",
    ],
  },
  {
    title: "Front-End Developer",
    job: "DeffendNet",
    date: "May, 2025 - June, 2025",
    contents: [
      "Designed and developed a responsive cybersecurity landing page using React, Vite, and Tailwind CSS to enhance brand visibility.",
      "Implemented modern UI/UX principles, ensuring accessibility and performance across devices and browsers.",
      "Collaborated with the design team to translate high-fidelity mockups into functional components with pixel-perfect accuracy.",
      "Optimized page load speed and SEO, resulting in improved engagement and search engine ranking.",
      "Demonstrated proficiency in component-based architecture, state management, and code reusability.",
    ],
  },
];

export const socials = [
  {
    href: "https://github.com/aboloredev",
    label: "GitHub",
    icon: <GithubIcon />,
  },
  {
    href: "https://linkedin.com/in/fathiualabi",
    label: "LinkedIn",
    icon: <LinkedinIcon />,
  },
  {
    href: "mailto:alabiabolore4@gmail.com",
    label: "Email",
    icon: <MailIcon />,
  },
  {
    href: "https://twitter.com/abolorreeeee",
    label: "Twitter",
    icon: <TwitterIcon />,
  },
];
