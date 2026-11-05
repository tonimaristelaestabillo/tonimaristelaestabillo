export type Highlight = {
  value: string
  label: string
}

export type ExperienceRole = {
  company: string
  title: string
  dates: string
  location: string
  bullets: string[]
  stack: string[]
}

export type Project = {
  title: string
  type: string
  problem: string
  solution: string
  result: string
  role: string
  stack: string[]
  links: { label: string; href: string }[]
}

export type SkillGroup = {
  title: string
  items: string[]
}

export type LeadershipItem = {
  title: string
  description: string
}

export type EducationItem = {
  school: string
  degree: string
  period: string
}

export const resume = {
  name: 'Toni Maristela Estabillo',
  title: 'Senior Programmer | Former Startup Founder',
  pitch:
    'Senior software engineer building enterprise systems, digital banking solutions, and product experiences that turn complex requirements into scalable outcomes.',
  status: 'Open to opportunities',
  location: 'Metro Manila, National Capital Region, Philippines',
  social: {
    email: 'tonimaristelacarpio@gmail.com',
    phone: '+63 917 427 2570',
    github: 'https://github.com/tonimaristelaestabillo',
    linkedin: 'https://www.linkedin.com/in/tonimaristela',
    personal: 'https://tonimaristela.my.canva.site/tech',
    resume: '/resume.pdf',
  },
  about: {
    summary: [
      'At Arcadis, I serve as an Enterprise Platforms Systems Developer, specializing in SPFx, Power Platform, and Azure Services to optimize and develop internal process tools. My senior technical role involves developing and enhancing applications that streamline operations within the company, while contributing to process improvements and mentoring colleagues on best practices in application development and deployment.',
      'During my tenure at PearlPay, I played a pivotal role in digital banking solutions and UI/UX design. My responsibilities encompassed developing mobile banking suites, content management systems, and SMS management solutions, while also leading marketing initiatives rooted in personal branding, social media, and SEO to improve visibility and engagement.',
      'As the founder of Creo and an entrepreneur, I navigated startup ideation, prototyping, and financing, helping shape solutions for MSMEs and entrepreneurial businesses. This gave me a broader perspective on product strategy, technical execution, and business development, reinforced further by my leadership role at Frontier-UHS in business development and health program strategy.',
      'I enjoy solving ambiguous problems, building scalable systems, and helping teams move from concept to production with strong engineering fundamentals, business awareness, and practical execution.'
    ],
    experienceYears: '8+ years',
    industries: ['Enterprise Platforms', 'Fintech', 'Digital Banking', 'Startup & SaaS', 'Healthcare & Operations'],
    lookingFor: ['Senior Software Engineer', 'Lead Engineer', 'Platform & Systems Engineer', 'Product & Business Development Roles']
  },
  highlights: [
    { value: '8+', label: 'Years in Software Engineering' },
    { value: '3', label: 'Major enterprise systems built' },
    { value: '2+', label: 'Startup ventures led' },
    { value: '100%', label: 'Problem-solving mindset' }
  ] as Highlight[],
  experience: [
    {
      company: 'Freelance',
      title: 'Product & Web Consultant',
      dates: '2017 — 2023',
      location: 'Remote / Philippines',
      bullets: [
        'Designed and developed landing pages, conversion-focused marketing sites, and digital storefronts for founders and small businesses that needed a clearer online presence.',
        'Transformed product ideas into user flows, wireframes, mockups, and front-end experiences that balanced usability, clarity, and business objectives.',
        'Supported clients with branding direction, interface design, and implementation for campaign pages, simple SaaS offerings, and service-based business websites.',
        'Collaborated closely with stakeholders to turn rough concepts into launch-ready experiences using a lightweight, practical product development approach.'
      ],
      stack: ['HTML', 'CSS', 'JavaScript', 'React', 'UI/UX', 'Branding', 'Web Design', 'Product Strategy']
    },
    {
      company: 'Arcadis',
      title: 'Senior Software Engineer',
      dates: 'January 2023 — Present',
      location: 'Philippines',
      bullets: [
        'Developed and enhanced an enterprise platform for managing risks across the Pursuit-to-Win (PtW) and Deliver-to-Results (DtR) lifecycle, integrating Oracle Sales Cloud, Oracle ERP, and Collaboration Hub to provide centralized governance and risk assessment workflows.',
        'Built risk register, approval workflows, role-based access, reporting, search, filtering, export, and lifecycle automation features that improved governance and decision-making.',
        'Created the Process Improvement & Initiatives tool to centralize improvement requests, workflow approvals, and tracking for business process enhancements and digital transformation efforts.',
        'Developed user access management workflows for collaboration workspaces, reducing administrative overhead, improving onboarding efficiency, and strengthening security with role-based access controls.'
      ],
      stack: ['SPFx', 'Power Platform', 'Microsoft Power Apps', 'Azure', 'Oracle Sales Cloud', 'Oracle ERP', 'SharePoint', 'JavaScript']
    },
    {
      company: 'PearlPay',
      title: 'Software Engineer Team Lead',
      dates: 'June 2019 — September 2022',
      location: 'Philippines',
      bullets: [
        'Pioneered the shift from AngularJS to ReactJS and trained teammates on the new stack, introducing React Redux, project architecture standards, and repository conventions across the team.',
        'Developed and enhanced digital banking products including PearlPay MBS, a branded e-wallet/mobile banking platform, and contributed to LMS and SMS systems for non-bank and customer communications use cases.',
        'Built responsive, customer-facing web and mobile experiences using ReactJS, React Native, NodeJS, Django, and Material UI/Tailwind while handling bug fixes, API integrations, authentication, session management, and CRUD flows.',
        'Improved delivery quality by enforcing unit testing, code reviews, Git standards, CI/CD workflows, deployments, versioning, and documentation across web and mobile applications.'
      ],
      stack: ['ReactJS', 'React Native', 'NodeJS', 'Django', 'Python', 'AWS', 'Redux', 'Jest', 'Jenkins', 'Expo']
    },
    {
      company: 'Creo / Frontier-UHS',
      title: 'Founder & Business Development Lead',
      dates: 'July 2022 — January 2023',
      location: 'Philippines',
      bullets: [
        'Founded Creo to build an MVP that helps MSMEs establish digital presence through online marketplace and booking-reservation solutions for service-based businesses.',
        'Worked on market research, feasibility studies, product discovery, pitch deck development, and business proposal creation for startup growth and financing opportunities.',
        'Led business development initiatives at Frontier-UHS, helping shape optimal health programs and e-commerce strategies with a focus on long-term customer value and sustainable growth.',
        'Built product and business narratives, prototyped solutions, and contributed to partnership conversations through UX mockups, stakeholder presentations, and strategic planning.'
      ],
      stack: ['Startup Strategy', 'Product Discovery', 'Business Development', 'UX', 'Pitch Decks', 'Market Research']
    }
  ] as ExperienceRole[],
  projects: [
    {
      title: 'PearlPay MBS',
      type: 'Fintech Product',
      problem: 'Financial institutions needed a branded digital banking platform that could deliver secure mobile financial services for customers without a heavy custom build cycle.',
      solution: 'Our team developed a white-label mobile banking and e-wallet platform using ReactJS, NodeJS, React Native, and secure API flows tailored for digital finance use cases.',
      result: 'The platform enabled institutions to launch digital financial experiences with improved customer access to banking services and transaction convenience.',
      role: 'Software Engineer',
      stack: ['ReactJS', 'React Native', 'NodeJS', 'Django', 'AWS', 'Mobile Banking'],
      links: [
        { label: 'Product', href: '#' },
        { label: 'Case Notes', href: '#' }
      ]
    },
    {
      title: 'Arcadis Risk Governance Platform',
      type: 'Enterprise Platform',
      problem: 'The business needed a single, governed process for risk tracking across pursuit and delivery lifecycles without relying on fragmented tools and manual coordination.',
      solution: 'Our team developed a central platform integrating Oracle Sales Cloud, Oracle ERP, and Collaboration Hub to support risk register workflows, approvals, lifecycle controls, and role-based access.',
      result: 'The solution strengthened governance, improved visibility for stakeholders, and reduced operational friction in enterprise process management.',
      role: 'Senior Software Engineer',
      stack: ['SPFx', 'Power Platform', 'Azure', 'Oracle ERP', 'Oracle Sales Cloud', 'SharePoint'],
      links: [
        { label: 'Platform', href: '#' },
        { label: 'Governance', href: '#' }
      ]
    },
    {
      title: 'Process Improvement & Initiatives Tool',
      type: 'Operational Workflow',
      problem: 'Teams were managing change requests and improvement initiatives in disconnected ways, creating slow approvals and limited visibility into transformation efforts.',
      solution: 'Our team created a centralized dashboard and workflow tool for improvement requests, approvals, lifecycle tracking, and initiative visibility across business units.',
      result: 'The system improved process transparency, accelerated execution of improvement efforts, and made initiative management easier to monitor across stakeholders.',
      role: 'Senior Software Engineer',
      stack: ['Power Apps', 'SPFx', 'Azure', 'Workflow Automation', 'SharePoint'],
      links: [
        { label: 'Workflow', href: '#' },
        { label: 'Improvement', href: '#' }
      ]
    },
    {
      title: 'Creo MVP Marketplace',
      type: 'Startup Product',
      problem: 'MSMEs needed a faster, simpler way to launch an online presence and manage bookings or transactions without deep technical complexity.',
      solution: 'Our team developed the MVP for an online marketplace and booking platform, covering product discovery, prototype design, business proposal details, and technical feasibility for launch.',
      result: 'The solution laid the groundwork for a scalable digital commerce and booking model for service-oriented businesses.',
      role: 'Founder & Product Builder',
      stack: ['Startup MVP', 'UX', 'Product Strategy', 'Marketplace', 'Booking Platform'],
      links: [
        { label: 'Pitch Deck', href: '#' },
        { label: 'Prototype', href: '#' }
      ]
    },
    {
      title: 'Andy',
      type: 'Mobile Application',
      problem: 'Drivers needed a smarter and easier way to reserve parking spaces in advance without the friction of manual coordination or uncertain availability.',
      solution: 'Our team developed a mobile application that enables advanced and smart parking reservations with visual-guided reservation flows, user registration and management, and basic analytics with e-receipt support.',
      result: 'The product improved parking convenience, made reservations easier to manage, and supported a smoother user experience from check-in to check-out.',
      role: 'Full-Stack Developer',
      stack: ['Ionic Framework', 'Firebase', 'Heroku', 'Mobile App', 'Parking Reservation', 'Analytics'],
      links: [
        { label: 'App', href: '#' },
        { label: 'Features', href: '#' }
      ]
    },
    {
      title: 'Hubzz',
      type: 'Product & Web Consulting',
      problem: 'Practices needed a more efficient way to hire locums based on specialization, proximity, and rates while streamlining their reservation and reporting workflows.',
      solution: 'Our team developed a web platform and mobile application for locum hiring and booking, including reservation tracking, report generation, registration flows, document management, and a mobile-first experience for locum applicants.',
      result: 'The system improved how practices managed locum hiring and how candidates applied for postings, while giving stakeholders an easier way to track activity and operational data.',
      role: 'Product & Web Consultant',
      stack: ['NodeJS', 'JQuery', 'Ionic 2', 'MongoDB', 'MySQL', 'Heroku', 'Mocha', 'Chai', 'REST APIs'],
      links: [
        { label: 'Platform', href: '#' },
        { label: 'Case Notes', href: '#' }
      ]
    }
  ] as Project[],
  skills: [
    { title: 'Languages', items: ['JavaScript', 'TypeScript', 'Python', 'Java', 'SQL', 'C#'] },
    { title: 'Frontend', items: ['ReactJS', 'React Native', 'SPFx', 'Power Apps', 'AngularJS', 'HTML', 'CSS', 'Tailwind', 'JQuery', 'Ionic 2'] },
    { title: 'Backend', items: ['NodeJS', 'Django', 'REST APIs', 'Express', 'MongoDB', 'MySQL', 'Firebase', 'Authentication', 'Token Management'] },
    { title: 'Cloud & DevOps', items: ['Azure', 'AWS', 'Docker', 'Jenkins', 'CI/CD', 'Git', 'Heroku', 'API Versioning', 'Deployment'] },
    { title: 'Data & Systems', items: ['Oracle ERP', 'Oracle Sales Cloud', 'MongoDB', 'MySQL', 'PostgreSQL', 'Firebase', 'Reports Generation', 'Documents Management'] },
    { title: 'Practices', items: ['Software Design', 'SPFx', 'Microsoft Power Apps', 'Agile', 'Scrum', 'Technical Leadership', 'Testing', 'Mocha', 'Chai', 'Responsive Design'] }
  ] as SkillGroup[],
  leadership: [
    {
      title: 'Team leadership',
      description: 'Led engineering work, mentored peers, set project architecture standards, and enforced code quality practices across multiple feature teams and delivery cycles.'
    },
    {
      title: 'Startup leadership',
      description: 'Built startup concepts from ideation through prototyping and pitch preparation, balancing product thinking, market validation, and customer value creation.'
    },
    {
      title: 'Operational improvement',
      description: 'Improved internal processes through automation, governance workflows, role-based access controls, and standardization of application development and deployment practices.'
    }
  ] as LeadershipItem[],
  education: [
    {
      school: 'University of Santo Tomas',
      degree: "Bachelor's Degree, Bachelor of Computer Science",
      period: '2012 — 2016'
    },
    {
      school: 'St. Vincent School',
      degree: 'High School',
      period: '2008 — 2012'
    }
  ] as EducationItem[]
}
