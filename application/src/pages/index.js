import React, { useState } from "react";
import HeroSection from "../components/heroSection";
import InfoSection from "../components/infoSection";
import { Navbar } from "./../components/navbar";
import { Sidebar } from "./../components/sidebar";
import Image5 from "../images/undraw_brainstorming_gny9.svg";
import Image1 from "../images/design-notes.svg";
import Image2 from "../images/space.svg";
import InfoSectionLight from "../components/infoSectionLight";
import Services from "../components/services";
import Footer from "../components/footer";
import ContactUs from "../components/contactUs"; // ✅ Import your form
import FAQSection from "../components/faqSection"; // ✅ Import FAQ

export const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />

      {/* About Us */}
      <InfoSection
        image={Image1}
        id="about"
        subtitle="Who We Are"
        title="About Us"
        text={
          <>
            A <strong>Saudi-based</strong>, experienced{" "}
            <strong>international</strong> team with a{" "}
            <strong>comprehensive</strong> project portfolio, we are{" "}
            <strong>experts</strong> in transforming complex systems into{" "}
            <strong>intuitive workflows</strong> that keep your business{" "}
            <strong>efficient</strong>, driven by the belief that software
            should <strong>simplify</strong>, not complicate.
          </>
        }
      />

      {/* Discover Section */}
      <InfoSectionLight
        image={Image2}
        id="discover"
        subtitle="Diverse Expertise"
        title="Industries We Support"
        text={
          <>
            <p>
              We work with a wide range of businesses, from fast-growing startups to
              established enterprises. Our expertise spans:
            </p>
            <ul style={{ listStyle: "disc", paddingLeft: "20px" }}>
              <li>Retail & eCommerce</li>
              <li>Professional Services</li>
              <li>Logistics & Supply Chain</li>
              <li>Financial Services</li>
              <li>Healthcare & SaaS</li>
            </ul>
            <p>
              No matter your industry, we make complex systems simple and effective.
            </p>
          </>
        }
        btnText="Explore"
      />

      <Services />

      {/* Why Choose Us Section */}
      <InfoSectionLight
        image={Image5}
        id="whyus"
        subtitle="Trusted By Businesses"
        title="Why Choose Us"
        text={
          <>
            <ul style={{ listStyle: "disc", paddingLeft: "20px" }}>
              <li>
                <strong>Expert Team –</strong> International professionals with
                experience in multiple platforms and technologies.
              </li>
              <li>
                <strong>Proven Results –</strong> A portfolio of successful
                integrations and web projects that improved efficiency and
                growth.
              </li>
              <li>
                <strong>End-to-End Service –</strong> From planning to execution
                to ongoing support, we handle the technical work so your team
                can focus on what matters.
              </li>
            </ul>
          </>
        }
      />

      {/* ✅ FAQ Section */}
      <FAQSection />

      {/* ✅ Contact Us Form before Footer */}
      <ContactUs />

      <Footer />
    </>
  );
};

export default Home;
