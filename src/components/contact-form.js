import React from "react"

const ContactForm = () => {
  return (
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
      <div className="btn__wrapper btn__wrapper--submit">
        <button className="btn btn--primary btn--full-width">SEND</button>
      </div>
    </form>
  )
}
export default ContactForm
