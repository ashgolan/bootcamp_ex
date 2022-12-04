import React, { Component } from "react";
import "./App.css";

export default class Box extends Component {
  constructor(props) {
    super(props);
    this.state = { width: 0, move: "" };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ width: this.props.width, move: "move" });
    }, 1000);
  }
  render() {
    return (
      <div
        style={{ width: this.state.width }}
        className={this.state.move}
      ></div>
    );
  }
}
