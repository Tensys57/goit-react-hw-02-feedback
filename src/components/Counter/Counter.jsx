import React from 'react';
import Controls from './Controls';
import Value from './Value';

import css from './Counter.module.css';

export default class Counter extends React.Component {
  static defaultProps = {
    initialValue: 0,
  };
  static propTypes = {
    // ..
  };

  state = {
    value: this.props.initialValue,
  };

  handleIncrement = () => {
    this.setState(prevState => ({
      value: prevState.value + 1,
    }));
  };

  handleDecriment = () => {
    this.setState(prevState => ({ value: prevState.value - 1 }));
  };

  // constructor() {
  //   super();
  //   this.state = {
  //     value: 10,
  //   };
  // }

  // handleIncrement = event => {
  //   console.log('Click to increase');
  //   const { target } = event;
  //   setTimeout(() => {
  //     console.log(target);
  //   }, 1000);
  // };

  // handleDecriment = () => {
  //   console.log('Click to decrease');
  //   console.log(this);
  // };

  render() {
    return (
      <div className={css.counter}>
        <Value value={this.state.value} />
        {/* <span className={css.counter__value}>{this.state.value}</span> */}

        <Controls
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecriment}
        />
        {/* <div className={css.counter__controls}>
          <button type="button" onClick={this.handleIncrement}>
            Увеличить на 1
          </button>
          <button type="button" onClick={this.handleDecriment}>
            Уменьшить на 1
          </button>
        </div> */}
      </div>
    );
  }
}
