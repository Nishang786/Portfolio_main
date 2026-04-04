export type NavItem = {
  id: string;
  label: string;
  href: `#${string}`;
};

export type SkillGroup = {
  title: string;
  description: string;
  skills: string[];
  accent: string;
  icon: "brain" | "database" | "code" | "shield" | "sparkles";
};

export type ExperienceItem = {
  role: string;
  company: string;
  location: string;
  period: string;
  summary: string;
  highlights: string[];
  techUsed?: string[];
};

export type ProjectItem = {
  title: string;
  summary: string;
  impact: string;
  metrics: string[];
  tech: string[];
  repoUrl: string;
  demoUrl: string;
  embedUrl?: string;
  accent: string;
  preview: string[];
};

export type HackathonItem = {
  title: string;
  host: string;
  logoMark: string;
  logoSrc: string;
  logoAlt: string;
  summary: string;
  impact: string;
  metrics: string[];
  tech: string[];
  repoUrl: string;
  demoUrl: string;
  accent: string;
  preview: string[];
};

export type AchievementItem = {
  title: string;
  year: string;
  description: string;
  icon: "patent" | "trophy" | "award" | "star";
};

export type EducationItem = {
  degree: string;
  institution: string;
  period: string;
  details: string;
  location?: string;
  highlights?: string[];
};

export type SocialLink = {
  label: string;
  value: string;
  href: string;
  icon: "mail" | "linkedin" | "github";
};


// ============================================================
// PORTFOLIO DATA — Enhanced for Recruiter Clarity & Depth
// ============================================================

export const navItems: NavItem[] = [
  { id: "home",         label: "Home",            href: "#home" },
  { id: "about",        label: "About Me",         href: "#about" },
  { id: "skills",       label: "My Stack",         href: "#skills" },
  { id: "experience",   label: "Experience",       href: "#experience" },
  { id: "projects",     label: "Projects",         href: "#projects" },
  { id: "hackathons",   label: "Hackathons",       href: "#hackathons" },
  { id: "achievements", label: "Achievements",     href: "#achievements" },
  { id: "education",    label: "Education",        href: "#education" },
  { id: "contact",      label: "Contact",          href: "#contact" },
];


// ── Hero ─────────────────────────────────────────────────────
export const heroMetrics = [
  { value: "4.6M+",  label: "records processed across ML pipelines" },
  { value: "94%",    label: "latency reduction via pipeline optimization" },
  { value: "97%",    label: "address-matching accuracy at production scale" },
  { value: "400K+",  label: "vehicle records modeled for pricing intelligence" },
  { value: "R² 0.85",label: "predictive accuracy on NLP pricing model" },
];


// ── About ─────────────────────────────────────────────────────
export const aboutHighlights = [
  "I graduated with First Class Honors (B.Tech) and a Minor in AI & ML from Ramdeobaba University.",
  "I am currently pursuing an MSc in Data Analytics at National College of Ireland (2025–2026).",
  "I specialize in RAG systems, LLM-native application design, and production-ready Python backends.",
  "I have shipped ML pipelines at scale — 4.6M records, 97% accuracy, 94% latency reduction in production.",
  "I build end-to-end data products: from raw ingestion and profiling through model deployment and monitoring.",
  "I am actively seeking AI engineering, data engineering, and applied ML roles across Ireland and internationally.",
];


