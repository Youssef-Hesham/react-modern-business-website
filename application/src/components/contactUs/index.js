import React, { useRef, useState } from "react";
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
  const [status, setStatus] = useState(""); // holds success/error message

  const sendEmail = (e) => {
    e.preventDefault();

    if (!form.current.checkValidity()) {
      form.current.reportValidity();
      return;
    }

    emailjs
      .sendForm(
        "service_pje6g3t",
        "template_skrx17c",
        form.current,
        "WPQCdOPCdgSCiAXMF"
      )
      .then(
        () => {
          setStatus("✅ Your message has been sent successfully!");
          form.current.reset();
        },
        () => {
          setStatus("❌ Something went wrong. Please try again.");
        }
      );
  };

  return (
    <ContactContainer id="contact">
      <ContactWrapper>
        <h3 className="center-align mb-5">Contact Us</h3>

        <form ref={form} onSubmit={sendEmail}>
          <ContactP>Title</ContactP>
          <ContactInput type="text" name="title" placeholder="Enter a title..." required />

          <ContactP>Name</ContactP>
          <ContactInput type="text" name="user_name" placeholder="Enter your name..." required />

          <ContactP>Email</ContactP>
          <ContactInput type="email" name="user_email" placeholder="Enter your email..." required />

          <ContactP>Subject</ContactP>
          <ContactInput type="text" name="subject" placeholder="Enter subject..." required />

          <ContactP>Message</ContactP>
          <ContactTextarea name="message" rows="5" placeholder="Enter your message..." required />

          <Button as="button" type="submit" className="mt-4">
            Send Message
          </Button>
        </form>

        {/* Inline status message */}
        {status && (
          <p
            style={{
              marginTop: "1rem",
              fontWeight: "500",
              color: status.startsWith("✅") ? "green" : "red",
            }}
          >
            {status}
          </p>
        )}
      </ContactWrapper>
    </ContactContainer>
  );
};

export default ContactUs;
