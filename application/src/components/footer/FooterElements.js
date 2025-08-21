import styled from "styled-components";

export const FooterContainer = styled.div`
  padding-top: 30px;
  padding-bottom: 15px;
  background: linear-gradient(#150b1f, #000);
`;

export const FooterWrapper = styled.div`
  max-width: 900px;
`;

export const FooterH2 = styled.h2`
  font-size: 1.3rem;
  color: white;
  font-weight: 500;
  margin-bottom: 30px;
`;

export const FooterLink = styled.a`
  font-size: 0.95rem;
  text-decoration: none;
  color: white;
  display: flex;              /* ✅ flexbox for icon + text */
  align-items: center;        /* ✅ vertical centering */
  margin-bottom: 12px;        /* ✅ spacing between links */
  transition: color 0.3s ease;

  svg {
    margin-right: 8px;        /* ✅ spacing between icon and text */
    font-size: 1rem;          /* ✅ keep icons proportional */
    flex-shrink: 0;
  }

  &:hover {
    color: #b05ffd;
  }
`;
