import React, { Component } from 'react';

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
    
  }

  componentDidMount() {
    setInterval(
      () => this.countdown(),
    1000)
  }

  render() {
    return(
      <div>
        Counter: { this.state.from }
      </div>
    )
  }

}
export default Counter;