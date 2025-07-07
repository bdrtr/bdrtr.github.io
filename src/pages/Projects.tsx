import { memo } from "react";

const PROJECTS = [
  {
    title: "Personal Portfolio",
    description: "A modern, responsive portfolio site built with React, Bootstrap, and custom animations. Features a resume, project showcase, and contact form.",
    tech: ["React", "Bootstrap", "TypeScript"],
    github: "https://github.com/bdrtr/personal-portfolio",
    demo: "https://bdrtr.github.io/",
    image: "/profile.jpg"
  },
  {
    title: "Task Manager App",
    description: "A full-stack task management app with user authentication, real-time updates, and drag-and-drop UI.",
    tech: ["React", "Node.js", "MongoDB", "Socket.io"],
    github: "https://github.com/bdrtr/task-manager",
    demo: "#",
    image: "https://cdn-icons-png.flaticon.com/512/906/906334.png"
  },
  {
    title: "Blog Platform",
    description: "A multi-user blog platform with markdown support, comments, and admin dashboard.",
    tech: ["Next.js", "Prisma", "PostgreSQL"],
    github: "https://github.com/bdrtr/blog-platform",
    demo: "#",
    image: "https://cdn-icons-png.flaticon.com/512/1828/1828884.png"
  },
  {
    title: "Weather Dashboard",
    description: "A weather dashboard with live data, charts, and location search. Mobile-friendly and fast.",
    tech: ["Vue", "Chart.js", "API"],
    github: "https://github.com/bdrtr/weather-dashboard",
    demo: "#",
    image: "https://cdn-icons-png.flaticon.com/512/869/869869.png"
  }
];

const Projects = memo(function Projects() {
  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <h1 className="display-5 fw-bolder mb-0">
          <span className="text-gradient d-inline">Projects</span>
        </h1>
        <p className="lead text-muted mt-2">A selection of my favorite and most recent work.</p>
      </div>
      <div className="row g-4">
        {PROJECTS.map((project, idx) => (
          <div className="col-md-6 col-lg-4" key={idx}>
            <div className="card h-100 shadow border-0 rounded-4 project-card position-relative overflow-hidden">
              <div className="bg-light d-flex align-items-center justify-content-center" style={{height: 180}}>
                <img src={project.image} alt={project.title} style={{maxHeight: 120, maxWidth: '80%', objectFit: 'contain'}} />
              </div>
              <div className="card-body d-flex flex-column">
                <h5 className="fw-bold mb-2">{project.title}</h5>
                <p className="text-muted mb-3" style={{minHeight: 60}}>{project.description}</p>
                <div className="mb-3 d-flex flex-wrap gap-2">
                  {project.tech.map((tech, tIdx) => (
                    <span key={tIdx} className="badge rounded-pill bg-dark px-3 py-2 small">{tech}</span>
                  ))}
                </div>
                <div className="mt-auto d-flex gap-2">
                  <a href={project.github} className="btn btn-outline-dark btn-sm" target="_blank" rel="noopener noreferrer">
                    <i className="bi bi-github me-1"></i> Code
                  </a>
                  {project.demo && project.demo !== "#" && (
                    <a href={project.demo} className="btn btn-outline-primary btn-sm" target="_blank" rel="noopener noreferrer">
                      <i className="bi bi-box-arrow-up-right me-1"></i> Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
});

export default Projects;

// Add modern card hover effect
// .project-card:hover { transform: translateY(-8px) scale(1.03); box-shadow: 0 8px 32px rgba(44,62,80,0.15); transition: all 0.2s; }