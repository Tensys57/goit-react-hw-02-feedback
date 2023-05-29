import React, { Component } from 'react';
import PropTypes from 'prop-types';

import css from './Feedback.module.css';

export class Feedback extends Component {
  // static defaultState = {
  //   good: 0,
  //   neutral: 0,
  //   bad: 0,
  // };

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onClickHandler = event => {
    const { name } = event.target;
    switch (name) {
      case 'good':
        this.setState(prevState => ({
          good: prevState.good + 1,
        }));
        break;
      case 'neutral':
        this.setState(prevState => ({ neutral: prevState.neutral + 1 }));
        break;
      case 'bad':
        this.setState(prevState => ({ bad: prevState.bad + 1 }));
        break;
      default:
        throw new Error('There is no feedback');
    }
  };
  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;

    const total = good + neutral + bad;
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = this.state;
    const positive =
      good + neutral + bad
        ? Math.round((good / (good + neutral + bad)) * 100)
        : 0;
    return positive;
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <div>
        <h4 className={css.title}>Please leave feedback</h4>
        <div className={css.buttonBox}>
          <button
            type="button"
            className={css.feedbackBtn}
            name="good"
            onClick={this.onClickHandler}
          >
            Good
          </button>
          <button
            type="button"
            className={css.feedbackBtn}
            name="neutral"
            onClick={this.onClickHandler}
          >
            Neutral
          </button>
          <button
            type="button"
            className={css.feedbackBtn}
            name="bad"
            onClick={this.onClickHandler}
          >
            Bad
          </button>
        </div>
        <div className={css.statBox}>
          <h4 className={css.title}>Statistics</h4>
          <p className={css.statTitle}>Good: {good}</p>
          <p className={css.statTitle}>Neutral: {neutral}</p>
          <p className={css.statTitle}>Bad: {bad}</p>
          <p className={css.statTitle}>Total: {this.countTotalFeedback()}</p>
          <p className={css.statTitle}>
            Positive feedback: {this.countPositiveFeedbackPercentage()}%
          </p>
        </div>
      </div>
    );
  }
}
