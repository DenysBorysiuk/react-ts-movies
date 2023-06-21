import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Container, Header, Link } from "./SharedLayout.styled";
import { Toaster } from "react-hot-toast";

export const SharedLayout = () => {
  return (
    <Container>
      <Toaster reverseOrder={false} />
      <Header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
        </nav>
      </Header>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </Container>
  );
};
