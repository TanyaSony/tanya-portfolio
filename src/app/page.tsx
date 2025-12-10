"use client";

import { motion } from "framer-motion";
import { useState } from "react";

interface Project {
  title: string;
  desc: string;
  tech: string;
  category: "Production" | "Personal";
  gradient: string;
}

interface Skill {
  category: string;
  items: string[];
  icon: string;
}

export default function Home(): JSX.Element {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects: Project[] = [
    {
      title: "DLA — Digital Lending Automation",
      desc: "Complete digital lending platform with web application and Android app for automated loan processing, document verification, and disbursement tracking.",
      tech: "React.js, Capacitor, TypeScript, FastAPI, PostgreSQL, Azure",
      category: "Production",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Rule.ai — Business Rule Engine",
      desc: "Enterprise-grade rule engine for complex business logic management with visual rule builder, versioning, and real-time execution.",
      tech: "React.js, TypeScript, FastAPI, MongoDB, Redis",
      category: "Production",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "Company Website",
      desc: "Corporate website with dynamic content management, blog system, SEO optimization, and Google Tag Manager integration for analytics tracking.",
      tech: "Next.js, FastAPI, TypeScript, Tailwind CSS, GTM, SEO",
      category: "Production",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      title: "AutoFlow — AI Workflow Automation",
      desc: "Zapier-like workflow builder with drag-and-drop UI, rule engine, scheduling, retries, and webhooks for enterprise automation.",
      tech: "React, React Flow, TypeScript, FastAPI, Golang, Azure, Docker",
      category: "Personal",
      gradient: "from-orange-500 to-red-500"
    },
    {
      title: "SmartCredit — Risk Scoring Engine",
      desc: "Full-stack credit scoring engine with rule builder, ML scoring models, dashboards, and comprehensive audit trails.",
      tech: "Next.js, FastAPI, Golang, PostgreSQL, ML Models, Azure",
      category: "Personal",
      gradient: "from-indigo-500 to-purple-500"
    },
    {
      title: "AI Wellness Monitor",
      desc: "Real-time computer vision engine that alerts for face-touching, tracks posture & blink rate, with cloud-linked analytics dashboard.",
      tech: "TensorFlow, OpenCV, Electron, React, FastAPI",
      category: "Personal",
      gradient: "from-pink-500 to-rose-500"
    },
    {
      title: "InsightHub — AI Analytics Suite",
      desc: "Uploads datasets → generates interactive dashboards, anomaly detection, forecasting, and automated PDF reports.",
      tech: "Next.js, FastAPI, Prophet, PostgreSQL, Azure",
      category: "Personal",
      gradient: "from-cyan-500 to-blue-500"
    },
  ];

  const skills: Skill[] = [
    { category: "Frontend", items: ["React", "Next.js", "TypeScript", "Redux", "Tailwind", "MUI"], icon: "💻" },
    { category: "Backend", items: ["Golang (Gin/Fiber)", "Python (FastAPI)", "Node.js"], icon: "⚙️" },
    { category: "Cloud & DevOps", items: ["Azure App Services", "Docker", "GitHub Actions", "Linux"], icon: "☁️" },
    { category: "Databases", items: ["MySQL", "MongoDB", "Redis"], icon: "🗄️" },
    { category: "AI/ML", items: ["TensorFlow", "OpenCV", "scikit-learn", "Forecasting"], icon: "🤖" },
    { category: "Mobile", items: ["Capacitor", "React Native", "Android Development"], icon: "📱" },
    { category: "SEO & Analytics", items: ["Google Tag Manager", "SEO Optimization", "Analytics", "Meta Tags"], icon: "📊" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <main className="relative px-6 md:px-20 lg:px-40 py-20">
        {/* HERO */}
        <section className="mb-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full blur-2xl opacity-50"></div>
            
            <h1 className="text-6xl md:text-7xl font-bold mb-6 relative">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Tanya Sony
              </span>
            </h1>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="inline-block mb-6"
            >
              <span className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full text-sm font-semibold shadow-lg">
                Full-Stack Frontend Developer
              </span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl max-w-3xl leading-relaxed text-gray-700"
            >
              Junior Frontend Developer with 2+ years of experience building production-grade applications and mission-critical 
              workflow products at <span className="font-semibold text-blue-600">Corestrat</span>, now expanding into full-stack 
              engineering. Proven ability to design scalable architectures, develop performant APIs, and deploy containerized 
              services on Azure. Passionate about building end-to-end platforms that solve real problems at scale.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-8 flex gap-4"
            >
              <a
                href="Tanya Sony.pdf"
                download="Tanya Sony.pdf"
                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-xl transition-all transform hover:scale-105 inline-flex items-center gap-2"
              >
                <span>📄</span>
                Download Resume
              </a>
              <a
                href="#contact"
                className="px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-all"
              >
                Contact Me
              </a>
            </motion.div>
          </motion.div>
        </section>

        {/* PROJECTS */}
        <section className="mb-32" id="projects">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <p className="text-gray-600 mb-12 text-lg">A showcase of production apps and personal innovations</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                onHoverStart={() => setHoveredProject(i)}
                onHoverEnd={() => setHoveredProject(null)}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl blur-xl -z-10 from-blue-400 to-purple-500"></div>
                
                <div className="relative bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 h-full">
                  <div className="flex justify-between items-start mb-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      p.category === 'Production' 
                        ? 'bg-green-100 text-green-700' 
                        : 'bg-blue-100 text-blue-700'
                    }`}>
                      {p.category}
                    </span>
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${p.gradient} opacity-80 transform group-hover:rotate-12 transition-transform`}></div>
                  </div>

                  <h3 className="text-2xl font-bold mb-3 text-gray-800 group-hover:text-blue-600 transition-colors">
                    {p.title}
                  </h3>
                  
                  <p className="mb-4 text-gray-600 leading-relaxed">
                    {p.desc}
                  </p>
                  
                  <div className="pt-4 border-t border-gray-200">
                    <p className="text-sm text-gray-500">
                      <strong className="text-gray-700">Tech Stack:</strong>
                      <span className="block mt-1">{p.tech}</span>
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* EXPERIENCE */}
        <section className="mb-32" id="experience">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Experience
            </h2>
          </motion.div>

          {/* Corestrat Experience */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative mb-6"
          >
            <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></div>
            
            <div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl p-8 shadow-lg ml-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center text-white text-2xl font-bold">
                  C
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">Corestrat</h3>
                  <p className="text-gray-600 font-medium">Bangalore, India</p>
                </div>
              </div>

              <div className="mb-6">
                <p className="text-lg font-semibold text-blue-600 mb-1">
                  Frontend Developer
                </p>
                <p className="text-gray-500 text-sm">Aug 2023 – Present</p>
              </div>

              <div className="mb-6 pb-6 border-b border-gray-200">
                <p className="text-lg font-semibold text-purple-600 mb-1">
                  Frontend Developer Intern
                </p>
                <p className="text-gray-500 text-sm">Feb 2023 – Aug 2023</p>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "Reduced UI bugs by ~90% through scalable React/Next.js architectures",
                  "Built form engines, workflow editors, and role-based dashboards",
                  "Developed Python & Golang microservices for automation & validation",
                  "Optimized performance using memoization, lazy loading, pagination",
                  "Deployed applications to Azure App Services with CI/CD pipelines",
                  "Led DLA and Rule.ai projects from concept to production",
                  "Implemented SEO strategies and Google Tag Manager for analytics tracking"
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700">{item}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* NeST Cybersecurity Internship */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full"></div>
            
            <div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl p-8 shadow-lg ml-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center text-white text-2xl font-bold">
                  N
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">NeST Cybersecurity</h3>
                  <p className="text-gray-600 font-medium">Kochi, India</p>
                </div>
              </div>

              <div className="mb-6">
                <p className="text-lg font-semibold text-purple-600 mb-1">
                  Cybersecurity Intern
                </p>
                <p className="text-gray-500 text-sm">Oct 2022 (1 Month)</p>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "Learned fundamentals of network security, Linux hardening, vulnerability scanning, and threat analysis",
                  "Built small PoCs on password auditing and log-event monitoring"
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700">{item}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </section>

        {/* EDUCATION */}
        <section className="mb-32" id="education">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Education
            </h2>
          </motion.div>

          <div className="space-y-6">
            {/* BTech */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center text-white text-xl font-bold flex-shrink-0">
                    🎓
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-800 mb-1">
                      BTech in Information Technology
                    </h3>
                    <p className="text-gray-600 font-medium mb-1">
                      Rajagiri School of Engineering and Technology, Kakkanad
                    </p>
                    <p className="text-sm text-gray-500">2020 - 2024</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Senior Secondary */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="relative"
            >
              <div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center text-white text-xl font-bold flex-shrink-0">
                    📚
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-800 mb-1">
                      CBSE, Senior Secondary
                    </h3>
                    <p className="text-gray-600 font-medium mb-1">
                      Viswajyothi CMI Public School, Angamaly
                    </p>
                    <p className="text-sm text-gray-500">2019 - 2020</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* High School */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="relative"
            >
              <div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center text-white text-xl font-bold flex-shrink-0">
                    🏫
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-800 mb-1">
                      CBSE, High School
                    </h3>
                    <p className="text-gray-600 font-medium mb-1">
                      Viswajyothi CMI Public School, Angamaly
                    </p>
                    <p className="text-sm text-gray-500">2017 - 2018</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* SKILLS */}
        <section className="mb-32" id="skills">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Skills & Expertise
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all"
              >
                <div className="text-4xl mb-4">{skill.icon}</div>
                <h4 className="text-xl font-bold mb-3 text-gray-800">{skill.category}</h4>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item, j) => (
                    <span
                      key={j}
                      className="px-3 py-1 bg-gradient-to-r from-blue-50 to-purple-50 text-gray-700 rounded-full text-sm border border-blue-100"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section className="text-center py-16" id="contact">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Let's Connect
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Open to new opportunities and collaborations
            </p>

            <p className="text-gray-600">tanya.s140602@gmail.com | (+91) 9846944930</p>
            <div className="flex justify-center gap-4 mt-4 text-sm text-gray-600">
              <a href="https://github.com/TanyaSony" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">GitHub</a>
              <span>•</span>
              <a href="https://www.linkedin.com/in/tanya-sony-b337021b7/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">LinkedIn</a>
              <span>•</span>
              <a href="https://tanya-portfolio-ts.vercel.app/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">Portfolio</a>
            </div>
          </motion.div>
        </section>
      </main>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}} />
    </div>
  );
}