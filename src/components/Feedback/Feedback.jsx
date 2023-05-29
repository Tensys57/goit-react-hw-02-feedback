import React, { Component } from 'react';
import PropTypes from 'prop-types';

import css from './Feedback.module.css';

export class Feedback extends Component {
  static defaultState = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onClickHandler = event => {
    this.setState(({} = event.target.value));
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <>
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
        <h4 className={css.title}>Statistics</h4>
        <p className={css.statTitle}>Good: {good}</p>
        <p className={css.statTitle}>Neutral: {neutral}</p>
        <p className={css.statTitle}>Bad: {bad}</p>
      </>
    );
  }
}
