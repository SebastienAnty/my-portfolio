import React, { useRef } from "react";
import emailjs from "emailjs-com";
import { ShareIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import "./contactMe.css";

const ContactMe = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_2b5vxm8",
      "template_y5f7ezk",
      form.current,
      "w9Vjs5b0gQagVIvzR"
    );

    e.target.reset();
  };

  return (
    <>
      <div className="contact_container">
        <h3 className="contact_title">Contact</h3>

        <div className="contact-subtitle_container">
          <h4 className="contact_subtitle">
            I have exactly what you need.{" "}
            <span className="contact_decoration">Let's Chat</span>
          </h4>

          <div className="contact-info_wrapper">
            <div className="contact-info_container">
              <ShareIcon className="contact_icons" />
              <a
                href="https://www.linkedin.com/in/sebastienanty/"
                className="contact_information"
              >
                {" "}
                https://www.linkedin.com/in/sebastienanty/{" "}
              </a>
            </div>

            <div className="contact-info_container">
              <EnvelopeIcon className="contact_icons" />
              <a
                href="mailto:sebastienmanty@gmail.com"
                className="contact_information"
              >
                sebastienmanty@gmail.com
              </a>
            </div>

            <div className="contact-info_container">
              <MapPinIcon className="contact_icons" />
              <p className="contact_information">Delray Beach, FL</p>
            </div>
          </div>

          <form ref={form} onSubmit={sendEmail}>
            <input
              type="text"
              name="name"
              placeholder="Your Full Name"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
            />
            <textarea
              name="message"
              rows="7"
              placeholder="Type your message...."
            ></textarea>
            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactMe;
