import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Github, Linkedin, Twitter, Mail, Menu, X, Code2, Database, 
  Layout, Server, ExternalLink, ArrowRight, CheckCircle2, 
  Terminal, Cpu, Layers, Globe, Smartphone, Zap, User, Briefcase, Send
} from 'lucide-react';

// --- Shadcn-style Components ---

const Button = ({ variant = "default", size = "default", className, children, ...props }) => {
  const baseStyles = "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 disabled:pointer-events-none disabled:opacity-50";
  const variants = {
    default: "bg-indigo-600 text-white hover:bg-indigo-700 shadow-lg shadow-indigo-500/25",
    outline: "border border-slate-700 bg-slate-900/50 hover:bg-slate-800 text-slate-100",
    ghost: "hover:bg-slate-800 hover:text-slate-100 text-slate-400",
    link: "text-indigo-400 underline-offset-4 hover:underline",
  };
  const sizes = {
    default: "h-10 px-4 py-2",
    sm: "h-9 rounded-md px-3 text-sm",
    lg: "h-12 rounded-lg px-8 text-lg",
    icon: "h-10 w-10",
  };
  return (
    <motion.button 
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className || ''}`} 
      {...props}
    >
      {children}
    </motion.button>
  );
};

const Card = ({ className, children }) => (
  <div className={`rounded-xl border border-slate-800 bg-slate-900/50 text-slate-50 shadow-xl backdrop-blur-sm ${className || ''}`}>{children}</div>
);
const CardHeader = ({ className, children }) => <div className={`flex flex-col space-y-1.5 p-6 ${className || ''}`}>{children}</div>;
const CardTitle = ({ className, children }) => <h3 className={`text-2xl font-semibold leading-none tracking-tight ${className || ''}`}>{children}</h3>;
const CardContent = ({ className, children }) => <div className={`p-6 pt-0 ${className || ''}`}>{children}</div>;

const Badge = ({ variant = "default", className, children }) => {
  const variants = {
    default: "bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 hover:bg-indigo-500/20",
    secondary: "bg-slate-800 text-slate-300 border border-slate-700 hover:bg-slate-700",
    outline: "text-slate-400 border border-slate-700",
  };
  return <div className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold transition-colors ${variants[variant]} ${className || ''}`}>{children}</div>;
};

const Input = ({ className, type = "text", ...props }) => (
  <input
    type={type}
    className={`flex h-11 w-full rounded-md border border-slate-700 bg-slate-900/50 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 disabled:cursor-not-allowed disabled:opacity-50 ${className || ''}`}
    {...props}
  />
);

const Textarea = ({ className, ...props }) => (
  <textarea
    className={`flex min-h-[120px] w-full rounded-md border border-slate-700 bg-slate-900/50 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 disabled:cursor-not-allowed disabled:opacity-50 ${className || ''}`}
    {...props}
  />
);

