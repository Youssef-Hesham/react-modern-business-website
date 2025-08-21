import React, { useRef } from "react";
import {
  ContactContainer,
  ContactWrapper,
  ContactP,
  ContactInput,
  ContactTextarea,
} from "./ContactElements";
import { Button } from "../ButtonElements";
import emailjs from "@emailjs/browser";

const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    if (!form.current.checkValidity()) {
      // If form is invalid, show browser validation
      form.current.reportValidity();
      return;
    }

    emailjs
      .sendForm(
        "service_pje6g3t", // Service ID
        "template_skrx17c", // Template ID
        form.current,
        "WPQCdOPCdgSCiAXMF" // Public Key
      )
      .then(
        (result) => {
          console.log("Message Sent:", result.text);
          alert("✅ Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          console.log("Error:", error.text);
          alert("❌ Something went wrong, please try again.");
        }
      );
  };

  return (
    <ContactContainer id="contact">
      <ContactWrapper>
        <h3 className="center-align mb-5">Contact Us</h3>

        <form ref={form} onSubmit={sendEmail}>
          {/* Title */}
          <ContactP>Title</ContactP>
          <ContactInput type="text" name="title" placeholder="Enter a title..." required />

          {/* Name */}
          <ContactP>Name</ContactP>
          <ContactInput type="text" name="user_name" placeholder="Enter your name..." required />

          {/* Email */}
          <ContactP>Email</ContactP>
          <ContactInput type="email" name="user_email" placeholder="Enter your email..." required />

          {/* Subject */}
          <ContactP>Subject</ContactP>
          <ContactInput type="text" name="subject" placeholder="Enter subject..." required />

          {/* Message */}
          <ContactP>Message</ContactP>
          <ContactTextarea name="message" rows="5" placeholder="Enter your message..." required />

          {/* Important: Button must be a real <button> */}
          <Button as="button" type="submit" className="mt-4">
            Send Message
          </Button>
        </form>
      </ContactWrapper>
    </ContactContainer>
  );
};

export default ContactUs;
