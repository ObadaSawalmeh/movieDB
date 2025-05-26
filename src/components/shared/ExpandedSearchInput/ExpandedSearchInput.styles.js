import styled from 'styled-components';

export const SearchContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

export const SearchWrapper = styled.div`
  border-bottom: .0625rem solid #333;
  height:3rem;
  position: fixed;
  top: 4rem;
  left: 0;
  right: 0;
  z-index: 1000;
  background: white;
  color: black;
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  max-width: 87.5rem;
  margin: 0 auto;
  form {
    flex: 1;
    display: flex;
  }

  @media (max-width: 76.5rem) {
    padding: 1rem;
  }
`;

export const SearchInputField = styled.input`
  width: 100%;
  padding: 0.75rem 1rem;
  background-color: rgba(255, 255, 255, 0.1);
  border: .125rem solid rgba(255, 255, 255, 0.2);
  color: #acacac;
  border-radius: 0.5rem;
  font-size: 1rem;
  outline: none;
  transition: all 0.3s ease;

  &::placeholder {
    color: rgba(0, 0, 0, 0.7);
    font-style: italic;
  }

  &:focus {
    border-color: rgba(255, 255, 255, 0.5);
    background-color: rgba(255, 255, 255, 0.15);
    box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.1);
  }

  @media (max-width: 76.5rem) {
    font-size: 0.9rem;
    padding: 0.6rem 0.8rem;
  }
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  color: black;
  font-size: 2rem;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 50%;
  width: 2rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 76.5rem) {
    width: 2rem;
    height: 2rem;
    font-size: 1.5rem;
  }
`;