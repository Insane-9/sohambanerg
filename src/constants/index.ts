// Contains constant data for using in website
// ! Don't remove anything from here if not sure

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
  threejs,
  project1,
  project2,
  project3,
  project4,
  project5,
  project6,
  project7,
  project8,
  project9,
  project10,
  project11,
  project12,
  user1,
  user2,
  user3,
  
  linkedin,
  twitter,
  github,
} from "../assets";

// Navbar Links
export const NAV_LINKS = [
  {
    id: "about",
    title: "About",
    link: null,
  },
  {
    id: "work",
    title: "Work",
    link: null,
  },
  {
    id: "contact",
    title: "Contact",
    link: null,
  },
] as const;

// Services
export const SERVICES = [
  {
    title: "Full Stack Developer",
    icon: web,
  },
  {
    title: "Full Stack Gen-AI Developer",
    icon: creator,
  },
  {
    title: "MERN Stack Developer",
    icon: backend,
  },
  {
    title: "PERN Stack Developer",
    icon: backend,
  },
  {
    title: "AI Backend Developer",
    icon: backend,
  },
  {
    title: "AI Frontend Developer",
    icon: mobile,
  },
  {
    title: "Full Stack Web3 (Solana) Developer",
    icon: web,
  },
] as const;

// Technologies
export const TECHNOLOGIES = [
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
] as const;

// Experiences
export const EXPERIENCES = [
  {
    title: "Research Assistant – Web3, AI & Full-Stack Software Development",
    company_name: "National Institute of Technology Durgapur",
    icon: starbucks,
    iconBg: "#383E56",
    date: "September 2024 - June 2025",
    points: [
      "Conducted full-stack AI + Web3 software development and research for a consortium blockchain welfare tracking solution (Patent Filed), including smart contract design, backend APIs, and dashboard UX.",
      "Architected a Layer 2 scaling framework (FastSecFIR) using ZK-Rollups and IPFS to optimize on-chain storage and improve throughput for secure data sharing.",
      "Implemented Zero-Knowledge Proof (ZKP) validation and batching logic to support confidential claim verification while maintaining auditability.",
      "Designed the Beneficiary Verification Code within smart contracts to automate eligibility checks and prevent fraud, aligning research outcomes with production-grade deployment.",
    ],
  },
  {
    title: "FrontEnd Developer (Web3 & AI) - Contract",
    company_name: "Gracywoods Games",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "January 2024 - June 2024",
    points: [
      "Led full-stack Web3 + AI development, building the official company site and integrating an AI chatbot MVP using React, WebGL, and LLM APIs.",
      "Delivered an interactive, high-performance UX by syncing frontend state with Unity 3D/C# animations and streaming game telemetry.",
      "Built secure REST API pipelines for real-time game data, empowering low-latency character interactions and scalable multiplayer experiences.",
    ],
  },
  {
    title: "Application Developer",
    company_name: "Team TradeCode (EthOnline 2023 Hackathon)",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "October 2023",
    points: [
      "Built a DApp to combat product counterfeiting using NFT provenance, competing against global teams.","Engineered the Smart Contract logic (Solidity) and integrated it with a React.js frontend for real-time asset verification.","Designed the UI/UX flows to simplify complex blockchain interactions for non-technical retail users.",
    ],
  },
] as const;

// Testimonials
export const TESTIMONIALS = [
  
] as const;

