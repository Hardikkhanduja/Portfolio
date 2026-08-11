export const projects = [
  {
    id: 1,
    title: "MediTrack",
    description:
      "AI-powered medicine cabinet tracker for React Native. Scan blister packs with Gemini Vision to auto-fill drug name, expiry, and pill count. Includes smart reminders and local-only storage.",
    features: [
      "Gemini Vision AI for instant blister pack scanning",
      "Automated pill counting and expiry tracking",
      "Local-first SQLite storage for absolute privacy",
      "Push notification scheduling for medication routines",
    ],
    tags: ["React Native", "Expo", "Gemini AI", "JavaScript"],
    image: "/meditrack.png",
    links: {
      playstore:
        "https://play.google.com/store/apps/details?id=com.hardikkhanduja.meditrack&pcampaignid=web_share",
      github: "https://github.com/Hardikkhanduja/MediTrack",
    },
  },
  {
    id: 2,
    title: "CollabBoard",
    description:
      "Real-time collaborative whiteboard — draw, annotate, and create together live. Features WebSocket sync, Clerk auth, board management, and invite system.",
    features: [
      "Low-latency bidirectional WebSocket synchronization",
      "Secure RBAC authentication flow using Clerk",
      "Infinite-canvas architecture with shape persistence",
      "Invite-only workspace and board management",
    ],
    tags: ["React", "Node.js", "Socket.io", "PostgreSQL"],
    image: "/collabboard.png",
    links: {
      live: "https://collab-board-coral.vercel.app/",
      github: "https://github.com/Hardikkhanduja/CollabBoard",
    },
  },
  {
    id: 3,
    title: "TraceMind",
    description:
      "An Autonomous AI Site Reliability Engineer (SRE) powered by SigNoz and LangGraph. Autonomously investigates incidents and performs Root Cause Analysis.",
    features: [
      "Autonomous incident resolution workflows via LangGraph",
      "Direct integration with SigNoz APM telemetry data",
      "Automated Root Cause Analysis (RCA) generation",
      "Multi-agent architecture for complex debugging",
    ],
    tags: ["LangGraph", "FastAPI", "React", "SigNoz"],
    image: "/tracemind.png",
    links: {
      live: "https://youtu.be/SBHGSbhoPCk?si=5u94_MKwdSgyGnzM",
      github: "https://github.com/Hardikkhanduja/TraceMind",
    },
  },
  {
    id: 4,
    title: "ZeroArch",
    description:
      "ZeroArch is a visual, AI-powered cloud infrastructure designer. Drag and drop components onto an infinite canvas, and let Google Gemini AI audit your architecture and automatically generate production-ready zerops.yml configurations.",
    features: [
      "Interactive drag-and-drop infrastructure canvas",
      "Gemini AI architecture auditing and cost estimation",
      "Zero-touch YAML generation for Zerops deployment",
      "Real-time resource dependency validation",
    ],
    tags: ["React", "Gemini AI", "Zerops", "Infrastructure"],
    image: "/zeroarch.png",
    links: {
      live: "https://app-1eb-3000.ny1.zerops.app/",
      github: "https://github.com/Hardikkhanduja/ZeroArch",
    },
  },
  {
    id: 5,
    title: "NanoClaw",
    description:
      "A minimal, extensible AI coding agent powered by OpenRouter. Lives in your terminal and Telegram to read, plan, modify, and execute tasks inside your codebase.",
    features: [
      "Multi-platform control via CLI and Telegram Bot API",
      "Autonomous codebase reading, planning, and execution",
      "Extensible tool execution framework via Bun",
      "Optimized LLM routing via OpenRouter ecosystem",
    ],
    tags: ["TypeScript", "Bun", "AI Agent", "Telegram Bot"],
    image: "/nanaoclaw.png",
    links: {
      github: "https://github.com/Hardikkhanduja/NanoClaw",
    },
  },
  {
    id: 6,
    title: "Smart Elevator Patent",
    description:
      "Published patent reimagining elevators with AI, sustainable energy harvesting, and intelligent automation to create faster, safer, and energy-efficient vertical transportation systems.",
    features: [
      "AI-driven peak traffic prediction routing algorithms",
      "Regenerative braking energy harvesting system design",
      "Sensor-fusion safety mechanism architecture",
      "Published Application No: 202511053016 (Indian Patent Office)",
    ],
    tags: ["Research", "Innovation", "Patent"],
    image: "/smart_elevator.png",
    links: {},
  },
  {
    id: 7,
    title: "Getwell Medicos",
    description:
      "Online presence for a licensed pharmacy in Chandigarh. Responsive site with WhatsApp prescription requests, Google Maps embed, and service listings.",
    features: [
      "Framer Motion driven responsive UI architecture",
      "Direct WhatsApp Business API integration for orders",
      "Dynamic service listing and cataloging system",
      "Optimized Lighthouse scores for SEO and performance",
    ],
    tags: ["React", "Vite", "Tailwind CSS", "Framer Motion"],
    image: "/getwell.png",
    links: {
      live: "https://getwell-medicos.vercel.app",
      github: "https://github.com/Hardikkhanduja/GetwellMedicos",
    },
  },
];
