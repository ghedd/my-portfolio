import React from "react"
import {
  FaLinkedin,
  FaTwitterSquare,
  FaGithubSquare,
  FaFacebookSquare,
} from "react-icons/fa"

const Contact = () => {
  return (
    <div className="contact" id="contact">
      <h1>Contact</h1>
      <p>Please reach me via: </p>
      <div className="contact__wrapper">
        <div className="contact__detail-wrapper">
          <div className="contact__contact">
            <span>Email: </span>
            <a href="mailto:eddie.thinhle@outlook.com">
              eddie.thinhle@outlook.com
            </a>
          </div>
          <div className="contact__contact">
            <span>Mobile: </span>
            <a href="tel:0979819493"> 0 97 981 94 93</a>
          </div>
        </div>
        <div className="contact__media-wrapper">
          <div className="contact__media">
            <a
              href="https://www.linkedin.com/in/eddie-thinhle"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin
                style={{
                  fontSize: 70,
                  padding: 8,
                  paddingLeft: 0,
                  alignSelf: "center",
                }}
              />
            </a>
          </div>
          <div className="contact__media">
            <a
              href="https://github.com/ghedd"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithubSquare
                style={{ fontSize: 70, padding: 8, alignSelf: "center" }}
              />
            </a>
          </div>
          <div className="contact__media">
            <a
              href="https://www.facebook.com/thinh.le992"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookSquare
                style={{
                  fontSize: 70,
                  padding: 8,
                  alignSelf: "center",
                  paddingBottom: 6,
                }}
              />
            </a>
          </div>
          <div className="contact__media">
            <a
              href="https://twitter.com/EddieLewis_92"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitterSquare
                style={{ fontSize: 70, padding: 8, alignSelf: "center" }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Contact
