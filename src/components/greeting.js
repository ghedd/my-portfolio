import React from "react"

// import { MdArrowDownward } from "react-icons/md"
const Greeting = () => {
  return (
    <>
      <section className="greeting">
        <div className="greeting__curtain" />
        <div className="greeting__background" />
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
              className="btn btn--primary"
              onClick={() => (window.location.href = "#project-preview")}
            >
              VIEW PROJECTS
            </button>
            {/* <button
              className="btn btn-outlined"
              onClick={() => (window.location.href = "#contact")}
            >
              CONTACT
            </button> */}
          </div>
        </div>
      </section>
    </>
  )
}

export default Greeting
