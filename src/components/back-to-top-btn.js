import React, { Component } from "react"
import { MdArrowUpward } from "react-icons/md"

class BackToTopBtn extends Component {
  constructor(props) {
    super(props)

    this.state = {
      preScrollPos: typeof window !== "undefined" && window.pageYOffset,
      isVisible: false,
    }
  }

  backToTop = () => {
    return window.scrollTo(0, 0)
  }

  handleVisibility = () => {
    const { preScrollPos } = this.state

    const currentScrollPos = window.pageYOffset
    const isVisible = preScrollPos < currentScrollPos

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
  // static getDerivedStateFromProps() {
  //   const isScrolled = window.scrollY >= 250
  //   if (!isScrolled) {
  //     return {
  //       isVisible: false,
  //     }
  //   }
  //   return null
  // }

  render() {
    return (
      <div className={this.state.isVisible ? "back-to-top__btn  " : "hidden "}>
        {/* <p>back to top</p> */}
        <button className="btn" onClick={this.backToTop}>
          <MdArrowUpward />
        </button>
      </div>
    )
  }
}

export default BackToTopBtn
