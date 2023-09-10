import { Button } from './Title.styled';

type Props = {
  timePeriod: string;
  setTimePeriod: (timePeriod: string) => void;
};

const Title = ({ timePeriod, setTimePeriod }: Props) => {
  return (
    <div>
      <h1>Trending movies</h1>
      <Button onClick={() => setTimePeriod('day')} active={timePeriod === 'day'}>
        today
      </Button>
      /
      <Button onClick={() => setTimePeriod('week')} active={timePeriod === 'week'}>
        week
      </Button>
    </div>
  );
};

export default Title;
