// Import images correctly
import pro1 from "../common/assets/pro1.jpg";
import pro2 from "../common/assets/pro2.jpg";
import pro3 from "../common/assets/pro3.jpg";

const projects = [
  {
    id: 1,
    title: "E-Commerce Website Development",
    description:
      "End-to-end e-commerce website development with modern UI/UX, integrated CMS platforms, and mobile app support. Built stores using React.js, Shopify, WordPress, and custom PHP functionalities. Also developed mobile-friendly versions using React Native and Expo.",
    tech: ["React.js", "Shopify / WordPress (CMS)", "PHP", "React Native", "Expo"],
    // github: "https://github.com/yourusername/ecommerce",
    // live: "https://ecommerce-demo.vercel.app",
    image: pro2, // Image imported above
  },

  {
    id: 2,
    title: "Employee Management Custom Software",
    description:
      "A complete employee management system with attendance tracking, role-based login, admin dashboard, and API-based data handling. Designed UI in Figma and developed using React.js and Node.js with streamlined workflows.",
    tech: ["React.js", "Node.js", "REST API", "Bootstrap", "Figma", "GitHub"],
    // github: "https://github.com/yourusername/employee-management",
    // live: "https://employee-demo.vercel.app",
    image: pro1, // Image imported above
  },

  {
    id: 3,
    title: "Personal Portfolio Website",
    description:
      "A modern and responsive personal portfolio built using React.js with Tailwind CSS and Bootstrap for styling. Features project showcases, animations, and a clean professional layout.",
    tech: ["React.js", "Tailwind CSS", "Bootstrap", "Firebase"],
    // github: "https://github.com/yourusername/portfolio",
    // live: "https://keerthana.dev",
    image: pro3, // Image imported above
  }
];

export default projects;
