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
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    jmj,
    aquatic,
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
      title: "Full Stack Developer",
      icon: web,
    },
    {
      title: "React Developer",
      icon: mobile,
    },
    {
      title: "Node Developer",
      icon: backend,
    },
    {
      title: "Ruby on Rails Developer",
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
  ];
  
  const experiences = [
    {
      title: "Software Engineer",
      company_name: "JMJ Financial",
      icon: jmj,
      iconBg: "#383E56",
      date: "December 2020 - Present",
      points: [
        "Working on both back end and front end repositories, executing strong functionality to meticulously gather, validate, and store data, then present it visually with easy-to-read tables and graphs.",
        "Collaborating with designers and the engineering team to build dynamic and responsive user interfaces deployed on AWS in React using JavaScript, TypeScript, HTML, and modern CSS standards.",
        "Developing server-side tools and services built with Ruby on Rails and a PostgreSQL database",
        "Implementing multiple third-party API integrations like Equifax, Dropbox Sign, and Encompass.",
        "Conducting regular maintenance of the software stack by leveraging Sentry to monitor and fix bugs in real time as well as optimize the performance of the newly deployed web application",
        "Reviewing pull requestes, providing comprehensive feedback and suggestions to ensure code quality and adherence to best practices."
      ],
    },
    {
      title: "General Manager",
      company_name: "Aquatic Aviation",
      icon: aquatic,
      iconBg: "#E6DEDD",
      date: "Jan 2015 - Feb 2020",
      points: [
        "Managing a multi-facet business operation including WordPress and Shopify websites, SEO, client/distributor relationships, accounting, operations, staff, and client training.",
        "Implementing business strategies tailored to meet niche client needs making the company the best performing Flyboard, Hoverboard, and Jetpack product sales and training center in the United States.",
        "Maximizing profitability through proactive management and monitoring of margins and price setting.",
        "Instilling a company ethos focused on product quality and outstanding customer service, achieving perfect 5-star reviews across all major platforms including, Google, Yelp, Tripadvisor, and Groupon.",
        "Certified Master Instructor that meticulously trained and certified all Instructor staff achieving a 100% safety record across all experiences between 2015 - 2020."
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
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };