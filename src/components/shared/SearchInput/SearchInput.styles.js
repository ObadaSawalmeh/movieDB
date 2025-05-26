import styled from 'styled-components';

export const InputContainer = styled.input`
  width: 100%;
  padding: 10px .75rem;
  border: .0625rem solid #dee2e6;
  border-radius: 6px;
  font-size: .875rem;
  color: #000;
  background-color: #ffffff;
  transition: all 0.2s ease;
  box-sizing: border-box;
  font-weight: 600;
  &::placeholder {
    color: #000;
  }

  &:focus {
    outline: none;
    border-color: #007bff;
    box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.1);
  }

  &:hover {
    border-color: #adb5bd;
  }
`;