// import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { Component } from "react"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import MyLogo from "../data/images/my_logo_rec.svg"

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
    return (
      <header className={this.state.isVisible ? "shadow" : ""}>
        <div className="header-wrapper">
          <div>
            <AnchorLink to="/" className="header__site-title">
              <img src={MyLogo} alt="teddle" />
            </AnchorLink>
          </div>
          <nav>
            <AnchorLink to="/#about-me">
              <span>About</span>
            </AnchorLink>
            <AnchorLink to="/#project-preview">
              <span>Projects</span>
            </AnchorLink>

            <AnchorLink activeClassName="nav-active" to="/#contact">
              <span>Contact</span>
            </AnchorLink>
          </nav>
        </div>
      </header>
    )
  }
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
