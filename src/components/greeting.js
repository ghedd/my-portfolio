import React from "react"
import { MdArrowDownward } from "react-icons/md"
const Greeting = () => {
  return (
    <div className="greeting">
      <h1>Hi, I'm Thịnh Lê</h1>
      <h2>You can also call me Eddie</h2>
      <div className="greeting__btn">
        <p>more about me</p>
        <button
          className="btn"
          onClick={() => (window.location.href = "#about-me")}
        >
          <MdArrowDownward />
        </button>
      </div>
    </div>
  )
}

export default Greeting
