import { Logo } from "@/once-ui/components";

const person = {
  firstName: "Kunal",
  lastName: "Rawat",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Senior Software Engineer",
  avatar: "/images/avatar.png",
  email: "kunalrawat425@gmail.com",
  location: "Mumbai, India",
  languages: ["English", "Hindi"],
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about software engineering, technology, and share thoughts on the intersection of
      creativity and engineering.
    </>
  ),
};

const social = [
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://linkedin.com/in/kunalrawat425",
  },
  {
    name: "Email",
    icon: "mail",
    link: "mailto:kunalrawat425@gmail.com",
  },
  {
    name: "Phone",
    icon: "phone",
    link: "tel:+919870619974",
  },
];

const home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Building bridges between design and code</>,
  featured: {
    display: true,
    title: <>Recent project: <strong className="ml-4">Once UI</strong></>,
    href: "/work/building-once-ui-a-customizable-design-system",
  },
  subline: (
    <>
      I'm Kunal, a Senior Software Engineer, where I craft intuitive
      <br /> user experiences. After hours, I build my own projects.
    </>
  ),
};

const about = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: true,
  },
  avatar: {
    display: true,
    src: "/images/avatar.png",
  },
  calendar: {
    display: false,
    link: "https://calendly.com/kunalrawat",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Kunal is a Mumbai-based Senior Software Engineer with a passion for transforming complex challenges
        into simple, elegant design solutions. His work spans digital interfaces, interactive
        experiences, and the convergence of design and technology.
      </>
    ),
  },
  work: {
    display: true,
    title: "Professional Experience",
    experiences: [
      {
        company: "Sky2c - Mumbai, India",
        role: "Senior Software Engineer",
        timeframe: "Nov 2024 - March 2025",
        achievements: [
          "Deployed auto-scaling for containerised applications using AWS ECS, ECR, and Fargate, optimising resource efficiency by 50% and leading the migration in real-time traffic.",
          "Migrated backend from AWS EC2 instances to ECS, enhancing scalability and reducing infrastructure costs by 30%",
          "Constructed a centralised Document Hub for users and internal teams, reducing the time of the operational team by 80%, streamlining API documentation for frontend developers and testing using Nestjs, Postman and Swagger.",
          "Orchestrated CI/CD pipelines via GitHub Actions, improving deployment efficiency by 20% and enabling faster feature rollouts."
        ],
        images: [],
      },
      {
        company: "Fydaa - Mumbai, India",
        role: "Lead Backend Engineer",
        timeframe: "May 2023 - Nov 2024",
        achievements: [
          "Architected and transitioned a monolithic application to a microservices-based system using Nestjs and Docker, achieving 99.9% uptime.",
          "Maximised server response times by 40% and increased concurrent user handling capacity by 50% by revamping microservices architecture.",
          "Led a cross-functional team in refactoring the legacy codebase, reducing bug reports and boosting system performance by 20%.",
          "Shipped all the features(payments, login and onboarding) with NESTJS API and React and Next dashboard, with better timelines, guided the juniors and managed the stakeholder expectations.",
          "Researched and delivered a hierarchical referral system for an internal team with Dashboard, DB design and API contracts with NEXT, Nestjs and Mongodb."
        ],
        images: [],
      },
      {
        company: "Vamstar - Hyderabad, India",
        role: "Senior Software Engineer",
        timeframe: "May 2022 - May 2023",
        achievements: [
          "Refactored signup and login flows, enhancing user experience by 15% with React and TypeScript.",
          "Optimised Elasticsearch queries, reducing query execution time by 65%, accelerating search results.",
          "Structured, scalable data models for Nosql databases (Dynamodb and Mongodb) for the S3 Storage feature.",
          "Crafted APIS with Graphql and caching for frontend teams with TypeScript.",
          "Rolled out AWS Lambda with Dynamodb streams to process updates on scale."
        ],
        images: [],
      },
      {
        company: "Promodome Digital - Mumbai, India",
        role: "Senior Web Application Developer",
        timeframe: "Nov 2020 - May 2022",
        achievements: [
          "Enhanced core platform functionalities, improving user experience for high-value clients.",
          "Resolved critical payment issues, boosting customer trust and platform retention.",
          "Developed a scalable REST API-based and SPA dashboard with Postman documentation, deployed on AWS EC2 and Load Balancer.",
          "Executed critical CRON jobs for sales & order acquisition, increasing user retention and sales by 30%."
        ],
        images: [],
      },
      {
        company: "Yocket - Mumbai, India",
        role: "Senior Web Application Developer",
        timeframe: "Mar 2018 - Oct 2020",
        achievements: [
          "Promoted to Team Lead, overseeing sprint planning, task prioritisation, and mentoring developers.",
          "Engineered a cost-efficient notification service processing 100k+ messages per campaign, avoiding server crashes.",
          "Created paid dashboard features for premium users, delivering data-driven, interactive, and better experiences.",
          "Revamped user onboarding flows, RESTAPI and better UI with VUE, boosting signup rates and profile completion by 30%."
        ],
        images: [],
      },
      {
        company: "Adevole - Mumbai, India",
        role: "Junior Web Developer",
        timeframe: "Sep 2017 – Mar 2018",
        achievements: [
          "Built and integrated APIS, dashboards, and tools for Shopify, WooCommerce, and Facebook Chat integrations.",
          "Implemented APIS and dashboard optimisation for a client with the Database Optimisation technique.",
          "Rewritten the feature, with better maintainability with JavaScript, HTML and CSS.",
          "Constructed the chatbot with Telegram and Facebook Messenger for Flight Booking Service.",
          "Designed and launched a feature-rich Shopify plugin allowing customizable notifications and calendar preferences."
        ],
        images: [],
      }
    ],
  },
  studies: {
    display: true,
    title: "Education",
    institutions: [
      {
        name: "Bachelor of Engineering, Information Technology, Mumbai University",
        description: "Aug 2013 – Mar 2017"
      },
      {
        name: "Higher Secondary Certificate, R. D. National & W. A. Science College, Mumbai",
        description: "Jun 2011 – Mar 2013"
      },
      {
        name: "Secondary School Certificate, Maharashtra State Board",
        description: "Jun 2009 – Mar 2011"
      }
    ],
  },
  technical: {
    display: true,
    title: "Skills",
    skills: [
      {
        title: "Frontend",
        description: "HTML5, CSS3, JavaScript, ES6, NextJS, ReactJS, VueJS."
      },
      {
        title: "Backend",
        description: "Microservices, NodeJS, Typescript, Nestjs, Expressjs, Lambda serverless, REST, Graphql, Php, Laravel."
      },
      {
        title: "Database",
        description: "Mysql, MongoDB, DynamoDB, ElasticSearch."
      },
      {
        title: "DevOps",
        description: "AWS, Docker, CI/CD pipelines, ECS, EC2, SNS, SQS."
      }
    ],
  },
};

const blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
