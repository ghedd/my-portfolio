import React from "react"
import ContactForm from "../components/contact-form"

// import {
//   FaLinkedin,
//   FaTwitterSquare,
//   FaGithubSquare,
//   FaFacebookSquare,
// } from "react-icons/fa"

import ConvoScene from "../data/images/convo_scene.svg"
import ContactLogo from "../data/images/my_logo_rec.svg"

const Contact = () => {
  return (
    <section className="contact container-fluid" id="contact">
      <span className="section-title">GET IN TOUCH</span>
      <div className="contact-wrapper">
        <div className="contact__info">
          <img
            className="contact__info__logo"
            src={ContactLogo}
            alt="my logo"
          />
        </div>
        <ContactForm />
        <div className="contact__illustration">
          <img
            className="contact__illustration__img illustration"
            src={ConvoScene}
            alt="conversation"
          />
        </div>
      </div>
    </section>
  )
}
export default Contact
