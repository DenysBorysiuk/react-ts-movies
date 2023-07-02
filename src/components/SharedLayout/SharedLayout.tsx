import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Container, Header, Link } from "./SharedLayout.styled";
import { Toaster } from "react-hot-toast";
import Loader from "../Loader/Loader";

export const SharedLayout: React.FC = () => {
  return (
    <Container>
      <Toaster reverseOrder={false} />
      <Header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/search">Search</Link>
          <Link to="/favorites">Favorites</Link>
        </nav>
      </Header>
      <Suspense
        fallback={
          <div>
            <Loader />
          </div>
        }
      >
        <Outlet />
      </Suspense>
    </Container>
  );
};
