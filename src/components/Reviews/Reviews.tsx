import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from '../../services/api';
import toast from 'react-hot-toast';
import { Title, Review, Nickname } from './Reviews.styled';

type ReviewType = { id: string; author: string; content: string };

const Reviews = () => {
  const [reviews, setReviews] = useState<ReviewType[]>([]);
  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) return;
    const controller = new AbortController();
    const signal = controller.signal;
    const fetchData = async () => {
      try {
        const movieReviews = await getMovieReviews(movieId, signal);
        setReviews(movieReviews.results);
      } catch (error: any) {
        if (error.name === 'CanceledError') return;
        toast.error('Oops, something went wrong');
      }
    };

    fetchData();

    return () => {
      controller.abort();
    };
  }, [movieId]);

  return reviews?.length > 0 ? (
    <ul>
      {reviews.map(({ id, author, content }) => (
        <li key={id}>
          <Title>
            Author: <Nickname>{author}</Nickname>
          </Title>
          <Review>{content}</Review>
        </li>
      ))}
    </ul>
  ) : (
    <p>We don`t have reviews for this movie</p>
  );
};

export default Reviews;
