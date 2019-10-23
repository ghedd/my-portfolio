import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { Component } from "react"

class Header extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isVisible: false,
    }
  }
  handleVisibility = () => {
    const isScrolled = window.scrollY >= 200
    if (!isScrolled) {
      this.setState({
        isVisible: false,
      })
    }
    this.setState({
      isVisible: true,
    })
  }

  componentDidMount() {
    window.addEventListener("scroll", () => this.handleVisibility())
  }

  static getDerivedStateFromProps() {
    const isScrolled = window.scrollY >= 200
    if (!isScrolled) {
      return {
        isVisible: false,
      }
    }
    return null
  }

  render() {
    return (
      <header
        style={{
          marginBottom: `1.45rem`,
          position: "sticky",
          top: -1,
          zIndex: 15,
        }}
        className={this.state.isVisible ? "shadow" : ""}
      >
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 1600,
            padding: `1.45rem 1.0875rem`,
            display: `flex`,
            justifyContent: `space-between`,
          }}
        >
          <div style={{ zIndex: 20 }}>
            <h3 style={{ margin: 0 }} className="site-title">
              <Link
                to="/"
                style={{
                  color: `whitesmoke`,
                  textDecoration: `none`,
                }}
                // className={this.state.isVisible ? "" : "hidden"}
              >
                {this.props.siteTitle}
              </Link>
            </h3>
          </div>
          <div style={{ zIndex: 20, display: "flex" }}>
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
          </div>
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
