import React from "react"

const AboutMe = () => {
  return (
    <section id="about-me" className="about container-fluid">
      <div className="content-wrapper typography-fluid">
        <span className="section-title">ABOUT</span>
        <p>
          I'm enthusiastic about{" "}
          <span className="about-highlight">web applications</span> and{" "}
          <span className="about-highlight">the Internet</span>. I'm a
          passionate learner who disire to land my next job as a{" "}
          <i>
            <span className="about-highlight">front-end web developer</span>
          </i>
          . I'm so insterested in discovering knowledge about front-end
          technologies such as <span className="about-highlight">HTML5</span>/
          <span className="about-highlight">CSS3</span>,{" "}
          <span className="about-highlight">JavaScript</span> and{" "}
          <span className="about-highlight"> React</span>/
          <span className="about-highlight">Redux</span>. In fact, I've got{" "}
          <a href="#project-preview">
            <span className="about-highlight about-link-to-projects">
              several projects
            </span>
          </a>{" "}
          which I'm very excited to show you .
        </p>
      </div>
    </section>
  )
}

export default AboutMe
