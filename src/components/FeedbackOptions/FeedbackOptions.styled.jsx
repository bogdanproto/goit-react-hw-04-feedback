import styled from 'styled-components';

export const ButtonBox = styled.div`
  display: flex;
  gap: 8px;
`;

export const Button = styled.button`
  min-width: 64px;
  padding: 8px 16px;

  text-transform: capitalize;

  background-color: #fbf9f9;
  border-radius: 5px;
  cursor: pointer;
  box-shadow: inset 2px 2px 3px rgba(255, 255, 255, 0.6),
    inset -2px -2px 3px rgba(0, 0, 0, 0.6);
`;
