// src/components/contactUs/ContactElements.js
import styled from "styled-components";

export const ContactContainer = styled.div`
  padding: 100px 0;
  background: #f9f9f9; /* light gray background */
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContactWrapper = styled.div`
  background: #fff;
  padding: 40px;
  border-radius: 15px;
  max-width: 700px;
  width: 100%;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1); /* soft shadow */
`;

export const ContactP = styled.p`
  font-weight: 600;
  margin-bottom: 5px;
  color: #333; /* darker text for readability */
`;

export const ContactInput = styled.input`
  width: 100%;
  padding: 12px 14px;
  border-radius: 10px;
  border: 1px solid #ccc;
  margin-bottom: 25px;
  font-size: 16px;

  &:focus {
    border-color: #007bff; /* blue focus border */
    outline: none;
  }
`;

export const ContactTextarea = styled.textarea`
  width: 100%;
  padding: 12px 14px;
  border-radius: 10px;
  border: 1px solid #ccc;
  margin-bottom: 25px;
  font-size: 16px;
  resize: none;

  &:focus {
    border-color: #007bff;
    outline: none;
  }
`;
