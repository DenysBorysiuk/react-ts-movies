import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Container, Header, Link } from "./SharedLayout.styled";
import { Toaster } from "react-hot-toast";

export const SharedLayout: React.FC = () => {
  return (
    <Container>
      <Toaster reverseOrder={false} />
      <Header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/search">Search</Link>
        </nav>
      </Header>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </Container>
  );
};
