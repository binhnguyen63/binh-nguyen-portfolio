const ProjectData = {
  title: "Binh Nguyen Portfolio Website",
  description: [
    `My name is Binh Nguyen, I’m passionate about building tech solutions that make life easier. I enjoy working on real-world projects—from full-stack web apps to automation tools—and love learning new technologies.`,
    `I’ve worked with Python, JavaScript, React, Node.js, PostgreSQL, and more, including projects like a user management site using Microsoft Graph API, restaurant management using PostgreSQL and a Web3 tool for Ethereum wallet tracking.`,
  ],
  profile_pic: "src/assets/profile.png",
  name: "Binh Nguyen",
  role: ["Full Stack Developer"],
  socials: {
    github: "https://github.com/binhnguyen63",
    linkedin: "https://www.linkedin.com/in/binh-nguyen-244608196/",
  },
  latest_work: [
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
      image: "/user_management_project.png",
      github: "https://github.com/binhnguyen63/SoftwareDesign-Project",
    },
    {
      title: "Restaurant Management System",
      description: "A project to manage a restaurant.",
      detailed_description: [
        `Curated a database design for a restaurant chain that required 10 interrelated tables.`,
        `The project included
managing user-submitted data`,
        `Structured 10 interrelated tables to enforce 3NF and BCNF`,
        `Created SQL scripts for constraints, foreign keys, and data integrity checks.`,
      ],
      tools_used: [`PostgreSQL`, `nodejs`, `HTML`, `CSS`],
      image: "/restaurant.png",
      github: "https://github.com/Minhbui100/Restaurant",
    },
    {
      title: "Web3 - ETH wallet tracking",
      description: "Track ETH wallet transactions.",
      detailed_description: [
        `Track user’s ETH wallets and send new activities to discord channel.`,
        `Provide clear description of the transaction in the discord message`,
      ],
      tools_used: [`NodeJs`, `EtherscanAPI`],
      image: "/web3.png",
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
      image: "/discord-bot.png",
      github: "https://github.com/binhnguyen63/chatGBT-discord-bot",
    },
  ],
};

export default ProjectData;
