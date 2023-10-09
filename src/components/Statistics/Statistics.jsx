import { StatisticsList } from './Statistics.styled';

export const Statistics = ({ stats, total, positivePercentage }) => {
  return (
    <StatisticsList>
      {Object.keys(stats).map(item => (
        <li key={item}>
          {item}: {stats[item]}
        </li>
      ))}
      <li>Total: {total}</li>
      <li>Positive feedBack: {positivePercentage}% </li>
    </StatisticsList>
  );
};
