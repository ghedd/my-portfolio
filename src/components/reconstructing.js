import React from "react"
import { Link } from "gatsby"
const Reconstructing = () => {
  return (
    <div className="reconstructing">
      <div className="reconstructing__content typography-fluid typography-fluid--greeting">
        <h1>UNDER MANTAINANCE</h1>
        <p>Something awsome is coming</p>
        <div className="btn__wrapper">
          <button className="btn btn--secondary">
            <Link to="/">HOME PAGE</Link>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Reconstructing
