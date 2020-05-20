import React from "react"
import { FaRegCheckCircle } from "react-icons/fa"
const FormAlertModal = ({ sendStatus, closeModal }) => {
  return (
    <div className={sendStatus === "sent" ? "modal" : "modal closed"}>
      <div className="contact__form__alert__modal-wrapper">
        <div className="contact__form__alert__modal typography-fluid">
          <FaRegCheckCircle className="contact__form__alert__modal__icon" />
          <p className="contact__form__alert__modal__title">Thank You!</p>
          <p className="contact__form__alert__modal__body">
            Your contact information has been sent successfully
          </p>
          <p className="contact__form__alert__modal__body">
            I'm looking forward to talking to you soon
          </p>

          <button
            onClick={closeModal}
            className="btn btn--secondary modal__btn"
          >
            OK!
          </button>
        </div>
      </div>
    </div>
  )
}

export default FormAlertModal
