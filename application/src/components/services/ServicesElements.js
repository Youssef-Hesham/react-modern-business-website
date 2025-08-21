import styled from "styled-components";

export const ServicesContainer = styled.div`
  min-height: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #010606;
  padding: 50px 20px; /* ✅ reduced side padding to avoid overflow */

  @media screen and (max-width: 768px) {
    min-height: 1100px;
  }

  @media screen and (max-width: 480px) {
    min-height: 1300px;
  }
`;

export const ServicesWrapper = styled.div`
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: stretch;
  gap: 20px; /* ✅ replaced grid-gap with gap */
  padding: 0; /* ✅ padding handled by container */

  @media screen and (max-width: 1000px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const ServicesCard = styled.div`
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  max-height: 400px;
  padding: 30px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.2);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
  }
`;

export const ServicesIcon = styled.img`
  height: 160px;
  width: 160px;
  margin-bottom: 40px;
`;

export const ServicesH1 = styled.h1`
  font-size: 2.5rem;
  color: #fff;
  margin-bottom: 64px;
  text-align: center; /* ✅ center title */

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const ServicesH2 = styled.h2`
  font-size: 1.2rem;
  margin-bottom: 10px;
  font-weight: 900;
  text-align: center; /* ✅ center card headings */
`;

export const ServicesP = styled.p`
  font-size: 1rem;
  text-align: center;
`;
