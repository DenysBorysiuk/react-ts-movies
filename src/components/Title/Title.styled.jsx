import styled from "@emotion/styled";

export const Button = styled.button`
  display: inline-block;
  padding: 8px 16px;
  border-radius: 4px;
  border: none;
  background-color: transparent;
  color: black;
  font-weight: 500;
  text-transform: uppercase;
  text-decoration: underline;
  cursor: pointer;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    color: orangered;
  }
`;
