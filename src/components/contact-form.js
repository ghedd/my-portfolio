import React, { useState } from "react"
import _ from "lodash"

import { useForm } from "react-hook-form"
import FormAlertModal from "../components/form-alert-modal"
import { FaExclamationTriangle } from "react-icons/fa"
const ContactForm = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
    sendStatus: "",
  })

  // console.log(formState)

  const { register, handleSubmit, errors } = useForm()

  const handleChange = e => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    })
  }

  const emailValidator = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
  /* --------------- netlify --------------- */

  const encode = data => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&")
  }

  /* --------------- netlify --------------- */

  const onSubmit = () => {
    const submitedData = _.omit(formState, ["sendStatus"])
    console.log(submitedData)

    // netlify fetch method
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": "contact",
        ...submitedData,
      }),
    })
      .then(() =>
        setFormState({
          ...formState,
          sendStatus: "sent",
        })
      )
      .then(console.log(formState))
      .catch(error => alert(error))
    // end: netlify fetch method

    // e.preventDefault()
  }
  const handleModal = () => {
    setFormState({
      ...formState,
      sendStatus: "",
    })
  }

  return (
    <>
      <form
        name="contact"
        method="POST"
        data-netlify="true"
        netlify-honeypot="bot-field"
        onSubmit={handleSubmit(onSubmit)}
        className="contact__form"
        noValidate
      >
        <input type="hidden" name="form-name" value="contact" />
        <div
          className={
            errors.name
              ? "contact__form__field contact__form__field--error"
              : "contact__form__field"
          }
        >
          <label
            className="contact__form__field__label typography-fluid typography-fluid--label"
            htmlFor="name"
          >
            Your Name
          </label>
          <input
            className="contact__form__field__input"
            type="text"
            id="name"
            name="name"
            value={formState.name}
            onChange={handleChange}
            placeholder="Thinh Le"
            ref={register({
              required: "Required field.",
              minLength: {
                value: 2,
                message: "Your name must be at least 2 characters long.",
              },
            })}
          />
        </div>
        {errors.name && (
          <p className="contact__form__error-alert typography-fluid--alert">
            <FaExclamationTriangle /> {errors.name.message}
          </p>
        )}

        <div
          className={
            errors.email
              ? "contact__form__field contact__form__field--error"
              : "contact__form__field"
          }
        >
          <label
            className="contact__form__field__label typography-fluid typography-fluid--label"
            htmlFor="email"
          >
            Your Email
          </label>
          <input
            className="contact__form__field__input"
            type="email"
            id="email"
            name="email"
            value={formState.email}
            onChange={handleChange}
            placeholder="thinhle@example.com"
            ref={register({
              required: "Required field.",
              pattern: {
                value: emailValidator,
                message: "Invalid email address.",
              },
            })}
          />
        </div>
        {errors.email && (
          <p className="contact__form__error-alert typography-fluid--alert">
            {" "}
            <FaExclamationTriangle /> {errors.email.message}
          </p>
        )}

        <div className="contact__form__field">
          <label
            className="contact__form__field__label typography-fluid typography-fluid--label"
            htmlFor="message"
          >
            Message
          </label>
          <textarea
            className="contact__form__field__input"
            id="message"
            name="message"
            value={formState.message}
            onChange={handleChange}
            placeholder="What's your message?"
            ref={register()}
          />
        </div>
        <div className="btn__wrapper btn__wrapper--submit">
          <button type="submit" className="btn btn--primary btn--full-width">
            SEND
          </button>
        </div>
      </form>
      <FormAlertModal
        sendStatus={formState.sendStatus}
        closeModal={handleModal}
      />
    </>
  )
}
export default ContactForm
