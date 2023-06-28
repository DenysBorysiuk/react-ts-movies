interface IProps {
  timePeriod: string;
  setTimePeriod: (timePeriod: string) => void;
}

const Title: React.FC<IProps> = ({ timePeriod, setTimePeriod }) => {
  return (
    <div>
      <h1>Trending movies</h1>
      <button onClick={(event) => setTimePeriod("day")}>today</button> /{" "}
      <button onClick={(event) => setTimePeriod("week")}>week</button>
    </div>
  );
};

export default Title;
