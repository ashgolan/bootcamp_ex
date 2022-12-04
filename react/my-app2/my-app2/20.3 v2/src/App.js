import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";
// ============================

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seconds: "",
      minutes: "",
      hours: "",
    };
  }
  setTime(e) {
    console.log(e);
    switch (e.target.id) {
      case "seconds":
        this.setState({
          seconds: e.target.value,
          minutes: e.target.value / 60,
          hours: e.target.value / 3600,
        });
        break;
      case "minutes":
        this.setState({
          seconds: e.target.value * 60,
          minutes: e.target.value,
          hours: e.target.value / 60,
        });
        break;
      case "hours":
        this.setState({
          seconds: e.target.value * 3600,
          minutes: e.target.value * 60,
          hours: e.target.value,
        });
        break;

      default:
        break;
    }
  }
  render() {
    return (
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <label htmlFor="seconds">Seconds</label>
        <input
          id="seconds"
          type="text"
          onChange={(e) => {
            this.setTime(e);
          }}
          value={this.state.seconds}
        />
        <label htmlFor="minutes">Minutes</label>
        <input
          id="minutes"
          type="text"
          onChange={(e) => {
            this.setTime(e);
          }}
          value={this.state.minutes}
        />
        <label htmlFor="hours">Hours</label>
        <input
          id="hours"
          type="text"
          onChange={(e) => {
            this.setTime(e);
          }}
          value={this.state.hours}
        />
      </div>
    );
  }
}

export default App;
