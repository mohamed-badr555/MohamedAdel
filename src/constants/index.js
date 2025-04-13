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
  
    git,
    figma,
    docker,
MovieAPP,
itiEcommerce,
weather,
Quize,
JSEcreommece,
    carrent,
    jobit,
    tripguide,
    threejs,
    codeAlpha,
    ITI,
    Route,
    ECPC,
    Bootstrap,
    SQL,
    hourefimage,
    Huson,
    summit,
    Afro,
    Alto,
    APTF,


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
      title: "Frontend Developer",
      icon: web,
    },
    {
      title: "Backend Developer",
      icon: web,
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
      name: "Bootstrap",
      icon: Bootstrap,
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
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
    {
      name: "SQL Server",
      icon: SQL,
    },
  ];
  
  const experiences = [
    {
      title: "Frontend Intern",
      company_name: "CodeAlpha",
      icon: codeAlpha,
      iconBg: "#383E56",
      date: "Jun 2024 – Aug 2024",
      points: [
        "Completed various tasks using HTML, CSS, Bootstrap, JavaScript, ReactJS, and TypeScript",
        "Developed projects including a to-do app, calendar, music app, and real-time social media platform.",
        "Enhanced practical skills in front-end development and collaborated effectively withteam members.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "ReactJS Intern",
      company_name: "ITI",
      icon: ITI,
      iconBg: "#E6DEDD",
      date: "Jul 2024 – Aug 2024",
      points: [
        "Learn HTML5, CSS3,JS,BOOSTRAP,Reactjs",
          " Daily workshop ,E-commerce Final Project"
      ],
    },
    {
      title: "Full-Stack Development Diploma ",
      company_name: "Route",
      icon: Route,
      iconBg: "#383E56",
      date: "Dec 2022 – Nov 2023",
      points: [
        "front-end HTML,CSS,BOOTSTRAP,JS,JQaury\
        ,Reactjs",
        "Back-end SQL Server, C#,OOPC#,AdvancedC#  ,Linq,Entity Frame Work,MVC, Web API, Design Pattern, Agile",
          "Development of a new highly responsive, web-based user interface.",
          "Develop a flexible and well-structured project architecture and the APIs to support it.",
          "Translate designs, wireframes, and business requirements into solutions using high-quality code. "
      ],
    },
    {
      title: "Problem Solving",
      company_name: "SFE ICPC ",
      icon: ECPC,
      iconBg: "#E6DEDD",
      date: "Aug 2021 – Jun 2022",
      points: [
        "C++",
        "Data Structure , Algrothim"
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
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
    name: "Horuf-Platform",
    description:
    "Hrouf Academy is a single-page application (SPA) developed with React, designed for managing and displaying Teachers in Teaching center called Hrouf Academy.\
     It includes a search feature to help users find their desired Teachers.\
",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
          {
        name: "Bootstrap",
        color: "green-text-gradient",
      },
     {
        name: "Web API",
        color: "green-text-gradient",
      },
      {
        name: "MVC",
        color: "pink-text-gradient",
      },
      {
        name: "SQL",
        color: "orange-text-gradient",
      }
    ],
    image: hourefimage,
    source_code_link: "https://github.com/mohamed-badr555/Horuf-Platform",
    LiveDemo:"https://www.hrouf-academy.com/",
   },
   {
    name: "Hosoun Academy",
    description: "A comprehensive educational platform offering modern learning experiences including recorded courses, live online classes, teaching jobs, educational articles, and digital book sales. Features secure payment gateway, teacher dashboard for course management, and admin panel for performance monitoring.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "green-text-gradient",
      },
      {
        name: "Web API",
        color: "pink-text-gradient",
      },
      {
        name: "MVC",
        color: "orange-text-gradient",
      },
      {
        name: "SQL",
        color: "blue-text-gradient",
      }
    ],
    image: Huson,
    source_code_link: "https://github.com",
    LiveDemo: "https://hosoun.com",
   },
   {
    name: "Summit Egypt Real Estate",
    description: "A comprehensive real estate platform for buying and renting properties in Egypt. Features modern UI, property management system, secure payment gateway for deposits, and integrated admin dashboard. Built with React frontend and ASP.NET Core backend for robust performance.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "green-text-gradient",
      },
      {
        name: "Web API",
        color: "pink-text-gradient",
      },
      {
        name: "MVC",
        color: "orange-text-gradient",
      },
      {
        name: "SQL",
        color: "blue-text-gradient",
      }
    ],
    image: summit,
    source_code_link: "https://github.com",
    LiveDemo: "https://www.summitegypt.com",
   },
   {
    name: "AFROGrains Trading Platform",
    description: "International trading platform for AFROGrains L.L.C, specializing in agricultural supplies, fertilizers, and industrial raw materials. Features innovative financial solutions and global trade connections, focusing on African markets since 1977.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "green-text-gradient",
      },
      {
        name: "Web API",
        color: "pink-text-gradient",
      },
      {
        name: "MVC",
        color: "orange-text-gradient",
      },
      {
        name: "SQL",
        color: "blue-text-gradient",
      }
    ],
    image: Afro,
    source_code_link: "https://github.com",
    LiveDemo: "https://afrograins.com",
   },
   {
    name: "Alto Company Website",
    description: "Interactive website for Alto, a supply chain analysis company. Features professional service showcase, business intelligence solutions, and global supplier network integration. Optimized for performance and user experience.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "green-text-gradient",
      },
      {
        name: "Web API",
        color: "pink-text-gradient",
      },
      {
        name: "MVC",
        color: "orange-text-gradient",
      },
      {
        name: "SQL",
        color: "blue-text-gradient",
      }
    ],
    image: Alto,
    source_code_link: "https://github.com",
    LiveDemo: "https://alto-ti.com",
   },
   {
    name: "APTF Corporate Website",
    description: "Bilingual corporate website for Arabian Plastic Technology Factory (APTF), showcasing their plastic manufacturing products and services. Features responsive design, detailed product catalogs, and optimized performance.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "green-text-gradient",
      },
      {
        name: "Web API",
        color: "pink-text-gradient",
      },
      {
        name: "MVC",
        color: "orange-text-gradient",
      },
      {
        name: "SQL",
        color: "blue-text-gradient",
      }
    ],
    image: APTF,
    source_code_link: "https://github.com",
    LiveDemo: "https://aptf.com.sa",
   }
];
  
  export { services, technologies, experiences, testimonials, projects };