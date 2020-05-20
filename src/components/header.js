import PropTypes from "prop-types"
import React, { Component } from "react"
import { Link } from "gatsby"
import BurgerNav from "../components/burger-nav"
import MyLogo from "../data/images/my_logo_rec.png"

class Header extends Component {
  constructor(props) {
    super(props)

    this.state = {
      preScrollPos: typeof window !== "undefined" && window.pageYOffset,
      isVisible: false,
    }
  }
  handleVisibility = () => {
    const currentScrollPos = window.pageYOffset
    const isVisible = 10 < currentScrollPos

    this.setState({
      preScrollPos: currentScrollPos,
      isVisible,
    })
  }

  componentDidMount() {
    typeof window !== "undefined" &&
      window.addEventListener("scroll", () => this.handleVisibility())
  }
  componentWillUnmount() {
    typeof window !== "undefined" &&
      window.removeEventListener("scroll", () => this.handleVisibility())
  }

  render() {
    const navItems = [
      {
        title: "About",
        class: "nav-item typography-fluid--link-clean-style",
        anchor: "/#about-me",
      },
      {
        title: "Projects",
        class: "nav-item typography-fluid--link-clean-style",
        anchor: "/#project-preview",
      },
      {
        title: "Contact",
        class: "nav-item typography-fluid--link-clean-style",
        anchor: "/#contact",
      },
    ]
    return (
      <header className={this.state.isVisible ? "shadow" : ""}>
        <div className="header-wrapper">
          <div>
            <Link to="/" className="header__site-title">
              <img src={MyLogo} alt="teddle" />
            </Link>
          </div>
          <nav className="nav-bar__full">
            {navItems.map(navItem => {
              return (
                <Link
                  key={navItem.title}
                  to={navItem.anchor}
                  className={navItem.class}
                >
                  <span>{navItem.title}</span>
                </Link>
              )
            })}
          </nav>
          <BurgerNav navItems={navItems} />
        </div>
      </header>
    )
  }
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: `teddlecodes`,
}

export default Header
