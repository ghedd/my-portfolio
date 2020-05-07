import React from "react"
// import { MdArrowDownward } from "react-icons/md"
const Greeting = () => {
  return (
    <>
      <section className="greeting">
        <div className="greeting-overlay" />
        <div className="greeting-background" />
        <div className="greeting-content">
          <h1>
            HI, I'M <span id="my-name">THINH LE</span>
          </h1>
          <span>
            You can also call me <strong>Eddie</strong>
          </span>
          {/* <h2>WEB DEVELOPER</h2> */}
          {/* <div className="greeting-btn">
            <p>more about me</p>
            <button
              className="btn"
              onClick={() => (window.location.href = "#about-me")}
            >
              <MdArrowDownward />
            </button>
          </div> */}
        </div>
      </section>
    </>
  )
}

export default Greeting
