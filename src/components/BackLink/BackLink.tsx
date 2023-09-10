import { HiArrowLeft } from 'react-icons/hi';
import { StyledLink } from './BackLink.styled';

type Props = {
  to: string;
  children: React.ReactNode;
};

const BackLink = ({ to, children }: Props) => {
  return (
    <StyledLink to={to}>
      <HiArrowLeft size="24" />
      {children}
    </StyledLink>
  );
};

export default BackLink;
