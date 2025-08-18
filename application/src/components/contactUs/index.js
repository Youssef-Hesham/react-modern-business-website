import React from "react";
import {
  ContactContainer,
  ContactWrapper,
  ContactP,
  ContactInput,
  ContactTextarea,
} from "./ContactElements";
import { Button } from "../ButtonElements";

const ContactUs = () => {
  return (
    <ContactContainer id="contact">
      <ContactWrapper>
        <h3 className="center-align mb-5">Contact Us</h3>

        <form>
          {/* Name */}
          <ContactP>Name</ContactP>
          <ContactInput type="text" placeholder="Enter your name..." />

          {/* Email */}
          <ContactP>Email</ContactP>
          <ContactInput type="email" placeholder="Enter your email..." />

          {/* Subject */}
          <ContactP>Subject</ContactP>
          <ContactInput type="text" placeholder="Enter subject..." />

          {/* Message */}
          <ContactP>Message</ContactP>
          <ContactTextarea rows="5" placeholder="Enter your message..." />

          {/* Submit button */}
          <Button className="mt-4" type="submit">
            Send Message
          </Button>
        </form>
      </ContactWrapper>
    </ContactContainer>
  );
};

export default ContactUs;
