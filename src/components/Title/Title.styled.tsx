import styled from '@emotion/styled';

type BtnType = {
  active?: boolean;
};

export const Button = styled.button<BtnType>`
  display: inline-block;
  padding: 8px 16px;
  border-radius: 4px;
  border: none;
  background-color: transparent;
  color: ${props => (props.active ? 'orangered' : 'black')};
  font-weight: 500;
  text-transform: uppercase;
  text-decoration: underline;
  cursor: pointer;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    color: orangered;
  }
`;