// ── Skills ────────────────────────────────────────────────────
export const skillGroups: SkillGroup[] = [
  {
    title: "AI & Machine Learning",
    description:
      "I design and ship predictive systems, NLP workflows, and LLM-native applications tuned for production reliability and measurable business impact.",
    skills: [
      "Python", "TensorFlow", "Scikit-learn",
      "XGBoost", "LSTM / RNNs",
      "NLP", "Text Feature Engineering", "Sentiment Analysis",
      "MLflow", "Model Evaluation & Tuning",
      "Sentence Transformers", "OpenAI API", "Ollama",
    ],
    accent: "from-cyan-500/25 via-sky-500/10 to-transparent",
    icon: "brain",
  },
  {
    title: "GenAI & LLM Engineering",
    description:
      "I build retrieval-augmented generation (RAG) pipelines, agentic workflows, and conversational interfaces grounded in real operational data.",
    skills: [
      "LangChain", "RAG Pipelines", "Prompt Engineering",
      "Vector Databases", "Pinecone", "ChromaDB", "FAISS",
      "LLMs", "Embedding Models",
      "Semantic Search"
      
    ],
    accent: "from-emerald-500/25 via-teal-500/10 to-transparent",
    icon: "sparkles",
  },
  {
    title: "Data Engineering & Analytics",
    description:
      "I design scalable analytical pipelines, storage architectures, and profiling frameworks built for throughput, reliability, and downstream intelligence.",
    skills: [
      "SQL", "PostgreSQL", "MongoDB",
      "Pandas", "NumPy", "Apache Spark",
      "ETL / ELT Pipelines", "Dagster", "Apache Airflow",
      "Data Profiling", "Schema Validation", "Data Modeling"
    ],
    accent: "from-violet-500/25 via-fuchsia-500/10 to-transparent",
    icon: "database",
  },
  {
    title: "Backend & System Architecture",
    description:
      "I build API-first, containerized systems and full-stack analytical products — from prototype to deployed service — with a focus on observability and maintainability.",
    skills: [
      "FastAPI", "REST APIs", "Pydantic", "SQLAlchemy",
      "Docker",
      "Microservices", "Event-Driven Architecture",
      "Git / GitHub", "GitHub Actions (CI/CD)",
      "Streamlit", "React (basics)", "ngrok",
      "AWS"
    ],
    accent: "from-sky-500/20 via-cyan-500/10 to-transparent",
    icon: "code",
  },
  {
    title: "Engineering Methods",
    description:
      "I work with disciplined, team-ready engineering practices that keep iteration fast, code defensible, and systems ready for handoff.",
    skills: [
      "Agile / Scrum", "TDD",
      "Defensive Coding", "OOP & SOLID Principles",
      "System Design",
      "MLOps Fundamentals",
      "Technical Documentation"
    ],
    accent: "from-indigo-500/20 via-violet-500/10 to-transparent",
    icon: "shield",
  },
];


// ── Experience ────────────────────────────────────────────────
export const experienceItems: ExperienceItem[] = [
  {
    role: "Python Developer",
    company: "Com1 Communication Technologies Pvt. Ltd.",
    location: "India (Remote)",
    period: "Jan 2025 – Jul 2025",
    summary:
      "I built production-grade machine learning and retrieval systems for data-heavy operational workflows, owning the full pipeline from data ingestion to deployed inference.",
    highlights: [
      "Designed and shipped an ML address-matching pipeline across 4.6M records, achieving 97% accuracy through iterative feature engineering, ensemble modeling, and rigorous cross-validation.",
      "Reduced end-to-end processing and inference latency by 94% through vectorized computation, query optimization, and async pipeline redesign.",
      "Built a RAG assistant enabling natural-language querying over internal SQL databases — replacing manual data lookups for non-technical operators.",
      "Engineered reusable preprocessing and feature extraction modules applied across multiple internal datasets, cutting onboarding time for new data sources.",
      "Documented model performance benchmarks, pipeline architecture, and API contracts to meet internal engineering review standards.",
    ],
    techUsed: ["Python", "Scikit-learn", "PostgreSQL", "RAG", "LangChain", "FastAPI", "Docker", "SQL"],
  },
  {
    role: "Software Engineering Intern",
    company: "Astrotech India",
    location: "India",
    period: "Apr 2021 – Jul 2021",
    summary:
      "I contributed geospatial product functionality to a live travel platform, working across mobile and backend streams in a coordinated delivery cycle.",
    highlights: [
      "Developed and shipped a production geospatial feature used within a live travel application, coordinating with the mobile team on API contracts and data formats.",
      "Collaborated across backend and cross-platform mobile teams to deliver a feature end-to-end, gaining early exposure to real-world software delivery cycles.",
      "Participated in sprint planning, code reviews, and documentation practices within an Agile engineering team.",
    ],
    techUsed: ["Python", "REST APIs", "Geospatial Libraries", "Mobile Backend Integration"],
  },
];


