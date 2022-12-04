import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      color: "black",
    };
  }

  clickHndler = (e) => {
    if (this.state.counter > -10 && this.state.counter < 10) {
      if (e.target.id === "plus") {
        this.setState((prev) => ({
          counter: this.state.counter + 1,
        }));
      } else {
        this.setState((prev) => ({
          counter: this.state.counter - 1,
        }));
      }
      if (this.state.counter === 0)
        this.setState((prev) => ({
          color: "black",
        }));
      else if (this.state.counter < 0)
        this.setState((prev) => ({
          color: "red",
        }));
      else
        this.setState((prev) => ({
          color: "green",
        }));
    } else {
      alert("out of range");
    }
  };
  render() {
    return (
      <div className="main-box">
        <button id="plus" onClick={(e) => this.clickHndler(e)}>
          +
        </button>
        <p style={{ color: this.state.color }}>{this.state.counter}</p>
        <button id="minus" onClick={(e) => this.clickHndler(e)}>
          -
        </button>
      </div>
    );
  }
}
export default Counter;
