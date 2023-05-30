import css from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      <div className={css.buttonBox}>
        {options.map((option, index) => (
          <button
            key={index}
            type="button"
            className={css.feedbackBtn}
            name={option}
            onClick={onLeaveFeedback}
          >
            {`${option}`}
          </button>
        ))}
      </div>
    </div>
  );
};
