function About() {
  return (
    <section id="about">
      <p className="section__text__p1">Get To Know More</p>
      <h1 className="title">About Me</h1>
      <div className="section-container">
        <div className="about-details-container">
          <div className="about-containers">
            <div className="details-container">
              <img
                src="/assets/experience.png"
                alt="Experience icon"
                className="icon"
              />
              <h3>Experience</h3>
              <p>4+ years <br />Software Engineer</p>
            </div>
            <div className="details-container">
              <img
                src="/assets/education.png"
                alt="Education icon"
                className="icon"
              />
              <h3>Education</h3>
              <p>
                B.Tech. Bachelors Degree<br />
                PES University
              </p>
            </div>
          </div>
          <div className="text-container">
            <p>
              Hey there👋 I'm Manoj. I'm currently working as a Fullstack Developer at Eli Lilly (Jan 2025 - Present). 
              I recently concluded my tenure at Genpact in December 2025. 
              Having over 4 years of industry experience in MNCs like Eli Lilly, Genpact, and IBM, 
              I am deeply passionate about designing and developing scalable applications that address 
              real-world challenges and deliver tangible benefits. I love building products with 
              modern architectures like event-driven microservices.
            </p>
          </div>
        </div>
      </div>
      <img
        src="/assets/arrow.png"
        alt="Arrow icon"
        className="icon arrow"
        onClick={() => { window.location.href = '#experience' }}
      />
    </section>
  )
}

export default About
