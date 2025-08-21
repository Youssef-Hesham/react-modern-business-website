import styled from "styled-components";

export const ContactContainer = styled.div`
  padding: 100px 20px; /* ✅ add horizontal padding for mobile */
  background: #f9f9f9;
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
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);

  @media screen and (max-width: 480px) {
    padding: 20px; /* ✅ shrink padding on small screens */
  }
`;

export const ContactP = styled.p`
  font-weight: 600;
  margin-bottom: 5px;
  color: #333;
`;

export const ContactInput = styled.input`
  width: 100%;
  padding: 12px 14px;
  border-radius: 10px;
  border: 1px solid #ccc;
  margin-bottom: 25px;
  font-size: 16px;

  &:focus {
    border-color: #007bff;
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

export const ContactButton = styled.button`
  background: #007bff;
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  padding: 12px 24px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #0056b3;
  }
`;
