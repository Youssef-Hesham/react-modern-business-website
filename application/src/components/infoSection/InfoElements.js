import styled from "styled-components";

export const InfoContainer = styled.div`
  width: 100%;
  min-height: 700px;
  display: flex;
  justify-content: center;
  padding: 0 20px; /* ✅ keeps safe padding on mobile */
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column; /* ✅ stack on small screens */
  padding: 80px 0;
  width: 100%;
  max-width: 1200px; /* ✅ no fixed width */
  justify-content: center;
  align-items: center;
  text-align: center;

  @media screen and (min-width: 768px) {
    flex-direction: row; /* ✅ side-by-side on larger screens */
    text-align: left;
  }
`;

export const Title = styled.h1`
  font-weight: 900;
  font-size: 3rem;

  @media screen and (max-width: 480px) {
    font-size: 3rem; /* ✅ smaller on mobile */
  }
`;

export const Subtitle = styled.h5`
  color: #B05FFD;
  font-weight: 500;
  text-transform: uppercase;
  margin-bottom: 10px;
  font-size: 1.1rem;

  @media screen and (max-width: 480px) {
    font-size: 1rem;
  }
`;
