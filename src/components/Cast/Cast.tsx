import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getMovieCredits } from "../../services/api";
import { List, Item, Thumb, Wrapper, Title, SubTitle } from "./Cast.styled";
import toast from "react-hot-toast";

const Cast: React.FC = () => {
  const [cast, setCast] = useState<{cast_id: string, name: string, character: string, profile_path: string  }[]>([]);
  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) return;
    const controller = new AbortController();
    const signal = controller.signal;
    const fetchData = async () => {
      try {
        const credits = await getMovieCredits(movieId, signal);
        setCast(credits.cast);
      } catch (error: any) {
        if (error.name === "CanceledError") return;
        toast.error("Oops, something went wrong");
      }
    };

    fetchData();

    return () => {
      controller.abort();
    };
  }, [movieId]);

  return cast?.length > 0 ? (
    <List>
      {cast.map(({ cast_id , name, character, profile_path }) => (
        <Item key={cast_id}>
          <Thumb>
            <img
              src={
                profile_path
                  ? `https://image.tmdb.org/t/p/w500${profile_path}`
                  : `https://via.placeholder.com/150x150.png?text=No+photo`
              }
              alt={name}
            />
          </Thumb>
          <Wrapper>
            <Title>{name}</Title>
            <SubTitle>{character}</SubTitle>
          </Wrapper>
        </Item>
      ))}
    </List>
  ) : (
    <p>We don`t have cast for this movie</p>
  );
};

export default Cast;