// ── Projects ──────────────────────────────────────────────────
export const projectItems: ProjectItem[] = [
  {
    title: "AI-Assisted Data Analysis Platform",
    summary:
      "I built a FastAPI + Streamlit platform for intelligent data profiling, conversational dataset analysis, and business insight generation — turning uploaded CSVs into decision-ready narratives.",
    impact:
      "Eliminated the gap between raw data and actionable findings by combining automated EDA with LLM-powered natural-language Q&A over live datasets.",
    metrics: ["FastAPI + Streamlit", "LLM-driven analysis", "Dockerized deployment"],
    tech: ["FastAPI", "Streamlit", "Python", "Docker", "LLMs", "Pandas", "Data Profiling"],
    repoUrl: "https://github.com/nishanglingalwar/ai-assisted-data-analysis-tool",
    demoUrl: "",
    accent: "from-cyan-500/25 via-sky-500/10 to-transparent",
    preview: [
      "Automated schema diagnostics, null-distribution mapping, and outlier detection",
      "Natural-language Q&A over uploaded datasets powered by LLM context injection",
      "Executive-ready summaries and business insight narratives generated from EDA output",
      "Dockerized backend for reproducible, portable deployment",
    ],
  },
  {
    title: "NLP-Based Used Car Pricing Intelligence",
    summary:
      "I built an end-to-end vehicle price prediction pipeline combining structured tabular features, unstructured text signals, K-Means clustering, and an ensemble regression model.",
    impact:
      "Modeled real market pricing across 400K vehicle records with R² of 0.85 and RMSE below 3,500 — delivering practical valuation confidence for automotive platforms.",
    metrics: ["400K vehicle records", "R² 0.85", "RMSE < 3,500"],
    tech: ["Python", "Scikit-learn", "NLP", "TF-IDF", "XGBoost", "K-Means", "Feature Engineering"],
    repoUrl: "https://github.com/Nishang786/Used-Cars-price-prediction-Using-Structured-and-Unstructured-data",
    demoUrl: "",
    accent: "from-violet-500/25 via-fuchsia-500/10 to-transparent",
    preview: [
      "Text-enriched feature extraction from vehicle descriptions using TF-IDF and NLP signals",
      "Cluster-aware pricing segmentation using K-Means for market positioning",
      "Ensemble regression pipeline tuned via cross-validation for generalization accuracy",
      "End-to-end reproducible pipeline from raw CSVs to model artifact",
    ],
  },
  
  {
    title: "Weather & Renewable Energy Analytics Dashboard",
    summary:
      "I built a multi-tab analytics platform visualizing weather patterns and renewable energy output with geographic mapping, time-series trends, and statistical diagnostics.",
    impact:
      "Provided operational and sustainability insights across energy and climate datasets through modular, production-ready visualization components.",
    metrics: ["Multi-source data ingestion", "Geographic + time-series views", "Modular dashboard architecture"],
    tech: ["Streamlit", "Python", "Bokeh", "Pandas", "Plotly"],
    repoUrl: "https://github.com/Nishang786/Meteorological-Data-Analysis",
    demoUrl: "",
    embedUrl: "https://grouphnci.streamlit.app/?embed=true",
    accent: "from-cyan-500/25 via-emerald-500/10 to-transparent",
    preview: [
      "Interactive geographic heatmaps for energy output and weather distribution",
      "Time-series anomaly detection and trend decomposition views",
      "Modular Streamlit tab architecture for extensible dashboard components",
    ],
  },
];


// ── Hackathons ────────────────────────────────────────────────
export const hackathonItems: HackathonItem[] = [
  {
    title: "Citi upStart FinTech — Stock Intelligence Platform",
    host: "Citi upStart Hackathon",
    logoMark: "Citi",
    logoSrc: "/citi.jpg",
    logoAlt: "Citi logo",
    summary:
      "I served as Tech Lead, owning full system architecture across a Next.js frontend and FastAPI backend — designing a clean, scalable separation of concerns across the entire stack.",
    impact:
      "I engineered a fintech platform that analyses and predicts stock movements using a cumulative hybrid model combining LSTM-based quantitative analysis with Generative AI reasoning, integrating contextually relevant news via the Yahoo Finance API — directly relevant to Agentic AI systems that reason and act on behalf of users.",
    metrics: [
      "Hybrid LSTM + GenAI prediction model",
      "Full-stack Tech Lead (Next.js + FastAPI)",
      "Yahoo Finance API news integration",
    ],
    tech: ["FastAPI", "Next.js", "Python", "LSTM", "LLMs", "GenAI", "Yahoo Finance API", "REST APIs"],
    repoUrl: "https://github.com/nishanglingalwar/citi-upstart",
    demoUrl: "",
    accent: "from-blue-500/25 via-indigo-500/10 to-transparent",
    preview: [
      "Designed end-to-end system architecture with clean frontend/backend separation across Next.js and FastAPI",
      "LSTM quantitative model fused with GenAI reasoning for a hybrid prediction output covering both historical patterns and live market sentiment",
      "Yahoo Finance API integration to source contextually relevant news signals for prediction enrichment",
      "Architected for extensibility toward Agentic AI systems that reason and act intelligently on market data",
    ],
  },
  {
    title: "Laya Healthcare: Zero-Click Agent Interceptor",
    host: "Laya Healthcare Hackathon",
    logoMark: "LN",
    logoSrc: "/laya.webp",
    logoAlt: "Laya Nexus logo",
    summary:
      "I proposed and delivered a working AI-powered customer agent assistant that converts real-time speech to text via Deepgram, detects policy-related keywords, and performs a RAG search on Pinecone to surface relevant policy information directly in front of the agent — eliminating manual lookup time.",
    impact:
      "I optimised end-to-end system latency to 2–4 seconds through careful tuning of LangChain orchestration, Pinecone vector dimensions, and chunk size balancing — delivering a near-real-time experience critical for live customer support interactions.",
    metrics: [
      "2–4 second end-to-end latency",
      "Real-time RAG + sentiment pipeline",
      "Deepgram speech-to-text integration",
    ],
    tech: ["Python", "Deepgram", "Pinecone", "LangChain", "RAG", "FastAPI", "NLP", "Sentiment Analysis"],
    repoUrl: "https://github.com/nishanglingalwar/laya-nexus",
    demoUrl: "",
    accent: "from-emerald-500/25 via-teal-500/10 to-transparent",
    preview: [
      "Real-time Deepgram speech-to-text pipeline feeding policy keyword detection and RAG retrieval with zero agent input",
      "Automatic policy number detection to fetch full prior conversation history, giving agents immediate personalised context",
      "Live sentiment analysis detecting conversation escalation proactively — surfacing agent signals before situations worsen",
      "LangChain + Pinecone latency tuned to 2–4 seconds via vector dimension and chunk size optimisation for live interaction viability",
    ],
  },
];


