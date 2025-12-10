"use client";

import { motion } from "framer-motion";

export default function Home() {
  const projects = [
    {
      title: "AutoFlow — AI-Driven Workflow Automation Platform",
      desc: "Zapier-like workflow builder with drag-and-drop UI, rule engine, scheduling, retries, and webhooks.",
      tech: "React, React Flow, TypeScript, FastAPI, Golang, Azure, Docker",
    },
    {
      title: "SmartCredit — Lending Decision & Risk Scoring Engine",
      desc: "Full-stack credit scoring engine with rule builder, ML scoring, dashboards, and audits.",
      tech: "Next.js, FastAPI, Golang, PostgreSQL, ML Models, Azure",
    },
    {
      title: "AI Wellness Monitor",
      desc: "Real-time CV engine that alerts for face-touching, tracks posture & blink rate, with a cloud-linked analytics dashboard.",
      tech: "TensorFlow, OpenCV, Electron, React, FastAPI",
    },
    {
      title: "InsightHub — AI Analytics & Auto-Reporting Suite",
      desc: "Uploads datasets → generates dashboards, anomaly detection, forecasting, and PDF reports.",
      tech: "Next.js, FastAPI, Prophet, PostgreSQL, Azure",
    },
  ];

  return (
    <main className="px-6 md:px-20 lg:px-40 py-20 text-gray-800">
      {/* HERO */}
      <section className="mb-24">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold mb-4"
        >
          Hi, I'm <span className="text-blue-600">Tanya Sony</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-xl max-w-2xl leading-relaxed"
        >
          Full-stack oriented Frontend Developer with 2+ years building
          enterprise-scale applications at Corestrat. Skilled in React, Next.js,
          TypeScript, Golang, Python, Azure deployments, and AI-driven product
          engineering. I build clean, scalable systems that solve real problems at scale.
        </motion.p>
      </section>

      {/* PROJECTS */}
      <section className="mb-24" id="projects">
        <h2 className="text-3xl font-semibold mb-8">Projects</h2>

        <div className="space-y-10">
          {projects.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition"
            >
              <h3 className="text-2xl font-semibold mb-2">{p.title}</h3>
              <p className="mb-2 text-gray-700">{p.desc}</p>
              <p className="text-sm text-gray-500">
                <strong>Tech:</strong> {p.tech}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="mb-24" id="experience">
        <h2 className="text-3xl font-semibold mb-6">Experience</h2>

        <div className="border border-gray-200 rounded-xl p-6 shadow-sm">
          <h3 className="text-xl font-bold">Corestrat, Bangalore</h3>
          <p className="text-gray-600 font-medium mb-2">
            Frontend Developer (Aug 2023 – Present)
          </p>
          <p className="text-gray-600 font-medium mb-4">
            Frontend Developer Intern (Feb 2023 – Aug 2023)
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Reduced UI bugs by ~90% through scalable React/Next.js architectures.</li>
            <li>Built form engines, workflow editors, and role-based dashboards.</li>
            <li>Developed Python & Golang microservices for automation & validation.</li>
            <li>Optimized performance using memoization, lazy loading, pagination.</li>
            <li>Deployed applications to Azure App Services with CI/CD pipelines.</li>
          </ul>
        </div>
      </section>

      {/* SKILLS */}
      <section className="mb-24" id="skills">
        <h2 className="text-3xl font-semibold mb-6">Skills</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div>
            <h4 className="font-bold mb-2">Frontend</h4>
            <p>React, Next.js, TypeScript, Redux, Tailwind, MUI</p>
          </div>
          <div>
            <h4 className="font-bold mb-2">Backend</h4>
            <p>Golang (Gin/Fiber), Python (FastAPI), Node.js</p>
          </div>
          <div>
            <h4 className="font-bold mb-2">Cloud & DevOps</h4>
            <p>Azure App Services, Docker, GitHub Actions, Linux</p>
          </div>
          <div>
            <h4 className="font-bold mb-2">Databases</h4>
            <p>MySQL, MongoDB, Redis</p>
          </div>
          <div>
            <h4 className="font-bold mb-2">AI/ML</h4>
            <p>TensorFlow, OpenCV, scikit-learn, Forecasting Models</p>
          </div>
          <div>
            <h4 className="font-bold mb-2">Soft Skills</h4>
            <p>Teamwork, Communication, Ownership, Problem-Solving</p>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="text-center py-10" id="contact">
        <h2 className="text-3xl font-semibold mb-4">Let’s Connect</h2>
        <p className="text-gray-600">Email: yourname@gmail.com</p>
        <p className="text-gray-600 mt-2">LinkedIn | GitHub | Portfolio</p>
      </section>
    </main>
  );
}
