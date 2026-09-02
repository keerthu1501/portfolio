// Import images correctly
import pro1 from "../common/assets/pro1.jpg";
import pro2 from "../common/assets/pro2.jpg";
import pro3 from "../common/assets/pro3.jpg";

const projects = [
  {
    id: 1,
    title: "Trolly - Electronics Store",
    description:
      "Electronics shopping e-commerce shop with a Vite + React.js user site and a Python admin panel. Superadmin can add multiple admins to manage the store, products, and orders.",
    tech: ["Vite", "React.js", "Python", "Admin Panel"],
    live: "https://trollyecommerce.vercel.app/",
    image: pro2,
  },

  {
    id: 2,
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
