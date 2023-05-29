import css from './Statistics.module.css';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  if (good + neutral + bad !== 0) {
    return (
      <div className={css.statBox}>
        <h4 className={css.title}>Statistics</h4>
        <p className={css.statTitle}>Good: {good}</p>
        <p className={css.statTitle}>Neutral: {neutral}</p>
        <p className={css.statTitle}>Bad: {bad}</p>
        <p className={css.statTitle}>Total: {total()}</p>
        <p className={css.statTitle}>
          Positive feedback: {positivePercentage()}%
        </p>
      </div>
    );
  } else {
    return (
      <div className={css.statBox}>
        <h4 className={css.title}>Statistics</h4>
        <p className={css.statTitle}>There is no feedback</p>
      </div>
    );
  }
};
