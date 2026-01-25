const projects = [
  {
    title: 'The Wild Oasis',
    image: '/assets/OIG3.jpg',
    githubUrl: 'https://github.com/ManojMaheshPatil/The-Wild-Oasis'
  },
  {
    title: 'Fast React Pizza',
    image: '/assets/OIG2.jpg',
    githubUrl: 'https://github.com/ManojMaheshPatil/Fast-React-Pizza'
  },
  {
    title: 'MyBlog',
    image: '/assets/OIG1.jpg',
    githubUrl: 'https://github.com/ManojMaheshPatil/blog-api-v1'
  }
]

function ProjectCard({ title, image, githubUrl }) {
  return (
    <div className="details-container color-container">
      <div className="article-container">
        <img src={image} alt={title} className="project-img" />
      </div>
      <h2 className="experience-sub-title project-title">{title}</h2>
      <div className="btn-container">
        <button
          className="btn btn-color-2 project-btn"
          onClick={() => { window.location.href = githubUrl }}
        >
          Github
        </button>
      </div>
    </div>
  )
}

function Projects() {
  return (
    <section id="projects">
      <p className="section__text__p1">Browse My Recent</p>
      <h1 className="title">Projects</h1>
      <div className="experience-details-container">
        <div className="about-containers">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              image={project.image}
              githubUrl={project.githubUrl}
            />
          ))}
        </div>
      </div>
      <img
        src="/assets/arrow.png"
        alt="Arrow icon"
        className="icon arrow"
        onClick={() => { window.location.href = '#contact' }}
      />
    </section>
  )
}

export default Projects
