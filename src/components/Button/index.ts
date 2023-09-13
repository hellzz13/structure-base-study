import styled from "styled-components";

export const Button = styled.button`
  border: none;
  background-color: ${props => props.theme.accent};
  color: ${props => props.theme.text};
  height: 30px;
  cursor: pointer;
  border-radius: 8px;
`