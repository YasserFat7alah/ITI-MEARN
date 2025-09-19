import neura from '../assets/NeuraTalk.jpeg'
import portfolio from '../assets/portfolio.jpg'
import ayaam from '../assets/ayaam.jpg'

function ProjectCard({ project }) {
  return (
    <div className="col-md-4 mb-4">
      <div className="card h-100 shadow-sm">
        <img
          src={project.image}
          className="card-img-top"
          alt={project.title}
          style={{ height: "200px", objectFit: "cover" }}
        />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{project.title}</h5>
          <p className="card-text flex-grow-1">{project.description}</p>
          <div>
            {project.demo && (
              <a
                href={project.demo}
                className="btn btn-dark btn-sm me-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Demo
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                className="btn btn-outline-dark btn-sm"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      description: "A responsive portfolio website built with React and Bootstrap.",
      image: portfolio ,
      demo: "#",
      github: "#",
    },
    {
      title: "AYAAM - Ecommerce Store",
      description: "Full-stack e-commerce store with cart, payments, and admin panel.",
      image: ayaam,
      demo: "https://e-commerce-iti-delta.vercel.app/#/home",
      github: "https://github.com/YasserFat7alah/e-commerce-iti",
    },
    {
      title: "NeuraTalk App",
      description: "A minimal AI-powered chat application built with Node.js, Vue 3, and Drizzle ORM.",
      image: neura,
      demo: "#",
      github: "#",
    },
  ];

  return (
    <section id="projects" className="py-5">
      <div className="container">
        <h2 className="text-center mb-5">Projects</h2>
        <div className="row">
          {projects.map((project, index) => (
            <ProjectCard project={project} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;