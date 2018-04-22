import React, { Component } from 'react';
import './Counter.css';

class Counter extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      current: this.props.from
    }
    this.handleClick = this.handleClick.bind(this);
  }

  countdown() {
    if (this.state.current > this.props.to) {
      this.setState({
        current: this.state.current - 1
      })
    } else {
      this.reset();
    }
  }

  reset(props) {
    this.setState({
      current: this.props.from
    })
  }

  handleClick() {
    this.reset();
  }

  componentDidMount() {
    setInterval(
      () => this.countdown(),
      1000)
  }

  render(props) {
    return(
      <div className="counter">
        <h1 onClick={this.handleClick}>Counter: { this.state.current } </h1>
      </div>
    )
  }

}
export default Counter;