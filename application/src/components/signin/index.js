import React from "react";
import {
  SigninContainer,
  SigninWrapper,
  SigninP,
  SigninInput,
} from "./SigninElements";
import { Button } from "../ButtonElements";

const ContactUs = () => {
  return (
    <SigninContainer>
      <SigninWrapper className="py-5 px-5">
        <div className="my-auto">
          <h3 className="center-align mb-5">Contact Us</h3>
          <form>
            {/* Name */}
            <SigninP>Name</SigninP>
            <SigninInput type="text" placeholder="Enter your name..." />

            {/* Email */}
            <SigninP>Email</SigninP>
            <SigninInput type="email" placeholder="Enter your email..." />

            {/* Subject */}
            <SigninP>Subject</SigninP>
            <SigninInput type="text" placeholder="Enter subject..." />

            {/* Message */}
            <SigninP>Message</SigninP>
            <SigninInput
              as="textarea"
              rows="5"
              placeholder="Enter your message..."
            />

            {/* Submit button */}
            <Button className="mt-5 mb-3" type="submit">
              Send Message
            </Button>
          </form>
        </div>
      </SigninWrapper>
    </SigninContainer>
  );
};

export default ContactUs;

