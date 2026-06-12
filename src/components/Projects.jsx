const projects = [
{
title: 'The Wild Oasis',
blurb: 'Hotel management dashboard with auth, stats and bookings.',
image: '/assets/OIG3.jpg',
githubUrl: 'https://github.com/ManojMaheshPatil/The-Wild-Oasis'
},
{
title: 'Fast React Pizza',
blurb: 'Snappy pizza ordering app built with React Router.',
image: '/assets/OIG2.jpg',
githubUrl: 'https://github.com/ManojMaheshPatil/Fast-React-Pizza'
},
{
title: 'MyBlog',
blurb: 'A REST blog API with full CRUD and clean architecture.',
image: '/assets/OIG1.jpg',
githubUrl: 'https://github.com/ManojMaheshPatil/blog-api-v1'
}
]

function ProjectCard({ title, blurb, image, githubUrl, index }) {
return (
<div className="project-card" style={{ '--tilt': `${index % 2 === 0 ? -1.2 : 1.2}deg` }}>
<span className="tape"></span>
<img src={image} alt={title} className="project-img" />
<h3 className="project-title">{title}</h3>
<p className="project-blurb">{blurb}</p>
<a className="btn btn-secondary project-btn" href={githubUrl}>
View on GitHub →
</a>
</div>
)
}

function Projects() {
return (
<section id="projects">
<div className="section-heading">
<span className="section-eyebrow">Stuff I've built</span>
<h2 className="section-title">Projects</h2>
</div>
<div className="projects-grid">
{projects.map((project, index) => (
<ProjectCard key={project.title} index={index} {...project} />
))}
</div>
</section>
)
}

export default Projects
