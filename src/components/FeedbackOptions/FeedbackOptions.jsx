import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      <div className={css.buttonBox}>
        {options.map(option => (
          <button
            key={option}
            type="button"
            className={css.feedbackBtn}
            name={option}
            onClick={() => onLeaveFeedback(option)}
          >
            {`${option}`}
          </button>
        ))}
      </div>
    </div>
  );
};
FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
