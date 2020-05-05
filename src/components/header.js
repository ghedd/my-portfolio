import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { Component } from "react"
import MyLogo from "../data/images/logo_transparent_modified.png"

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
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 1600,
            padding: 8,
            display: `flex`,
            justifyContent: `space-between`,
            alignItems: `center`,
          }}
        >
          <div style={{ zIndex: 20 }}>
            <Link
              to="/"
              className="site-title"
              // style={{
              //   color: `whitesmoke`,
              //   textDecoration: `none`,
              // }}
              // className={this.state.isVisible ? "" : "hidden"}
            >
              <img
                src={MyLogo}
                alt="Eddie Le"
                style={{
                  height: "auto",
                  width: 120,
                  objectFit: "fill",
                  objectPosition: "center",
                  margin: 0,
                }}
              />
            </Link>
          </div>
          <nav style={{ zIndex: 20, display: "flex" }}>
            <h3 style={{ margin: 0, marginRight: 16 }}>
              <Link
                to="/#about-me"
                style={{
                  color: `whitesmoke`,
                  textDecoration: `none`,
                }}
              >
                About
              </Link>
            </h3>
            <h3 style={{ margin: 0, marginRight: 16 }}>
              <Link
                to="/#project-preview"
                style={{
                  color: `whitesmoke`,
                  textDecoration: `none`,
                }}
              >
                Projects
              </Link>
            </h3>
            <h3 style={{ margin: 0 }}>
              <Link
                to="/#contact"
                style={{
                  color: `whitesmoke`,
                  textDecoration: `none`,
                }}
              >
                Contact
              </Link>
            </h3>
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
