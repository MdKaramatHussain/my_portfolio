import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  // meta,
  // starbucks,
  // tesla,
  // shopify,
  carrent,
  jobit,
  tripguide,
  // threejs,
  lmr,
  microtechnologies,
  jest,
  mysql,
  nextjs,
  nestjs
} from "../assets";
export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Schema Design",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  // {
  //   name: "Next JS",
  //   icon: nextjs,
  // },
  // {
  //   name: "git",
  //   icon: git,
  // },
  // {
  //   name: "figma",
  //   icon: figma,
  // },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "Jest",
    icon: jest,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "Nest JS",
    icon: nestjs,
  },
];

const experiences = [
  {
    title: "Fullstack Developer",
    company_name: "Micro Technologies",
    icon: microtechnologies,
    iconBg: "#383E56",
    date: "April 2023 - June 2024",
    points: [
      "Developed and maintained scalable RESTful APIs using NestJS and Express, TypeScript improving performance and efficiency across multiple microservices.",
      "Wrote and executed comprehensive unit and integration tests using Jest, ensuring code quality and reducing production issues.",
      "Designed and maintained APIs with Node.js, MySQL, and MongoDB.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Backend Developer",
    company_name: "lmrwebsolution",
    icon: lmr,
    iconBg: "#E6DEDD",
    date: "July 2024 - Present",
    points: [
      "Developed and maintained scalable RESTful APIs using NestJS and Express, TypeScript improving performance and efficiency across multiple microservices.",
      "Formulated and Implemented Database schema.",
      "Managed and optimized MongoDB databases, implementing complex queries, aggregations, and indexing for high-traffic applications.",
      "Wrote and executed comprehensive unit and integration tests using Jest, ensuring code quality and reducing production issues.",
    ],
  },
  // {
  //   title: "Web Developer",
  //   company_name: "Shopify",
  //   icon: shopify,
  //   iconBg: "#383E56",
  //   date: "Jan 2022 - Jan 2023",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Mr. Bhanu Semar",
    designation: "CEO",
    company: "Owlseye",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their work and honest for their commitment.",
    name: "Mr Vinay Singh",
    designation: "Founder Micro Technologies",
    company: "Micro Technologies",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "meta-pro-space",
    description:
      // "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      "Meta-Pro.Space is an advanced decentralized platform offering lottery services. It enables users to participate in secure, blockchain-based lotteries with features like real-time transaction tracking, user registration, and comprehensive lottery management.",
    tags: [
      {
        name: "nest",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "node",
        color: "pink-text-gradient",
      },
      {
        name: "AWS(S3)",
        color: 'bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 text-transparent bg-clip-text',
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Owlseye",
    description:
      "owlseye is a form of Web-based platform that allows users to maintain their vehicle in a healthy condition, providing a convenient and efficient solution in a single tap for their vehicle.Owlseye deals with approx all type of vehicles and have a garage in multiple location.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "RESTAPIs",
        color: "green-text-gradient",
      },
      {
        name: "MySQL",
        color: "pink-text-gradient",
      },
      {
        name: "AWS(S3, EC2)",
        color: 'bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 text-transparent bg-clip-text',
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Tp-Bazar",
    description:
      "Tp-Bazar It is a form of electronic commerce which allows consumers to directly buy goods or services from a seller over the Internet. It is a shopping system application that allows the user to shop online without going to the shop to buy them, this will help in saving  the energy, fuel and time. ",
    tags: [
      {
        name: "Reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "React Native",
        color: "green-text-gradient",
      },
      {
        name: "Docker",
        color: "pink-text-gradient",
      },
      {
        name: "Redux",
        color: 'bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 text-transparent bg-clip-text',
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export const projectSummary = "Following projects showcase my skills and experience through real-world examples of my work. Each project is briefly describe with links to code repositories and live demons in it. It reflects my ability to solve complex problems, work with diffrent technologies, and manage projects effectively."
export const publicKey = "mqJUG-zKHQEAQib09"
export const templateKey = "template_oakda1l"
export const serviceKey = "service_615fv3f"

export { services, technologies, experiences, testimonials, projects };