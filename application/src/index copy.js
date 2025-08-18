import React from "react";
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP
} from "./ServicesElements";
import Icon1 from "../../images/space.svg";
import Icon2 from "../../images/online.svg";
import Icon3 from "../../images/real-time.svg";

const Services = () => {
  return (
    <ServicesContainer id="services">
      <ServicesH1>Our Services</ServicesH1>
      <ServicesP
        style={{
          textAlign: "center",
          maxWidth: "800px",
          margin: "0 auto 40px",
          color: "#fff", // white text
          fontSize: "18px",
          lineHeight: "1.6"
        }}
      >
        We manage all your technical integrations from start to finish, recommending and
        implementing the optimal setups to ensure your systems work together efficiently,
        enhancing your team's productivity and your business's performance.
      </ServicesP>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesH2>CRM Integration</ServicesH2>
          <ServicesP>
            Streamline access to customer data across your tools. Your team works smarter,
            responds faster, and achieves more.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesH2>ERP Integration</ServicesH2>
          <ServicesP>
            Synchronizing back-end systems such as inventory, orders, accounting. So everything
            runs smoothly!
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2>Web Development</ServicesH2>
          <ServicesP>
            Designing easy-to-use websites or portals that your team or customers will love.
          </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
