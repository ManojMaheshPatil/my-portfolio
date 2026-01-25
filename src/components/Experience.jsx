const professionalExperience = [
  {
    company: 'Eli Lilly',
    role: 'Fullstack Developer | Jan 2025 - Present',
    description: 'Currently leading two projects from scratch to MVP. Developed robust full-stack solutions using React.js, Python, and AWS. Built the MVP with an event-driven microservices architecture.'
  },
  {
    company: 'Genpact',
    role: 'Software Engineer | July 2022 - Dec 2025',
    description: 'Contributed to high-impact software solutions and collaborated with global teams to deliver scalable enterprise applications.'
  },
  {
    company: 'IBM',
    role: 'Software Engineer | Jan 2022 - June 2022',
    description: null
  }
]

const frontendSkills = [
  { name: 'React.js', level: 'Experienced' },
  { name: 'Redux', level: 'Intermediate' },
  { name: 'HTML', level: 'Experienced' },
  { name: 'TailwindCSS', level: 'Basic' },
  { name: 'React Query', level: 'Intermediate' },
  { name: 'Styled Components', level: 'Intermediate' },
  { name: 'Bootstrap', level: 'Basic' },
  { name: 'Figma', level: 'Intermediate' }
]

const backendSkills = [
  { name: 'Node.js', level: 'Experienced' },
  { name: 'Python', level: 'Experienced' },
  { name: 'AWS', level: 'Experienced' },
  { name: 'SQL', level: 'Experienced' },
  { name: 'FastAPI', level: 'Intermediate' },
  { name: 'NoSQL', level: 'Intermediate' },
  { name: 'Git', level: 'Intermediate' }
]

function SkillArticle({ name, level }) {
  return (
    <article>
      <img
        src="/assets/checkmark.png"
        alt="Experience icon"
        className="icon"
      />
      <div>
        <h3>{name}</h3>
        <p>{level}</p>
      </div>
    </article>
  )
}

function Experience() {
  return (
    <section id="experience">
      <p className="section__text__p1">Explore My</p>
      <h1 className="title">Experience</h1>
      <div className="experience-details-container">
        <div className="about-containers">
          <div className="details-container">
            <h2 className="experience-sub-title">Professional Experience</h2>
            <div className="experience-list">
              {professionalExperience.map((exp, index) => (
                <div key={index} className="experience-item">
                  <h3>{exp.company}</h3>
                  <p className="role">{exp.role}</p>
                  {exp.description && <p className="description">{exp.description}</p>}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="about-containers">
          <div className="details-container">
            <h2 className="experience-sub-title">Frontend Development</h2>
            <div className="article-container">
              {frontendSkills.map((skill, index) => (
                <SkillArticle key={index} name={skill.name} level={skill.level} />
              ))}
            </div>
          </div>
          <div className="details-container">
            <h2 className="experience-sub-title">Backend Development</h2>
            <div className="article-container">
              {backendSkills.map((skill, index) => (
                <SkillArticle key={index} name={skill.name} level={skill.level} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <img
        src="/assets/arrow.png"
        alt="Arrow icon"
        className="icon arrow"
        onClick={() => { window.location.href = '#projects' }}
      />
    </section>
  )
}

export default Experience
