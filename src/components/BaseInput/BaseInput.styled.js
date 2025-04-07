import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f3f4f6;
`;


export const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 12px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 16px;
  background-color: white;
  outline: none;
  &:focus {
    border-color: #3b82f6;
    box-shadow: 0 0 4px #3b82f6;
  }
`;

export const Button = styled.button`
  width: 100%;
  background-color: #565EEF;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;
  &:hover {
    background-color: #2563eb;
  }
`;

export const Text = styled.p`
  text-align: center;
  font-size: 14px;
  color: #6b7280;
  margin-top: 12px;
`;

