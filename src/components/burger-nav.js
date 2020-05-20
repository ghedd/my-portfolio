import React, { useState } from "react"
import { Link } from "gatsby"
const BurgerNav = ({ navItems }) => {
  const [navState, setNavState] = useState({
    respNavLinks: false,
  })

  const handleNav = () => {
    const showNavList = !navState.respNavLinks
    setNavState({
      ...navState,
      respNavLinks: showNavList,
    })
  }

  return (
    <nav className="responsive__nav ">
      <div className="responsive__burger-btn" onClick={handleNav}>
        <div className="burger__btn__line" />
        <div className="burger__btn__line" />
        <div className="burger__btn__line" />
      </div>
      <ul
        className={
          navState.respNavLinks === true
            ? "responsive__nav-links responsive__nav-links--show"
            : "responsive__nav-links "
        }
      >
        {navItems.map(navItem => {
          return (
            <li
              key={navItem.title}
              className="nav__list-style"
              onClick={handleNav}
            >
              <Link className={navItem.class} to={navItem.anchor}>
                {navItem.title}
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default BurgerNav
