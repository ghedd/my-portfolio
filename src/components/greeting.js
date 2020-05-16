import React from "react"
// import BgImage from "../data/images/bg.svg"
import Illustration from "../data/images/office_scene.svg"
// import { MdArrowDownward } from "react-icons/md"
const Greeting = () => {
  return (
    <section className="greeting">
      <div className="typography-fluid typography-fluid--greeting greeting-content">
        <h1>
          HI, I'M <span id="my-name">THINH</span>
        </h1>
        <p>
          You can also call me <span id="my-name-eng">EDDIE</span>
        </p>
        <p>I'm looking for a new oppoturnity</p>

        <div className="btn__wrapper btn__wrapper--greeting">
          <button
            className="btn btn--primary btn--wide"
            onClick={() => (window.location.href = "#project-preview")}
          >
            VIEW PROJECTS
          </button>
          <br />
          <button
            className="btn btn--secondary btn--wide"
            onClick={() => (window.location.href = "#contact")}
          >
            GET IN TOUCH
          </button>
        </div>
      </div>
      <img className="greeting-illustration" src={Illustration} alt="hook" />
    </section>
  )
}

export default Greeting
