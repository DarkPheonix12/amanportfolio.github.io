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
      title: "Backend Developer",
      icon: mobile,
    },
    {
      title: "Blockchain Developer",
      icon: backend,
    },
    {
      title: "Content Writer",
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
    }
  ];
  
  const experiences = [
    {
      title: "Web Development",
      company_name: "Learnings",
      icon: starbucks,
      iconBg: "#383E56",
      date: "Setptember 2021 - March 2022",
      points: [
        "I have learnt HTML, CSS, JS, Node.js, MongoDB, MySql and using related technologies such pug, postman etc.",
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers on github.",
      ],
    },
    {
      title: "Blockchain Development",
      company_name: "Learnings",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "March 2022 - October 2022",
      points: [
        "Basic functioning and working of Blockchain and how its securities work.",
        "Creating Smart Contracts using Solidity language on Ethereum Chain and implementing for projects.",
        "Designing Decentralised application on Ethereum chain using Solidity and other technologies such as Ganache, Truffle, Chocolaty etc. ",
        "Maintaining cross-platform performance of DApp and analysing its working and deployment across them.",
      ],
    },
    {
      title: "Data Structure & Algorithms",
      company_name: "Learsnings",
      icon: shopify,
      iconBg: "#383E56",
      date: "October 2022 - Present",
      points: [
        "Gain knowledge of data structures suitable for portfolio management, such as arrays, linked lists, hash tables, and trees.",
        "Consider specialized data structures like priority queues or balanced search trees for efficient handling of priority-based operations.",
        "Learn about optimization algorithms commonly used in portfolio management, such as mean-variance optimization, risk-parity optimization, and factor models.",
        "Understand the underlying mathematical formulations of these algorithms and their assumptions.",
      ],
    },
    {
      title: "Projects Developed",
      company_name: "Development",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "September 2021 - Present",
      points: [
        "Developed few project of my own like Dance, Gym, Food Delivery Website for practice purposes.",
        "Have participated in several International Hackathons and got shortlisted for such as LAHacks conducted by University Of Columbia LA.",
        "Got good at communicating ideas and creating projects and working amongst a team.",
        "Have experience in working under pressure and time limit and develop effective time managing skills.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Aman proved me wrong.",
      name: "Pradeep Sharma",
      designation: "CEO",
      company: "Briusha",
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
      name: "Naturescape",
      description:
        "Web-based platform that allows users to to buy naturally made coconut products, providing consumer safe and natural solution to traditionally made metal containers.",
      tags: [
        {
          name: "html",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "green-text-gradient",
        },
        {
          name: "javascript",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/DarkPheonix12/HTML-CSS-JavaScript-For-Beginners/tree/master/PROJECT-2",
    },
    {
      name: "Dance It",
      description:
        "A fullstack dance academy website for designed for reach of Local Dance Academy for customers for registration and schedule their classes.",
      tags: [
        {
          name: "html #css",
          color: "blue-text-gradient",
        },
        {
          name: "node.js #postman",
          color: "green-text-gradient",
        },
        // {
        //   name: "javascript",
        //   color: "pink-text-gradient",
        // },s
      ],
      image: jobit,
      source_code_link: "https://github.com/DarkPheonix12/HTML-CSS-JavaScript-For-Beginners/tree/master/Dance%20Website",
    },
    {
      name: "Event Management",
      description:
        "A comprehensive blockchain smart contract made to manage events to be conducted and to let the people book their tickets to their respective events.",
      tags: [
        {
          name: "solidity",
          color: "blue-text-gradient",
        },
        {
          name: "blockchain",
          color: "green-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/DarkPheonix12/EventManagement-Solidity-",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };