// Experience data — latest first
const experience = [
  {
    id: 4,
    company: "VSM Global Technologies",
    role: "React Developer / IT Specialist",
    type: "Full-Time",
    startDate: "2024-09-18",
    endDate: "2025-11-06",
    location: "Chennai, India",
    description:
      "Contributed to multiple full-stack projects including PHP business websites, React Native/Next.js mobile UI, React.js admin panels, CRM systems, UI/UX projects, Shopify/WordPress CMS customization, and internal office applications.",
    responsibilities: [
      "Developed business websites and custom PHP applications",
      "Built mobile UI with React Native & Next.js",
      "Created React.js apps, CRMs, dashboards, internal tools",
      "Developed admin panels for mobile/web apps",
      "Customized Shopify & WordPress CMS websites",
      "Designed complete UI/UX systems in Figma",
      "Built optimized, responsive, high-performance interfaces",
      "Collaborated with backend & design teams",
      "Maintained code structure using Git & component patterns"
    ],
    technologies: [
      "React.js",
      "Next.js",
      "React Native",
      "JavaScript",
      "PHP",
      "XAMPP",
      "HTML",
      "CSS",
      "Bootstrap",
      "Tailwind CSS",
      "Figma",
      "Shopify",
      "WordPress",
      "Git",
      "REST APIs"
    ],
    achievements: [
      "Developed multiple CRMs, dashboards & custom software",
      "Delivered complete UI/UX prototype systems in Figma",
      "Built CMS-based e-commerce & business websites",
      "Received 'Best Employee' award for first work anniversary",
      "Contributed to internal product development and optimization"
    ],
    logo: "🎓",
    color: "#f59e0b",
    track: "professional"
  },

  {
    id: 3,
    company: "Magic Bus India Foundation",
    role: "Cloud Engineer Trainee",
    type: "Trainee",
    startDate: "2024-01-03",
    endDate: "2024-05-31",
    location: "Chennai, India",
    description:
      "Worked as an AWS Cloud Engineer Trainee with hands-on experience in cloud deployment, infrastructure management, and automation using AWS services.",
    responsibilities: [
      "Deployed cloud infrastructure using EC2, VPC, ECS and ELB",
      "Configured IAM roles, policies, MFA, and secure access",
      "Implemented serverless architecture using AWS Lambda",
      "Managed S3 and EFS for storage solutions",
      "Monitored systems using CloudWatch",
      "Automated infra provisioning with CloudFormation",
      "Documented cloud procedures and architecture flows"
    ],
    technologies: [
      "AWS EC2",
      "AWS VPC",
      "IAM",
      "S3",
      "EFS",
      "AWS Lambda",
      "CloudWatch",
      "CloudFormation",
      "ECS",
      "AWS CLI"
    ],
    achievements: [
      "Successfully completed AWS Cloud Practitioner (CLF-C02)",
      "Built automated infra templates in CloudFormation",
      "Improved reliability through secure IAM & VPC config",
      "Worked with serverless automation and event workflows"
    ],
    logo: "🌱",
    color: "#10b981",
    track: "trainee"
  },

  {
    id: 1,
    company: "Final Year Academic Project",
    role: "Machine Learning Project Developer",
    type: "Academic",
    startDate: "2022-08-01",
    endDate: "2023-04-30",
    location: "Chennai, India",
    description:
      "Developed a machine learning model to predict agricultural soil contamination levels using Python and real-world datasets. The project focused on identifying harmful contamination in farmland soil based on user inputs and Kaggle-sourced data.",
    responsibilities: [
      "Collected and pre-processed soil datasets from Kaggle",
      "Implemented ML algorithms to classify contamination levels",
      "Developed Python-based predictive scripts using Jupyter Notebook",
      "Performed data cleaning, feature engineering, and model evaluation",
      "Built an interactive system where users enter soil parameters to receive predicted contamination results",
      "Analyzed accuracy and optimized model performance",
      "Prepared project documentation, research paper content, and final presentation"
    ],
    technologies: [
      "Python",
      "Machine Learning",
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "Jupyter Notebook",
      "Matplotlib"
    ],
    achievements: [
      "Successfully built a functional soil contamination prediction model",
      "Achieved strong prediction accuracy with optimized ML algorithms",
      "Completed full project lifecycle—dataset processing to prototype output system",
      "Presented the project with distinction during final-year evaluation",
      "Published research paper in International Conference on Recent Advances in Science, Engineering & Management (ICRASEM 2023)"
    ],
    logo: "🧪",
    color: "#22d3ee",
    track: "trainee"
  },

  {
    id: 2,
    company: "DLK Career Development Centre",
    role: "Python Trainee (Intern)",
    type: "Internship",
    startDate: "2022-04-01",
    endDate: "2022-04-30",
    location: "Chennai, India",
    description:
      "Completed a one-month Python training internship during my final year of engineering, learning Python fundamentals, SQL basics, MATLAB introduction, and image recognition concepts.",
    responsibilities: [
      "Practiced core Python programming concepts",
      "Worked on SQL basics and relational DB concepts",
      "Learned MATLAB fundamentals",
      "Explored Python-based basic image recognition",
      "Used Jupyter Notebook for Python execution",
      "Completed exercises & tasks during internship"
    ],
    technologies: ["Python", "SQL", "MATLAB (Basics)", "Jupyter Notebook"],
    achievements: [
      "Successfully completed Python trainee internship certification",
      "Gained strong foundation in Python basics",
      "Understood image recognition fundamentals"
    ],
    logo: "💼",
    color: "#a855f7",
    track: "internship"
  }
];


// Proper date parser (avoids timezone shifting)
function parseLocalDate(dateString) {
  return new Date(dateString + "T00:00:00");
}

// ===============================
// FIXED — Duration Calculation
// ===============================
export function calculateDuration(startDate, endDate) {
  const start = parseLocalDate(startDate);
  const end = endDate ? parseLocalDate(endDate) : new Date();

  let totalMonths =
    (end.getFullYear() - start.getFullYear()) * 12 +
    (end.getMonth() - start.getMonth());

  if (totalMonths < 1) return "Less than a month";

  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;

  if (years > 0 && months > 0)
    return `${years} year${years > 1 ? "s" : ""} ${months} month${
      months > 1 ? "s" : ""
    }`;

  if (years > 0)
    return `${years} year${years > 1 ? "s" : ""}`;

  return `${months} month${months > 1 ? "s" : ""}`;
}


// ===============================
// FIXED — Total Experience
// ===============================
export function calculateTotalExperience() {
  if (experience.length === 0) return "0 years";

  const earliest = experience.reduce((min, job) =>
    job.startDate < min ? job.startDate : min
  , experience[0].startDate);

  return calculateDuration(earliest, null);
}


// ===============================
// FIXED — Format Date for UI
// ===============================
export function formatDate(dateString) {
  if (!dateString) return "Present";

  const date = parseLocalDate(dateString);

  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
  });
}

export default experience;