// --- Main Component ---

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  const skills = {
    frontend: [
      { name: 'React', icon: <Code2 size={16} /> },
      { name: 'TypeScript', icon: <Terminal size={16} /> },
      { name: 'Tailwind CSS', icon: <Layout size={16} /> },
      { name: 'Next.js', icon: <Layers size={16} /> },
    ],
    backend: [
      { name: 'Node.js', icon: <Server size={16} /> },
      { name: 'PostgreSQL', icon: <Database size={16} /> },
      { name: 'Python', icon: <Cpu size={16} /> },
      { name: 'GraphQL', icon: <Zap size={16} /> },
    ],
    tools: [
      { name: 'Git', icon: <Github size={16} /> },
      { name: 'Docker', icon: <Layers size={16} /> },
      { name: 'AWS', icon: <Globe size={16} /> },
      { name: 'Figma', icon: <Layout size={16} /> },
    ],
  };

  const projects = [
    {
      title: "E-Commerce Dashboard",
      description: "A comprehensive analytics dashboard for online retailers featuring real-time data visualization, inventory management, and sales forecasting.",
      tech: ["React", "Recharts", "Node.js", "MongoDB"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
      github: "#",
      demo: "#"
    },
    {
      title: "TaskFlow App",
      description: "Collaborative project management tool with drag-and-drop Kanban boards, team chat, and automated workflow triggers.",
      tech: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&q=80",
      github: "#",
      demo: "#"
    },
    {
      title: "AI Content Generator",
      description: "SaaS platform leveraging LLMs to generate marketing copy, blog posts, and social media content with brand voice customization.",
      tech: ["Python", "FastAPI", "React", "OpenAI API"],
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
      github: "#",
      demo: "#"
    }
  ];

  const experience = [
    {
      role: "Senior Frontend Engineer",
      company: "TechCorp Solutions",
      period: "2022 - Present",
      description: "Leading the frontend team in rebuilding the core product platform. Improved performance by 40% and established a comprehensive design system."
    },
    {
      role: "Full Stack Developer",
      company: "StartupX",
      period: "2020 - 2022",
      description: "Developed and maintained multiple client-facing applications. Implemented CI/CD pipelines and reduced deployment time by 60%."
    },
    {
      role: "Junior Web Developer",
      company: "Digital Agency",
      period: "2018 - 2020",
      description: "Built responsive websites for diverse clients. Gained expertise in modern JavaScript frameworks and accessibility standards."
    }
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 font-sans selection:bg-indigo-500/30 selection:text-indigo-100">
      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-slate-800/50 bg-slate-950/80 backdrop-blur-md">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-2 font-bold text-xl"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-600 text-white">
                <Code2 size={20} />
              </div>
              <span>DevPortfolio</span>
            </motion.div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  className="text-sm font-medium text-slate-400 transition-colors hover:text-indigo-400"
                >
                  {link.name}
                </a>
              ))}
              <Button size="sm" className="ml-4">
                <Mail className="mr-2 h-4 w-4" /> Hire Me
              </Button>
            </nav>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-slate-400 hover:text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-slate-800 bg-slate-900"
            >
              <div className="container mx-auto px-4 py-4 space-y-2">
                {navLinks.map((link) => (
                  <a 
                    key={link.name} 
                    href={link.href}
                    className="block py-2 text-sm font-medium text-slate-300 hover:text-indigo-400"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 lg:py-32">
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-indigo-600/20 rounded-full blur-[120px] opacity-50" />
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[100px] opacity-30" />
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center text-center">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="mb-8 relative"
              >
                <div className="h-32 w-32 rounded-full bg-gradient-to-br from-indigo-500 to-cyan-500 p-1">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face" 
                    alt="Developer Avatar" 
                    className="h-full w-full rounded-full object-cover border-4 border-slate-950"
                  />
                </div>
                <div className="absolute bottom-2 right-2 h-6 w-6 rounded-full bg-green-500 border-4 border-slate-950" title="Available for work" />
              </motion.div>

              <motion.div
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
                className="max-w-3xl"
              >
                <motion.h1 variants={fadeInUp} className="text-4xl font-bold tracking-tight sm:text-6xl mb-6">
                  Building Scalable Web Applications with <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Modern Technologies</span>
                </motion.h1>
                <motion.p variants={fadeInUp} className="text-lg text-slate-400 mb-8 max-w-2xl mx-auto">
                  Hi, I'm Alex. A Full Stack Developer specializing in React, Node.js, and Cloud Architecture. I transform complex problems into elegant, user-centric solutions.
                </motion.p>
                <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="group">
                    View My Work <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                  <Button size="lg" variant="outline">
                    <Github className="mr-2 h-4 w-4" /> GitHub
                  </Button>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-slate-900/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid lg:grid-cols-2 gap-12 items-center"
            >
              <div>
                <Badge variant="secondary" className="mb-4">About Me</Badge>
                <h2 className="text-3xl font-bold mb-6">Passionate about clean code and intuitive design</h2>
                <p className="text-slate-400 mb-4 leading-relaxed">
                  With over 5 years of experience in software development, I've had the privilege of working with startups and established companies alike. My journey began with a curiosity about how things work on the web, which quickly evolved into a career dedicated to building high-performance applications.
                </p>
                <p className="text-slate-400 mb-6 leading-relaxed">
                  I believe that great software is not just about functionality—it's about the experience. I approach every project with a user-first mindset, ensuring that the final product is not only robust and scalable but also delightful to use.
                </p>
                <div className="flex gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-indigo-400">5+</div>
                    <div className="text-sm text-slate-500">Years Exp.</div>
                  </div>
                  <div className="w-px bg-slate-800"></div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-indigo-400">50+</div>
                    <div className="text-sm text-slate-500">Projects</div>
                  </div>
                  <div className="w-px bg-slate-800"></div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-indigo-400">20+</div>
                    <div className="text-sm text-slate-500">Clients</div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-2xl blur-2xl opacity-20"></div>
                <Card className="relative overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80" 
                    alt="Workspace" 
                    className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-500"
                  />
                </Card>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <Badge variant="secondary" className="mb-4">My Tech Stack</Badge>
              <h2 className="text-3xl font-bold">Skills & Technologies</h2>
              <p className="text-slate-400 mt-2 max-w-2xl mx-auto">A curated list of tools and technologies I use to bring ideas to life.</p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Frontend */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <Card className="h-full hover:border-indigo-500/50 transition-colors duration-300">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-indigo-500/10 flex items-center justify-center mb-4 text-indigo-400">
                      <Layout size={24} />
                    </div>
                    <CardTitle>Frontend</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {skills.frontend.map((skill) => (
                        <Badge key={skill.name} variant="outline" className="gap-1.5 py-1.5 px-3">
                          {skill.icon} {skill.name}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Backend */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <Card className="h-full hover:border-indigo-500/50 transition-colors duration-300">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-cyan-500/10 flex items-center justify-center mb-4 text-cyan-400">
                      <Server size={24} />
                    </div>
                    <CardTitle>Backend</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {skills.backend.map((skill) => (
                        <Badge key={skill.name} variant="outline" className="gap-1.5 py-1.5 px-3">
                          {skill.icon} {skill.name}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Tools */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <Card className="h-full hover:border-indigo-500/50 transition-colors duration-300">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center mb-4 text-purple-400">
                      <Terminal size={24} />
                    </div>
                    <CardTitle>Tools & DevOps</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {skills.tools.map((skill) => (
                        <Badge key={skill.name} variant="outline" className="gap-1.5 py-1.5 px-3">
                          {skill.icon} {skill.name}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 bg-slate-900/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <Badge variant="secondary" className="mb-4">Portfolio</Badge>
              <h2 className="text-3xl font-bold">Featured Projects</h2>
              <p className="text-slate-400 mt-2 max-w-2xl mx-auto">A selection of projects that demonstrate my skills and problem-solving abilities.</p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="overflow-hidden group h-full flex flex-col">
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                        <Button size="sm" variant="default" className="h-9">
                          <ExternalLink className="h-4 w-4 mr-2" /> Demo
                        </Button>
                        <Button size="sm" variant="outline" className="h-9 bg-slate-900/80 border-slate-700 text-white hover:bg-slate-800">
                          <Github className="h-4 w-4 mr-2" /> Code
                        </Button>
                      </div>
                    </div>
                    <CardHeader>
                      <CardTitle className="text-xl">{project.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex-1 flex flex-col">
                      <p className="text-slate-400 text-sm mb-4 flex-1">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mt-auto">
                        {project.tech.map((t) => (
                          <Badge key={t} variant="secondary" className="text-[10px] px-2 py-0.5">
                            {t}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Button variant="outline" size="lg">
                View All Projects <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <div className="text-center mb-16">
                <Badge variant="secondary" className="mb-4">Career Path</Badge>
                <h2 className="text-3xl font-bold">Work Experience</h2>
              </div>

              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-slate-800 transform md:-translate-x-1/2"></div>

                {experience.map((exp, index) => (
                  <motion.div
                    key={exp.company}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className={`relative flex flex-col md:flex-row gap-8 mb-12 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                  >
                    <div className="flex-1"></div>
                    <div className="absolute left-0 md:left-1/2 top-0 w-4 h-4 rounded-full bg-indigo-500 border-4 border-slate-950 transform -translate-x-[7px] md:-translate-x-1/2 z-10"></div>
                    
                    <Card className="flex-1 p-6 relative">
                      <div className="absolute top-6 left-6 text-indigo-400">
                        <Briefcase size={20} />
                      </div>
                      <div className="ml-8">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                          <h3 className="text-lg font-bold">{exp.role}</h3>
                          <Badge variant="outline" className="w-fit mt-2 sm:mt-0">{exp.period}</Badge>
                        </div>
                        <div className="text-indigo-400 font-medium mb-3">{exp.company}</div>
                        <p className="text-slate-400 text-sm leading-relaxed">{exp.description}</p>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-slate-900/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <div className="text-center mb-12">
                <Badge variant="secondary" className="mb-4">Get In Touch</Badge>
                <h2 className="text-3xl font-bold">Let's Work Together</h2>
                <p className="text-slate-400 mt-2">Have a project in mind? I'd love to hear about it.</p>
              </div>

              <Card className="p-8">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-300">Name</label>
                      <Input placeholder="John Doe" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-300">Email</label>
                      <Input type="email" placeholder="john@example.com" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-300">Subject</label>
                    <Input placeholder="Project Inquiry" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-300">Message</label>
                    <Textarea placeholder="Tell me about your project..." />
                  </div>
                  <Button type="submit" size="lg" className="w-full md:w-auto">
                    <Send className="mr-2 h-4 w-4" /> Send Message
                  </Button>
                </form>

                <div className="mt-12 pt-8 border-t border-slate-800">
                  <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="flex items-center gap-6">
                      <a href="#" className="text-slate-400 hover:text-indigo-400 transition-colors">
                        <Github size={24} />
                      </a>
                      <a href="#" className="text-slate-400 hover:text-indigo-400 transition-colors">
                        <Linkedin size={24} />
                      </a>
                      <a href="#" className="text-slate-400 hover:text-indigo-400 transition-colors">
                        <Twitter size={24} />
                      </a>
                      <a href="#" className="text-slate-400 hover:text-indigo-400 transition-colors">
                        <Mail size={24} />
                      </a>
                    </div>
                    <div className="text-slate-500 text-sm">
                      <span className="flex items-center gap-2">
                        <CheckCircle2 size={16} className="text-green-500" /> Available for freelance work
                      </span>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-8 bg-slate-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 font-bold text-lg text-slate-300">
              <Code2 size={20} className="text-indigo-500" />
              <span>DevPortfolio</span>
            </div>
            <p className="text-slate-500 text-sm">
              © {new Date().getFullYear()} Alex Developer. Built with React & Tailwind CSS.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}