import css from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  // const { good, neutral, bad } = options;
  return (
    <div>
      <h4 className={css.title}>Please leave feedback</h4>
      <div className={css.buttonBox}>
        <button
          type="button"
          className={css.feedbackBtn}
          name="good"
          onClick={onLeaveFeedback}
        >
          Good
        </button>
        <button
          type="button"
          className={css.feedbackBtn}
          name="neutral"
          onClick={onLeaveFeedback}
        >
          Neutral
        </button>
        <button
          type="button"
          className={css.feedbackBtn}
          name="bad"
          onClick={onLeaveFeedback}
        >
          Bad
        </button>
      </div>
    </div>
  );
};
