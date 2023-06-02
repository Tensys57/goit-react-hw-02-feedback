import PropTypes from 'prop-types';
import css from './Notification.module.css';

export const Notification = ({ message }) => (
  <p className={css.statTitle}>{message}</p>
);

Notification.propType = {
  message: PropTypes.string.isRequired,
};
