const baseurl = import.meta.env.BASE_URL;
const ProjectData = {
  title: "Binh Nguyen Portfolio Website",
  description: [
    `My name is Binh Nguyen, I'm a senior computer science student at University Of Houston. I’m passionate about building tech solutions that make life easier. I enjoy working on real-world projects—from full-stack web apps to automation tools—and love learning new technologies.`,
    `I’ve worked with Python, JavaScript, React, Next.js, C++, Java, PostgreSQL, and more, including projects like a user management site using Microsoft Graph API, restaurant management using PostgreSQL and a Web3 tool for Ethereum wallet tracking.`,
  ],
  profile_pic: `${baseurl}/profile.png`,
  name: "Binh Nguyen",
  role: ["Full Stack Developer"],
  email: "binhnguyen4344@gmail.com",
  socials: {
    github: "https://github.com/binhnguyen63",
    linkedin: "https://www.linkedin.com/in/binh-nguyen-244608196/",
    leetcode: "https://leetcode.com/u/binhnguyen4344/",
    email: "binhnguyen4344@gmail.com",
  },
  resume: `${baseurl}/binh_nguyen_resume.pdf`,
  latest_work: [
    {
      title: "Binh Nguyen Portfolio Website",
      description: "A project to manage a restaurant.",
      detailed_description: [
        `Designed a responsive webpage to display my projects, skills, and information about myself`,
      ],
      tools_used: [`React`, `nodejs`, `HTML`, `CSS`, "Google FireStore"],
      image: [
        `${baseurl}/binhnguyen63.github.io_binh-nguyen-portfolio_.png`,
        `${baseurl}/binhnguyen63.github.io_binh-nguyen-portfolio_contact.png`,
      ],
      github: "https://github.com/binhnguyen63/binh-nguyen-portfolio",
      url: "https://binhnguyen63.github.io/binh-nguyen-portfolio/",
    },
    {
      title: "Restaurant Management System",
      description: "A project to manage a restaurant.",
      detailed_description: [
        `Curated a database design for a restaurant chain that required 10 interrelated tables.`,
        `Customers can order food, and the restaurant can manage orders, employees, and inventory.`,
        `Structured 10 interrelated tables to enforce 3NF and BCNF`,
        `Created SQL scripts for constraints, foreign keys, and data integrity checks.`,
      ],
      tools_used: [`PostgreSQL`, `nodejs`, `HTML`, `CSS`],
      image: [`${baseurl}/restaurant2.png`, `${baseurl}/restaurant.png`],
      github: "https://github.com/binhnguyen63/Restaurant",
    },
    {
      title: "Insightify",
      description: "A project to manage users in a system.",
      detailed_description: [
        `A website that integrated AI technology to enhance shopping experience`,
        `Utilized Google AI Studio, Google Custom Search API`,
      ],
      tools_used: [
        `NodeJS`,
        `Next.js`,
        `React`,
        `Google AI Studio`,
        `Google Custom Search API`,
        `Vercel`,
      ],
      image: [`${baseurl}/Insightify.png`],
      github: "https://github.com/binhnguyen63/insightify",
      url: "https://insightify-beta.vercel.app/",
    },
    {
      title: "User Management Project",
      description: "A project to manage users in a system.",
      detailed_description: [
        `Utilized Microsoft Graph API for authentication and CRUD operations on users. The project includes different access levels for users.`,
        `Implemented a user-friendly interface, allowing users to easily manage their profiles, and fill out the academic forms`,
        `The backend is built with Flask and PostgreSQL, ensuring secure data storage and retrieval.`,
      ],
      tools_used: [
        `Python`,
        `JavaScript`,
        `HTML`,
        `CSS`,
        `PostgreSQL`,
        `Flask`,
      ],
      image: [`${baseurl}/user_management_project.png`],
      github: "https://github.com/binhnguyen63/SoftwareDesign-Project",
    },
    {
      title: "Web3 - ETH wallet tracking",
      description: "Track ETH wallet transactions.",
      detailed_description: [
        `Track multiple user’s ETH wallets and send new activities to discord channel. Alerts users important important transactions.`,
        `Provide clear description of the transaction in the discord message`,
      ],
      tools_used: [`NodeJs`, `EtherscanAPI`],
      image: [`${baseurl}/web3.png`],
      github: "https://github.com/binhnguyen63/wallet-track",
    },
    {
      title: "ChatCPT - Discord Chat Bot",
      description: "A Discord bot that interacts with users.",
      detailed_description: [
        `Created a Discord bot that interacts with users in a conversational manner.`,
        `Utilized chatGPT API`,
        `Improved user interaction with AI through contextual responses`,
      ],
      tools_used: [`Python`, `Discord API`, `ChatCPT API`],
      image: [`${baseurl}/discord-bot.png`],
      github: "https://github.com/binhnguyen63/chatGBT-discord-bot",
    },
  ],
};

export default ProjectData;
