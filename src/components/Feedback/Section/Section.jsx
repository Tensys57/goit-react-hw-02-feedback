import css from './Section.module.css';
// import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
// import { Statistics } from './Statistics/Statistics';

export const Section = ({ title, children }) => (
  <>
    <h4 className={css.title}>{title}</h4>
    {children}
  </>
);
