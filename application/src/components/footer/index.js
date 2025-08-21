import React from "react";
import {
  FooterContainer,
  FooterH2,
  FooterLink,
  FooterWrapper,
} from "./FooterElements";
import "./../../App.css";
import { FaPhoneAlt, FaWhatsapp, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrapper className="container py-5">
        <div className="row gx-5 px-4 gy-4">
          <div className="col-lg-12 text-center">  {/* ✅ full width + centered */}
            <FooterH2>Contact Us</FooterH2>

            <div className="d-flex flex-column align-items-center">
              <FooterLink href="tel:+966537028064">
                <FaPhoneAlt /> +966 53 702 8064
              </FooterLink>

              <FooterLink
                href="https://wa.me/966537028064"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp /> WhatsApp
              </FooterLink>

              <FooterLink
                href="https://www.linkedin.com/company/lumra-labs/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin /> LinkedIn
              </FooterLink>

              <FooterLink href="mailto:info@lumralabs.com">
                <FaEnvelope /> info@lumralabs.com
              </FooterLink>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-12 mt-5 text-center">
            <h1 className="logo-text gray-text">- Lumra Labs -</h1>
          </div>
        </div>
      </FooterWrapper>
    </FooterContainer>
  );
};

export default Footer;
