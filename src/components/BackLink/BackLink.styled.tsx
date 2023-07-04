import { Link } from "react-router-dom";
import styled from "@emotion/styled";

export const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 8px 0;
  margin-bottom: 30px;
  color: black;
  text-decoration: none;
  font-weight: 500;
  text-transform: uppercase;
  transition: color 0.3s ease-in-out;

  :hover {
    color: orangered;
  }
`;
