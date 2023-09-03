import React, { useRef } from "react";
import emailjs from "emailjs-com";
import { ShareIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";

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
      <div
        className="h-screen flex relative flex-col text-center md:text-left md:flex-row 
  max-w-7xl px-10 justify-evenly mx-auto items-center"
      >
        <h3 className="absolute top-10 uppercase tracking-[20px] text-gray-500 text-2xl">
          Contact
        </h3>

        <div className="flex space-y-10 flex-col top-4">
          <h4 className="text-2xl font-semibold text-center">
            I have exactly what you need.{" "}
            <span className="underline decoration-[#f34949]/50">
              Let's Chat
            </span>
          </h4>

          <div className="space-y-10">
            <div className="flex items-center space-x-5 justify-center">
              <ShareIcon className="text-[#f34949] h-7 w-7 animate-pulse" />
              <a
                href="https://www.linkedin.com/in/sebastienanty/"
                className="text-2xl"
              >
                {" "}
                https://www.linkedin.com/in/sebastienanty/{" "}
              </a>
            </div>

            <div className="flex items-center space-x-5 justify-center">
              <EnvelopeIcon className="text-[#f34949] h-7 w-7 animate-pulse" />
              <a href="mailto:sebastienmanty@gmail.com" className="text-2xl">
                sebastienmanty@gmail.com
              </a>
            </div>

            <div className="flex items-center space-x-5 justify-center">
              <MapPinIcon className="text-[#f34949] h-7 w-7 animate-pulse" />
              <p className="text-2xl">Delray Beach, FL</p>
            </div>
          </div>

          <form
            ref={form}
            onSubmit={sendEmail}
            className="flex flex-col space-y-2 w-fit mx-auto"
          >
            <div className="flex space-x-2">
              <input
                className="contactInput"
                placeholder="Name"
                type="text"
                name="name"
              />
              <input
                className="contactInput"
                placeholder="Email"
                type="text"
                name="email"
              />
            </div>

            <textarea
              className="contactInput"
              placeholder="Type your message..."
              name="message"
            ></textarea>
            <button
              className="bg-[#f34848] py-5 px-10 rounded-md text-black font-bold text-lg"
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactMe;

// <div className="contact_container">
//   <h3 className="contact_title">Contact</h3>

//   <div className="contact-subtitle_container">
//     <h4 className="contact_subtitle">
//       I have exactly what you need.{" "}
//       <span className="contact_decoration">Let's Chat</span>
//     </h4>

//     <div className="contact-info_wrapper">
//       <div className="contact-info_container">
//         <ShareIcon className="contact_icons" />
//         <a
//           href="https://www.linkedin.com/in/sebastienanty/"
//           className="contact_information"
//         >
//           {" "}
//           https://www.linkedin.com/in/sebastienanty/{" "}
//         </a>
//       </div>

//       <div className="contact-info_container">
//         <EnvelopeIcon className="contact_icons" />
//         <a
//           href="mailto:sebastienmanty@gmail.com"
//           className="contact_information"
//         >
//           sebastienmanty@gmail.com
//         </a>
//       </div>

//       <div className="contact-info_container">
//         <MapPinIcon className="contact_icons" />
//         <p className="contact_information">Delray Beach, FL</p>
//       </div>
//     </div>

//     <form ref={form} onSubmit={sendEmail}>
//       <input
//         type="text"
//         name="name"
//         placeholder="Your Full Name"
//         required
//       />
//       <input
//         type="email"
//         name="email"
//         placeholder="Your Email"
//         required
//       />
//       <textarea
//         name="message"
//         rows="7"
//         placeholder="Type your message...."
//       ></textarea>
//       <button type="submit" className="btn btn-primary">
//         Send Message
//       </button>
//     </form>
//   </div>
// </div>
