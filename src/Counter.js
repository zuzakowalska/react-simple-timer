import React, { Component } from 'react';
import './Counter.css';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { from: 10, to: 0}
  }

  countdown() {
    if (this.state.from > this.state.to) {
      this.setState((prevState, props) => ({
      from: prevState.from - 1
    }));
    }
    //  else {
    //   onSuccess();
    // }
  }

  // onSuccess() {

  // }

  componentDidMount() {
    setInterval(
      () => this.countdown(),
    1000)
  }

  render() {
    return(
      <div class="counter">
        <h1>Counter: { this.state.from }</h1>
      </div>
    )
  }

}
export default Counter;