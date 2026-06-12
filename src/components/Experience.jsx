const professionalExperience = [
{
company: 'Eli Lilly',
role: 'Fullstack Developer',
period: 'Jan 2025 – Present',
description: 'Leading two projects from the ground up — taking them from initial concept through MVP and three production releases. Built robust full-stack solutions using React.js and Python on an event-driven microservices architecture, owning the products across their full lifecycle — from architecture and development to observability and monitoring with Splunk.',
milestones: ['Concept', 'MVP', 'Release 1', 'Release 2', 'Release 3']
},
{
company: 'Genpact',
role: 'Software Engineer',
period: 'July 2022 – Dec 2025',
description: 'Contributed to high-impact software solutions and collaborated with global teams to deliver scalable enterprise applications.'
},
{
company: 'IBM',
role: 'Software Engineer',
period: 'Jan 2022 – June 2022',
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

const awsServices = [
'Lambda', 'Glue', 'EC2', 'ECS', 'API Gateway', 'SQS', 'SNS', 'SES',
'ElastiCache', 'OpenSearch', 'CloudWatch', 'CloudTrail', 'Splunk & Observability'
]

function SkillPill({ name, level }) {
return (
<span className={`skill-pill level-${level.toLowerCase()}`}>
<span className="skill-dot"></span>
{name}
</span>
)
}

function Experience() {
return (
<section id="experience">
<div className="section-heading">
<span className="section-eyebrow">Where I've been</span>
<h2 className="section-title">Experience</h2>
</div>

<div className="timeline">
{professionalExperience.map((exp, index) => (
<div key={index} className="timeline-card">
<div className="timeline-dot"></div>
<div className="timeline-content">
<span className="timeline-period">{exp.period}</span>
<h3>{exp.company}</h3>
<p className="timeline-role">{exp.role}</p>
{exp.description && <p className="timeline-desc">{exp.description}</p>}
{exp.milestones && (
<div className="milestone-trail">
{exp.milestones.map((m, i) => (
<span key={m} className="milestone-step">
<span className="milestone-chip">{m}</span>
{i < exp.milestones.length - 1 && <span className="milestone-arrow">→</span>}
</span>
))}
</div>
)}
</div>
</div>
))}
</div>

<div className="skills-grid">
<div className="skills-card">
<h3 className="skills-card-title tag-coral">Frontend</h3>
<div className="skill-pills">
{frontendSkills.map((skill) => (
<SkillPill key={skill.name} name={skill.name} level={skill.level} />
))}
</div>
</div>
<div className="skills-card">
<h3 className="skills-card-title tag-teal">Backend & Cloud</h3>
<div className="skill-pills">
{backendSkills.map((skill) => (
<SkillPill key={skill.name} name={skill.name} level={skill.level} />
))}
</div>
</div>
</div>
<div className="skills-card skills-card-wide">
<h3 className="skills-card-title tag-purple">AWS & Cloud Services</h3>
<div className="skill-pills">
{awsServices.map((s) => (
<span key={s} className="skill-pill">{s}</span>
))}
</div>
</div>
<div className="skills-legend">
<span><span className="skill-dot dot-experienced"></span> Experienced</span>
<span><span className="skill-dot dot-intermediate"></span> Intermediate</span>
<span><span className="skill-dot dot-basic"></span> Basic</span>
</div>
</section>
)
}

export default Experience
