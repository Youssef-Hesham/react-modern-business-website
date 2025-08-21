import styled from "styled-components";

export const InfoContainer = styled.div`
  width: 100%;
  min-height: 700px;
  display: flex;
  justify-content: center;
  overflow-x: hidden; /* ✅ prevents horizontal scroll */
`;

export const InfoWrapper = styled.div`
  display: flex;
  padding: 80px 20px; /* ✅ responsive horizontal padding */
  width: 100%;
  max-width: 1200px;  /* ✅ caps size but never forces overflow */
  justify-content: center;
  align-items: center;
  box-sizing: border-box; /* ✅ ensures padding stays inside width */
  flex-wrap: wrap; /* ✅ allows stacking on small screens */
`;

export const Title = styled.h1`
  font-weight: 900;
  font-size: 2.5rem;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 2rem; /* ✅ shrink for tablets */
  }

  @media screen and (max-width: 480px) {
    font-size: 1.6rem; /* ✅ shrink for phones */
  }
`;

export const Subtitle = styled.h5`
  color: #B05FFD;
  font-weight: 500;
  text-transform: uppercase;
  margin-bottom: 20px;
  text-align: center;
  letter-spacing: 1px;

  @media screen and (max-width: 480px) {
    font-size: 0.9rem; /* ✅ smaller on phones */
  }
`;
