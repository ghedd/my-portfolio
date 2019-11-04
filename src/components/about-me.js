import React from "react"

const AboutMe = () => {
  return (
    <div id="about-me" className="about">
      <h1>About</h1>
      <p>
        I'm enthusiastic about{" "}
        <span className="about__highlight">web applications</span> and{" "}
        <span className="about__highlight">the Internet</span>. I'm a passionate
        learner who disire to land my next job as a{" "}
        <i>
          <span className="about__highlight">front-end web developer</span>
        </i>
        . Throughout a year of learning and working hard on discovering
        front-end technologies such as{" "}
        <span className="about__highlight">HTML5</span>/
        <span className="about__highlight">CSS3</span>,{" "}
        <span className="about__highlight">JavaScript</span> and{" "}
        <span className="about__highlight"> React-Redux</span>, I'm able to
        apply aquired knowledge in mini projects that I build. I'm very excited
        to show you{" "}
        <a href="#project-preview">
          <span className="about__highlight about__link-to-projects">
            some of my work
          </span>
        </a>{" "}
        .
      </p>
    </div>
  )
}

export default AboutMe
