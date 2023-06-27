import { HiArrowLeft } from "react-icons/hi";
import { StyledLink } from "./BackLink.styled";

interface IProps {
  to: string;
  children: React.ReactNode;
}

const BackLink: React.FC<IProps> = ({ to, children }) => {

  return (
    <StyledLink to={to}>
      <HiArrowLeft size="24" />
      {children}
    </StyledLink>
  );
};


export default BackLink;

