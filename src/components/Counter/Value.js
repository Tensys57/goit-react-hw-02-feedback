import React from 'react';

import css from './Counter.module.css';

const Value = ({ value }) => (
  <span className={css.counter__value}>{value}</span>
);

export default Value;