// ── Achievements ──────────────────────────────────────────────
export const achievementItems: AchievementItem[] = [
  {
    title: "Registered Design Patent — Tooth Analyzer Device",
    year: "2024",
    description:
      "Filed and received a registered design patent for an original diagnostic device concept integrating engineering design with clinical utility. Demonstrates ability to carry an idea from concept through formal IP protection.",
    icon: "patent",
  },
  {
    title: "1st Prize — World Robotics Championship (Technoxian)",
    year: "2023",
    description:
      "Won first place in a nationally competitive robotics championship, demonstrating precision engineering, real-time systems thinking, and high-pressure execution under competition conditions.",
    icon: "trophy",
  },
  {
    title: "Top 15 National Placement — SAE INDIA E-BAJA CAE Event",
    year: "2023",
    description:
      "Placed in the national top 15 in an SAE-governed engineering simulation event focused on computer-aided analysis, structural modeling, and performance design — competing against teams from across India.",
    icon: "award",
  },

];


// ── Education ─────────────────────────────────────────────────
export const educationItems: EducationItem[] = [
  {
    degree: "MSc in Data Analytics",
    institution: "National College of Ireland",
    location: "Dublin, Ireland",
    period: "2025 – 2026",
    details:
      "Advanced study in applied analytics, machine learning, and intelligent systems with emphasis on production-relevant methods, statistical modeling, and data engineering. Research focus spans LLM-augmented analytics pipelines, smart city data governance, and sustainability-oriented data systems.",
    highlights: [
      "Applied ML and deep learning for real-world analytical use cases",
      "Data governance, ethics, and EU regulatory frameworks (GDPR)",
      "Dissertation-level independent research in data-driven systems",
    ],
  },
  {
    degree: "Bachelor of Technology (B.Tech)",
    institution: "Ramdeobaba University",
    location: "Nagpur, India",
    period: "2020 – 2024",
    details:
      "Graduated with First Class Honors and a Minor in Artificial Intelligence & Machine Learning. Built a strong interdisciplinary foundation across software engineering, data structures, applied mathematics, and intelligent systems.",
    highlights: [
      "Minor in Artificial Intelligence & Machine Learning",
      "First Class Honors graduate",
      "Completed original IP project resulting in a registered design patent",
      "Represented institution in national-level engineering competitions (SAE INDIA, Technoxian)",
    ],
  },
];


// ── Social / Contact ──────────────────────────────────────────
export const socialLinks: SocialLink[] = [
  {
    label: "Email",
    value: "nishang786@gmail.com",
    href: "mailto:nishang786@gmail.com",
    icon: "mail",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/nishang-lingalwar",
    href: "https://www.linkedin.com/in/nishang-lingalwar-0ba87b3b3/r",
    icon: "linkedin",
  },
  {
    label: "GitHub",
    value: "github.com/Nishang786",
    href: "https://github.com/Nishang786",
    icon: "github",
  },
];


// ── Recruiter Note ────────────────────────────────────────────
export const recruiterNote =
  "I am open to AI engineering, machine learning engineering, data engineering, and applied analytics roles — with particular interest in teams building LLM-native products, intelligent data platforms, or production ML systems. Based in Dublin, Ireland. Open to hybrid, on-site, and remote-first international opportunities.";