// Projects
export const PROJECTS = [
  {
    name: "AI Resume Analyzer",
    description:
      "An AI-powered resume analysis app built with React and Puter.js. Upload resumes, create job listings, and get automatic evaluation + matching via AI-driven ATS scoring.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "ai",
        color: "green-text-gradient",
      },
      {
        name: "puterjs",
        color: "pink-text-gradient",
      },
      {
        name: "resume",
        color: "pink-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: project12,
    source_code_link: "https://github.com/Insane-9/ai-resume-analyzer",
  },
  {
    name: "Gemini C Clone",
    description:
      "A Google Gemini-style generative AI chat app built in React using the Gemini API. Includes a conversational UI, prompt saving sidebar, typing animation, preloader, and responsive design. Deployed on Vercel.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "ai",
        color: "green-text-gradient",
      },
      {
        name: "gemini",
        color: "pink-text-gradient",
      },
      {
        name: "llm",
        color: "pink-text-gradient",
      },
      {
        name: "vercel",
        color: "pink-text-gradient",
      },
    ],
    image: project11,
    source_code_link: "https://github.com/Insane-9/Gemini-C",
    live_site_link: "https://gemini-c-soham.vercel.app/",
  },
  {
    name: "SimpleComm",
    description:
      "A full-stack MERN commerce application with add-to-cart, checkout payment flow, and an admin dashboard for product management. Built while learning Node.js + Express, REST APIs, MongoDB, authentication/authorization, error handling, environment configuration, and backend best practices.",
    tags: [
      {
        name: "mern",
        color: "blue-text-gradient",
      },
      {
        name: "e-commerce",
        color: "green-text-gradient",
      },
      {
        name: "nodejs",
        color: "pink-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
      {
        name: "react",
        color: "pink-text-gradient",
      },
    ],
    image: project10,
    source_code_link: "https://github.com/Insane-9/SimpleComm-by-Soham",
    live_site_link: "https://simplecomm-by-soham.onrender.com/",
  },
  {
    name: "SolCAST DApp",
    description:
        "SolCAST is a high-performance DAO and Finance engine built on Solana with Rust/Anchor. I architected an on-chain treasury for automated swaps, a weighted-voting system via SPL tokens, and a trustless refund mechanism. The full-stack solution is completed with a responsive Next.js and Tailwind CSS frontend.",
    tags: [
      {
        name: "solana",
        color: "blue-text-gradient",
      },
      {
        name: "web3",
        color: "green-text-gradient",
      },
      {
        name: "react",
        color: "pink-text-gradient",
      },
      {
        name: "anchor",
        color: "blue-text-gradient",
      },
    ],
    image: project1,
    source_code_link: "https://github.com/Insane-9/SolCAST-DApp-full-codebase-client-backend",
    live_site_link: "https://sol-cast-deploy.vercel.app/",
  },
  {
    name: "Thinkboard-X",
    description:
      "Thinkboard-X is a scalable full-stack note-taking platform built using the MERN (MongoDB, Express, React, Node.js) stack. I developed a robust MVC backend featuring secure JWT authentication and optimized MongoDB schemas to ensure data integrity and efficient real-time queries. To enhance system security, I implemented Redis-based Sliding Window Rate Limiting, effectively protecting API endpoints from brute-force attacks.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "node",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
      {
        name: "express",
        color: "pink-text-gradient",
      },
      {
        name: "mongo",
        color: "pink-text-gradient",
      },
    ],
    image: project2,
    source_code_link: "https://github.com/Insane-9/Thinkboard-X",
    live_site_link: "https://thinkboard-x-2.onrender.com/",
  },
  {
    name: "Soham's Notes DApp",
    description:
      "The Solana Notes DApp is a decentralized CRUD application that replaces traditional databases with On-Chain Solana Accounts. Built with Next.js and Anchor, it uses PDAs to ensure data sovereignty. It integrates @solana/wallet-adapter for secure authentication, allowing users to fetch and decode personal data directly from the blockchain.",
    tags: [
      {
        name: "solana",
        color: "blue-text-gradient",
      },
      {
        name: "nextjs",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: project3,
    source_code_link: "https://github.com/Insane-9/solana-notes-dapp",
    live_site_link: "https://solana-notes-dapp-soham13anerjees-projects.vercel.app/",
  },
  {
    name: "Escrow Project in Solana",
    description:
      "A trustless Escrow Program built with Rust/Anchor, utilizing CPIs and a secure PDA Vault for decentralized asset custody. It features atomic 'MakeOffer' and 'TakeOffer' instructions, ensuring secure, code-governed token swaps without requiring manual private key signatures.",
    tags: [
      {
        name: "solana",
        color: "blue-text-gradient",
      },
      {
        name: "rust",
        color: "green-text-gradient",
      },
      {
        name: "anchor",
        color: "pink-text-gradient",
      },
    ],
    image: project4,
    source_code_link: "https://github.com/Insane-9/Escrow-Program-with-Anchor.git",
  },
  {
    name: "Notes-App",
    description:
      "Best Cryptocurrency web application that allows users to view pBuilt a responsive task manager applying declarative UI patterns and 'Lifting State Up' methodology to ensure seamless data synchronization and state management across complex, nested components.rice, market cap and daily change in realtime for almost every cryptocurrency in the world.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "rapidapi",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: project5,
    source_code_link: "https://github.com/Insane-9/My-ToDo-App",
    live_site_link: "https://my-todo-app-1-xzuy.onrender.com/",
  },
  {
    name: "Anchor Calculator",
    description:
      "Engineered a stateful program using Deterministic Account Derivation and Anchor's InitSpace to optimize on-chain storage costs.",
    tags: [
      {
        name: "anchor",
        color: "blue-text-gradient",
      },
      {
        name: "rust",
        color: "green-text-gradient",
      },
      {
        name: "web3",
        color: "pink-text-gradient",
      },
    ],
    image: project6,
    source_code_link: "https://github.com/Insane-9/Solana_Calculator_Anchor",

  },
  {
    name: "Anchor Counter",
    description:
      "Implemented a foundational contract utilizing checked_add arithmetic to prevent integer overflows and ensure safe state persistence.",
    tags: [
      {
        name: "anchor",
        color: "blue-text-gradient",
      },
      {
        name: "rust",
        color: "green-text-gradient",
      },
      {
        name: "web3",
        color: "pink-text-gradient",
      },
    ],
    image: project7,
    source_code_link: "https://github.com/Insane-9/simple-counter-program-anchor",

  },
  {
    name: "Rust-CLI Tic-Tac-Toe",
    description:
      "Developed a crash-proof CLI engine leveraging Algebraic Data Types (Enums) to make invalid game states unrepresentable.",
    tags: [
      {
        name: "cargo",
        color: "blue-text-gradient",
      },
      {
        name: "rust",
        color: "green-text-gradient",
      },
      {
        name: "rust-cli",
        color: "pink-text-gradient",
      },
    ],
    image: project8,
    source_code_link: "https://github.com/Insane-9/tic_tac_toe",

  },
  {
    name: "Rust-CLI Guessing Game",
    description:
      "Built a systems-level tool to master Rust’s ownership model, memory safety, and secure random selection logic.",
    tags: [
      {
        name: "rust",
        color: "blue-text-gradient",
      },
      {
        name: "cargo",
        color: "green-text-gradient",
      },
      {
        name: "rust-cli",
        color: "pink-text-gradient",
      },
    ],
    image: project9,
    source_code_link: "https://github.com/Insane-9/guessing_game",
  },
] as const;

export const SOCIALS = [
  {
    name: "Linkedin",
    icon: linkedin,
    link: "https://www.linkedin.com/in/insane9",
  },
  {
    name: "Twitter",
    icon: twitter,
    link: "https://x.com/web3_5oham8anrg",
  },
  {
    name: "GitHub",
    icon: github,
    link: "https://github.com/Insane-9",
  },
] as const;
