export const profile = {
  name: 'Lai Tsz Ting (Cheryl)',
  displayName: 'Cheryl Lai',
  initials: 'CL',
  title: 'Full Stack Software Engineer',
  email: 'cheryl.lai.work481@gmail.com',
  location: 'Hong Kong',
  siteUrl: 'https://portfolio-website-uozj.vercel.app',
  // <!-- TODO: USER INPUT NEEDED: provide actual GitHub profile URL (currently using github.com/cherylaitt — confirm it is correct) -->
  githubUrl: 'https://github.com/cherylaitt',
  linkedinUrl: 'https://www.linkedin.com/in/cheryl-lai-159664224/',
  // <!-- TODO: USER INPUT NEEDED: upload resume PDF to /public/resume/ -->
  // The Download Resume buttons stay hidden until this file exists (see lib/resume.ts).
  resumePath: '/resume/Cheryl_Lai_Resume.pdf',
  heroSummary:
    'Full Stack Software Engineer with 3+ years building production web and mobile products end-to-end — from AI-powered document extraction workflows at BDO to a React Native app reaching 200+ users and a customer portal serving 20,000+ active users at Preface.',
};

export interface HeroStat {
  value: number;
  suffix: string;
  label: string;
}

export const heroStats: HeroStat[] = [
  { value: 3, suffix: '+', label: 'Years building production software' },
  { value: 200, suffix: '+', label: 'Mobile app active users' },
  { value: 20000, suffix: '+', label: 'Customer portal active users' },
  { value: 500, suffix: '+', label: 'Tutors paid accurately every month' },
];

export interface ExperienceEntry {
  id: string;
  company: string;
  role: string;
  period: string;
  year: string;
  location?: string;
  summary: string;
  highlights: string[];
  tech?: string[];
}

export const experience: ExperienceEntry[] = [
  {
    id: 'in-and-in',
    company: 'iN and iN Management Limited',
    role: 'Programmer Trainee Intern',
    period: 'Jun 2021 – Jul 2021',
    year: '2021',
    summary: 'Summer internship building for a client website.',
    highlights: ['Developed an animated company logo in PHP for a client website.'],
    tech: ['PHP'],
  },
  {
    id: 'preface-trainee',
    company: 'Preface Technopreneur Limited',
    role: 'Full Stack Software Engineer Trainee',
    // <!-- TODO: USER INPUT NEEDED: confirm the date you moved from Trainee to Full Stack Software Engineer, and any trainee-specific highlights -->
    period: 'From Jun 2022',
    year: '2022',
    location: 'Hong Kong',
    summary: 'Joined Preface Technopreneur Limited as a Full Stack Software Engineer Trainee.',
    highlights: [],
  },
  {
    id: 'preface-engineer',
    company: 'Preface Technopreneur Limited',
    role: 'Full Stack Software Engineer',
    period: 'Until Aug 2025',
    year: '2025',
    location: 'Hong Kong',
    summary:
      'Built and maintained Preface’s public website, customer portal, admin portal and mobile app across the full stack.',
    highlights: [
      'Built the core version of the mobile app from scratch and launched within 3 months (coffee ordering, tech learning, event sign-up), then continued iterating for 10+ months; reached 200+ active users.',
      'Provided post-implementation support and enhancements for the customer service portal (React.js, Next.js) used by 20,000+ active users.',
      'Automated class and order management in the admin portal (Ruby on Rails, PostgreSQL).',
      'Worked with the finance team to turn a disorganised salary payment process into accurate monthly processing for 500+ tutors.',
      'Built the responsive public website (TypeScript) showcasing the company vision and products.',
      'Led QA through unit testing and bug bashes for stable deployments.',
      'Hosted stakeholder meetings and mentored interns in frontend development over a 3-month program.',
    ],
    tech: ['React Native', 'React.js', 'Next.js', 'TypeScript', 'Ruby on Rails', 'PostgreSQL'],
  },
  {
    id: 'bdo',
    company: 'BDO Limited',
    role: 'Programmer',
    period: 'Jan 2026 – Mar 2026',
    year: '2026',
    location: 'Hong Kong',
    summary:
      'Built AI-powered data extraction and auditor validation tooling within a .NET (C#) admin portal used by the tax department.',
    highlights: [
      'Built a new feature automating data extraction within a .NET (C#) admin portal used by the tax department.',
      'Used Vision Language Models (VLM) with custom prompt engineering to extract data from scanned/paper documents submitted as PDFs.',
      'Coordinated across the company secretary (document intake), the tax department (extraction and validation) and client tax report analysis.',
      'Designed and developed a web-based validation dashboard for auditors to compare AI-extracted data against the original source documents, with ongoing enhancements.',
    ],
    tech: ['.NET', 'C#', 'VLM', 'Prompt Engineering'],
  },
];

export const education = {
  degree: 'BSc Computer Science',
  school: 'Hong Kong Baptist University',
  period: 'Sep 2017 – Nov 2022',
  finalYearProject: 'Flutter + Firebase app for student attendance tracking.',
};

export interface SkillGroup {
  category: string;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  { category: 'Mobile', skills: ['React Native'] },
  {
    category: 'Frontend',
    skills: ['TypeScript', 'JavaScript', 'React.js', 'Next.js', 'HTML & CSS', 'Tailwind CSS', 'jQuery'],
  },
  { category: 'Backend', skills: ['Ruby on Rails', 'PostgreSQL', 'Python', '.NET (C#)'] },
  {
    category: 'AI',
    skills: ['Prompt Engineering', 'VLM Implementation', 'AI Model Implementation', 'Cursor'],
  },
  {
    category: 'Soft / Technical',
    skills: ['API Design', 'System Design', 'Git', 'Stakeholder Management'],
  },
];

export interface Language {
  name: string;
  level: string;
}

export const languages: Language[] = [
  { name: 'English', level: 'Advanced' },
  { name: 'Cantonese', level: 'Native' },
  { name: 'Mandarin', level: 'Advanced' },
  { name: 'Japanese', level: 'JLPT N3' },
];
