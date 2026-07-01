export const NAVIGATION_ITEMS = [
  { name: "Services", href: "#services" },
  { name: "Solutions", href: "#solutions" },
  { name: "Projects", href: "#projects" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
] as const;

export const CONTACT_ITEMS = [
  { label: "Email", value: "hello@saasitup.com", href: "mailto:hello@saasitup.com" },
  { label: "Phone", value: "+1 (555) 123-4567", href: "tel:+15551234567" },
  { label: "Location", value: "San Francisco, CA", href: "#location" },
] as const;

export const TRUST_LOGOS = [
  { name: "TechCorp", src: "/images/logo-techcorp.svg", alt: "TechCorp" },
  { name: "InnovateHQ", src: "/images/logo-innovatehq.svg", alt: "InnovateHQ" },
  { name: "CloudScale", src: "/images/logo-cloudscale.svg", alt: "CloudScale" },
  { name: "DataFlow", src: "/images/logo-dataflow.svg", alt: "DataFlow" },
  { name: "Executix", src: "/images/logo-executix.svg", alt: "Executix" },
  { name: "NexGen", src: "/images/logo-nexgen.svg", alt: "NexGen" },
] as const;

export const METRICS = {
  projects: 50,
  businessesHelped: 20,
  satisfaction: "99%",
} as const;

export const SERVICES = [
  {
    id: "ai-automation",
    name: "AI Automation",
    description:
      "Automate repetitive business processes using intelligent AI systems to save time and reduce costs.",
    icon: "Wand2",
    href: "/services#ai-automation",
  },
  {
    id: "ai-agents",
    name: "AI Agents",
    description:
      "Custom AI assistants designed for specific workflows to enhance productivity and decision-making.",
    icon: "Bot",
    href: "/services#ai-agents",
  },
  {
    id: "saas-development",
    name: "SaaS Development",
    description:
      "Build scalable software products from idea to launch with modern technology stacks and clean architecture.",
    icon: "LayoutDashboard",
    href: "/services#saas-development",
  },
  {
    id: "web-development",
    name: "Web Development",
    description:
      "High-performance modern websites and applications built with cutting-edge frameworks and best practices.",
    icon: "Globe",
    href: "/services#web-development",
  },
  {
    id: "seo-growth",
    name: "SEO & Growth",
    description:
      "Increase visibility and attract qualified customers with comprehensive search engine optimization strategies.",
    icon: "TrendingUp",
    href: "/services#seo-growth",
  },
  {
    id: "automation-systems",
    name: "Automation Systems",
    description:
      "Connect tools and workflows to improve efficiency and streamline business operations end-to-end.",
    icon: "Workflow",
    href: "/services#automation-systems",
  },
] as const;

export const WHY_CHOOSE_US = [
  {
    id: "ai-first",
    title: "AI-First Approach",
    description:
      "We leverage the latest AI technologies to build smarter, more efficient systems that scale with your business.",
    icon: "Brain",
  },
  {
    id: "custom-solutions",
    title: "Custom Solutions",
    description:
      "Every project is tailored to your unique business needs with personalized architecture and development.",
    icon: "Code2",
  },
  {
    id: "modern-tech",
    title: "Modern Technology Stack",
    description:
      "We use cutting-edge frameworks and tools including Next.js, React, TypeScript, and AI/ML platforms.",
    icon: "Cpu",
  },
  {
    id: "fast-execution",
    title: "Fast Execution",
    description:
      "Our agile methodology ensures rapid development cycles and faster time-to-market for your projects.",
    icon: "Lightning",
  },
  {
    id: "business-focused",
    title: "Business-Focused Development",
    description:
      "We design technology solutions that align with your business goals and drive measurable results.",
    icon: "Target",
  },
] as const;

export const PROCESS_STEPS = [
  {
    number: "01",
    id: "discovery",
    title: "Discovery",
    description: "Understand your goals, requirements, and pain points to define a clear project roadmap.",
  },
  {
    number: "02",
    id: "strategy",
    title: "Strategy",
    description: "Plan the right technical approach, architecture, and timeline for maximum impact.",
  },
  {
    number: "03",
    id: "build",
    title: "Build",
    description: "Develop and integrate systems with continuous testing, feedback, and refinement.",
  },
  {
    number: "04",
    id: "launch",
    title: "Launch",
    description: "Deploy your solution and provide comprehensive training and documentation.",
  },
  {
    number: "05",
    id: "scale",
    title: "Scale",
    description: "Optimize performance and expand capabilities as your business grows.",
  },
] as const;

export const PROJECTS = [
  {
    id: "ai-automation-platform",
    title: "AI Automation Platform",
    category: "AI & Automation",
    description:
      "Enterprise-grade automation platform that streamlines operations and reduces manual work by 70%.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800",
    technologies: ["Next.js", "OpenAI", "N8N", "PostgreSQL"],
    result: "70% Reduction in manual work",
  },
  {
    id: "saas-dashboard",
    title: "SaaS Analytics Dashboard",
    category: "SaaS Development",
    description:
      "Real-time analytics dashboard for B2B SaaS with advanced data visualization and reporting.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800",
    technologies: ["React", "D3.js", "Node.js", "MongoDB"],
    result: "3x faster data processing",
  },
  {
    id: "business-website",
    title: "Business Website",
    category: "Web Development",
    description:
      "Modern responsive website with AI-powered SEO and conversion optimization for enterprise clients.",
    image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=800",
    technologies: ["Next.js", "Framer Motion", "Tailwind CSS"],
    result: "200% increase in organic traffic",
  },
] as const;

export const AI_FEATURES = [
  {
    id: "intelligent-automation",
    title: "Intelligent Automation",
    description: "AI-powered workflows that learn and adapt to optimize your business processes over time.",
    icon: "AutoMode",
  },
  {
    id: "smart-agents",
    title: "Smart Agents",
    description: "AI agents that handle complex tasks, analyze data, and provide intelligent recommendations.",
    icon: "Feather",
  },
  {
    id: "predictive-insights",
    title: "Predictive Insights",
    description: "Machine learning models that forecast trends and help you make data-driven decisions.",
    icon: "Glasses",
  },
] as const;

export const TESTIMONIALS = [
  {
    id: "ceo-1",
    name: "Sarah Johnson",
    role: "CEO, TechFlow",
    company: "techflow.inc",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200",
    content:
      "SaasItUp transformed our operations completely. Their AI automation solutions reduced our operational costs by 60% within months.",
    rating: 5,
  },
  {
    id: "founder-2",
    name: "Michael Chen",
    role: "Founder & CEO",
    company: "startup.io",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200",
    content:
      "The SaaS platform they built for us scaled to 10,000 users seamlessly. Their technical expertise and attention to detail is unmatched.",
    rating: 5,
  },
  {
    id: "cto-3",
    name: "Emily Rodriguez",
    role: "CTO",
    company: "enterprise.co",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200",
    content:
      "Working with SaasItUp was a transformative experience. They delivered a modern, AI-powered platform that exceeded our expectations.",
    rating: 5,
  },
] as const;

export const FAQ_ITEMS = [
  {
    id: "what-services",
    question: "What services does SaasItUp provide?",
    answer: "We provide AI automation, custom AI agents, SaaS development, web development, UI/UX design, SEO optimization, lead generation, and business process automation. We help businesses automate workflows, build digital products, and scale their operations.",
  },
  {
    id: "pricing",
    question: "How much does a project cost?",
    answer: "Project costs vary based on scope, complexity, and timeline. Our AI automation projects typically range from $10,000 to $50,000, while custom SaaS development starts at $25,000. Contact us for a free consultation and detailed quote.",
  },
  {
    id: "custom-agents",
    question: "Do you build custom AI agents?",
    answer: "Yes, we specialize in building custom AI agents tailored to your specific workflows and business requirements. Our agents can handle customer support, data analysis, content generation, and many other tasks.",
  },
  {
    id: "timeline",
    question: "How long does development take?",
    answer: "Timeline depends on project size and complexity. A typical AI automation project takes 4-8 weeks, while SaaS development projects range from 8-16 weeks. We provide detailed timelines during discovery.",
  },
  {
    id: "work-with-startups",
    question: "Do you work with startups?",
    answer: "We specialize in working with startups and businesses looking to scale. Our agile approach and flexible engagement models make us a perfect partner for dynamic companies.",
  },
] as const;

export const SOCIAL_LINKS = [
  { id: "twitter", name: "Twitter", href: "https://twitter.com/saasitup", icon: "Twitter" },
  { id: "linkedin", name: "LinkedIn", href: "https://linkedin.com/company/saasitup", icon: "linkedin" },
  { id: "github", name: "GitHub", href: "https://github.com/saasitup", icon: "Github" },
  { id: "instagram", name: "Instagram", href: "https://instagram.com/saasitup", icon: "Instagram" },
] as const;