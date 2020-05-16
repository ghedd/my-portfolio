import React from "react"
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

        <form className="contact__form">
          <div className="contact__form__field">
            <label
              className="contact__form__field__label typography-fluid typography-fluid--label"
              htmlFor="usrName"
            >
              Name
            </label>
            <input
              className="contact__form__field__input"
              type="text"
              id="usrName"
              name="usrName"
              placeholder="Thinh Le"
            />
          </div>
          <div className="contact__form__field">
            <label
              className="contact__form__field__label typography-fluid typography-fluid--label"
              htmlFor="usrEmail"
            >
              Email
            </label>
            <input
              className="contact__form__field__input"
              type="email"
              id="usrEmail"
              name="usrEmail"
              // value=""
              placeholder="thinhle@example.com"
            />
          </div>
          <div className="contact__form__field">
            <label
              className="contact__form__field__label typography-fluid typography-fluid--label"
              htmlFor="usrMsg"
            >
              Message
            </label>
            <textarea
              className="contact__form__field__input"
              id="usrMsg"
              name="usrMsg"
              // value=""
              placeholder="What's your message?"
            />
          </div>
          <div className="contact__form__submit">
            <button className="btn btn--primary">SEND</button>
          </div>
        </form>

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
