import styled from "@emotion/styled";

interface IBtn {
  active?: boolean;
}

export const Button = styled.button<IBtn>`
  display: inline-block;
  padding: 8px 16px;
  border-radius: 4px;
  border: none;
  background-color: transparent;
  color: ${(props) => (props.active ? "orangered" : "balck")};
  font-weight: 500;
  text-transform: uppercase;
  text-decoration: underline;
  cursor: pointer;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    color: orangered;
  }
`;
