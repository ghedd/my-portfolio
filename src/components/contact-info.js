import React from "react"
import {
  FaLinkedin,
  FaTwitterSquare,
  FaGithubSquare,
  FaFacebookSquare,
} from "react-icons/fa"

import ContactLogo from "../data/images/my_logo_rec.svg"

const ContactInfo = () => {
  const linkedin = "https://www.linkedin.com/in/thinh-eddie-le/"
  const github = "https://github.com/ghedd"
  const facebook = "https://www.facebook.com/thinh.le992/"
  const twitter = "https://twitter.com/EddieLewis_92"

  return (
    <div className="contact__info typography-fluid">
      <img className="contact__info__logo" src={ContactLogo} alt="my logo" />
      <p id="contact-name">LE, GIA THINH (EDDIE)</p>
      <p>
        <a href="mailto:eddie.thinhle@outlook.com" rel="noopener noreferer">
          eddie.thinhle@outlook.com
        </a>
      </p>
      <p>
        <a href="tel:1 647 657 9202" rel="noopener noreferer">
          1-647-657-9202
        </a>{" "}
        (CA)
      </p>
      <p>
        <a href="tel:84 97 981 9493" rel="noopener noreferer">
          84-97-981-9493
        </a>{" "}
        (VIE)
      </p>
      <address>43 BECKETT AVE, NORTH YORK, TORONTO, ON</address>
      <div className="contact__info__social-media">
        <a rel="noopener noreferer" href={linkedin.linkedIn}>
          <FaLinkedin />
        </a>
        <a rel="noopener noreferer" href={github}>
          <FaGithubSquare />
        </a>
        <a rel="noopener noreferer" href={facebook}>
          <FaFacebookSquare />
        </a>
        <a rel="noopener noreferer" href={twitter}>
          <FaTwitterSquare />
        </a>
      </div>
    </div>
  )
}

export default ContactInfo
