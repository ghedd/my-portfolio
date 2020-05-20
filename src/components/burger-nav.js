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
  const handleKeyPress = e => {
    let enter = 13
    let esc = 27
    let key = e.keyCode
    if (key === enter) {
      setNavState({
        ...navState,
        respNavLinks: true,
      })
    } else if (key === esc) {
      setNavState({
        ...navState,
        respNavLinks: false,
      })
    }
  }
  return (
    <nav className="responsive__nav ">
      <div
        role="button"
        tabIndex={0}
        className="responsive__burger-btn"
        onClick={handleNav}
        onKeyDown={handleKeyPress}
      >
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
            <li key={navItem.title} className="nav__list-style">
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
