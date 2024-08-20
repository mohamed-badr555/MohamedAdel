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
    SQL

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
        "The course covers front-end  HTML,CSS,BOOTSTRAP,JS,JQaury,Reactjs",
        "Front-end SQL Server, C#,OOPC#,AdvancedC#  ,Linq,Entity Frame Work,MVC, Web API, Design Pattern, Agile",
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
      name: "Movie APP",
      description:
      "Movie website for showing trending movies, all movies, and Details Movie,Registertion,login,logout\
Tools: Reactjs, Redux,Context,Helmet,react-detect-offline, JS,Boostrap\
",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "Context",
          color: "green-text-gradient",
        },
        {
          name: "Boostrap",
          color: "pink-text-gradient",
        },
      ],
      image: MovieAPP,
      source_code_link: "https://github.com/mohamed-badr555/MovieApp",
    },
    {
      name: "Ecommerce",
      description:
        "Final Project at ITI I used Ractjs ,Joi, Bootstrap to make this website to add , remove , display , edit Products with Login,Register and Logout ",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "Joi",
          color: "green-text-gradient",
        },
        {
          name: "Bootstrap",
          color: "pink-text-gradient",
        },
      ],
      image : itiEcommerce ,
      source_code_link: "https://github.com/mohamed-badr555/itifinalProject",
    },
    {
      name: "Weather App",
      description:
        "Developed a responsive weather application using JavaScript, HTML, CSS, and Bootstrap, featuring real-time weather updates via API integration.",
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
        {
          name: "JS",
          color: "pink-text-gradient",
        },
      ],
      image: weather,
      source_code_link: "https://github.com/mohamed-badr555/WeatherApp",
    },
    {
      name: "Create Quize",
      description:
          "Created an online quiz application with customizable options for the number of questions, difficulty level, and category using HTML, CSS, JavaScript, and Bootstrap. The app fetches quiz data from an API, ensuring a dynamic and engaging user experience.",        
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
        {
          name: "JS",
          color: "pink-text-gradient",
        },
      ],
      image: Quize ,
      source_code_link: "https://github.com/mohamed-badr555/CreateQuize",
    },
    {
      name: "Ecommerce",
      description:
        "Ecommerce Project: Developed an online shopping platform with intuitive user navigation and add to cart",
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
        {
          name: "JS",
          color: "pink-text-gradient",
        },
      ],
      image: JSEcreommece ,
      source_code_link: "https://github.com/mohamed-badr555/commerce-website",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };