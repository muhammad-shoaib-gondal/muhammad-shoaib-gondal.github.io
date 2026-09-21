export const profile = {
  name: 'Muhammad Shoaib Gondal',
  shortName: 'Shoaib',
  role: 'Researcher & Engineer',
  location: 'Manhattan, KS, USA',
  email: 'gondalshoaib4444@gmail.com',
  phone: '(785) 317-5180',
  statement:
    'I work between research and engineering — machine-checked proofs in Coq on one side, production systems and AI agents on the other.',
  bio: [
    'I am a graduate researcher at Kansas State University, where I am completing an MS in Computer Science with a 4.0 GPA and graduating in December 2027. My work in the Koncordant Lab centers on a formally verified reasoner written in Coq.',
    'Before graduate school I spent a year at Qualitex Trading maintaining a business-critical platform, building Laravel and Node services across an ecosystem of five interconnected applications, and designing algorithms to keep it fast and reliable.',
    'The common thread is correctness: I like problems where the answer has to be provably right, not just plausible.',
  ],
  footnote:
    'Outside of research I have solved 1550+ algorithmic problems and qualified for Meta Hacker Cup Round 2 in 2022 and 2023.',
}

export const links = {
  github: 'https://github.com/',
  linkedin: 'https://www.linkedin.com/',
  resume: '/Shoaib_Gondal_Resume.pdf',
}

export const education = {
  degree: 'MS in Computer Science',
  school: 'Kansas State University',
  location: 'Manhattan, KS',
  period: 'Aug 2025 — Dec 2027',
  graduating: 'Graduating December 2027',
  gpa: '4.0 / 4.0',
  coursework: [
    'Advanced Operating Systems',
    'Analysis of Algorithms',
    'Formal Language Theory',
    'Programming Languages (OCaml)',
  ],
}

export type Role = {
  role: string
  org: string
  location: string
  period: string
  points: string[]
  stack: string[]
}

export const research: Role[] = [
  {
    role: 'Graduate Research Assistant',
    org: 'Koncordant Lab, Kansas State University',
    location: 'Manhattan, KS',
    period: 'May 2026 — Present',
    points: [
      'Working with Dr. Hande McGinty and Dr. Atalay Mert Ileri on a formally verified reasoner implemented in Coq.',
      'Developing machine-checked proofs of mathematical and algorithmic correctness to strengthen the theoretical foundations of the system.',
    ],
    stack: ['Coq', 'Formal Verification', 'Proof Engineering'],
  },
  {
    role: 'Graduate Teaching Assistant',
    org: 'Kansas State University',
    location: 'Manhattan, KS',
    period: 'Aug 2025 — May 2026',
    points: [
      'Taught Python and data structures & algorithms to 50+ students through one-on-one coaching and detailed written feedback.',
      'Tracked individual weaknesses across the semester and adapted instruction to measurably improve student outcomes.',
    ],
    stack: ['Python', 'Algorithms', 'Instruction'],
  },
]

export const experience: Role[] = [
  {
    role: 'Algorithmic Problem Designer',
    org: 'ShipD',
    location: 'Remote',
    period: 'Jul 2024 — Jan 2025',
    points: [
      'Designed and tested 100+ complex algorithmic problems in TypeScript and Python to produce high-quality LLM training data.',
      'Authored optimal solutions, edge-case test suites, and strict time and space complexity analyses to guarantee data integrity across the training pipeline.',
    ],
    stack: ['TypeScript', 'Python', 'LLM Data'],
  },
  {
    role: 'Software Engineer',
    org: 'Qualitex Trading',
    location: 'Remote',
    period: 'Feb 2023 — Mar 2024',
    points: [
      'Maintained and extended a business-critical platform supporting core operations, shipping new features and adapting the system to evolving requirements.',
      'Built full-stack services with PHP/Laravel, JavaScript, Node.js and SQL data layers, designing algorithms that improved reliability and performance.',
      'Worked across an ecosystem of 5+ interconnected applications, developing REST APIs to integrate internal and external components.',
    ],
    stack: ['PHP', 'Laravel', 'Node.js', 'JavaScript', 'SQL', 'REST'],
  },
  {
    role: 'Automation (QA) Intern',
    org: 'VentureDive',
    location: 'Remote',
    period: 'Aug 2022 — Nov 2022',
    points: [
      'Accelerated QA deployment cycles by implementing JUnit frameworks for functional and integration testing.',
      'Systematized testing methodology inside a collaborative, Agile-driven team.',
    ],
    stack: ['Java', 'JUnit', 'Agile'],
  },
]

export type Project = {
  name: string
  period: string
  blurb: string
  points: string[]
  stack: string[]
  status?: string
}

export const projects: Project[] = [
  {
    name: 'EstatePermit',
    period: 'Jun 2026 — Present',
    status: 'Active',
    blurb:
      'An industrial-scale multi-agent permitting platform that turns a property plan into a cited compliance report.',
    points: [
      'Five AI agents analyze zoning, building code, environmental, and utility rules in parallel, then merge their findings into a cited compliance report and permit package.',
      'Designed for production with jurisdiction knowledge packs, human approval gates, and a full audit trail for multi-city rollout.',
    ],
    stack: ['Python', 'FastAPI', 'React', 'TypeScript', 'Multi-Agent AI', 'RAG'],
  },
  {
    name: 'KompAI',
    period: 'Feb 2026',
    blurb:
      'An AI-powered no-code web design platform: describe a page, watch it build, then click any element to edit it directly.',
    points: [
      'Real-time page creation with live preview through sandboxed iframes and direct DOM editing via click-based inspection.',
      'Integrated 5+ LLMs through the HuggingFace Inference API to generate and modify HTML, CSS, and JavaScript from natural language, with multi-file editing and ZIP imports.',
    ],
    stack: ['React 19', 'Vite', 'HuggingFace API', 'LLM'],
  },
  {
    name: 'TVD',
    period: 'Sep 2022 — Jan 2023',
    blurb: 'A scalable short-video platform with dynamic feeds, search, and secure multi-role access.',
    points: [
      'Handled high-volume media uploads, video playback, and dynamic user feeds with hashtag, search, and following functionality.',
      'Engineered secure authentication with 2FA and role-based access control to protect restricted resources.',
    ],
    stack: ['Node.js', 'MySQL', 'PHP', 'JavaScript', 'REST APIs'],
  },
]

export const skills = [
  {
    group: 'Languages',
    items: ['TypeScript', 'Python', 'OCaml', 'Coq', 'JavaScript', 'PHP', 'SQL', 'Java', 'C++'],
  },
  {
    group: 'Systems & Backend',
    items: ['Node.js', 'FastAPI', 'Laravel', 'REST APIs', 'MySQL', 'PostgreSQL'],
  },
  {
    group: 'Interfaces',
    items: ['React', 'Vite', 'Tailwind CSS', 'TypeScript'],
  },
  {
    group: 'Research Interests',
    items: ['Formal Verification', 'Proof Assistants', 'Algorithms', 'Multi-Agent AI', 'RAG'],
  },
]
