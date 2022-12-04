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
    const time = e.target.value;
    switch (e.target.id) {
      case "seconds":
        this.setState({
          seconds: time,
          minutes: time / 60,
          hours: time / 3600,
        });
        break;
      case "minutes":
        this.setState({
          seconds: time * 60,
          minutes: time,
          hours: time / 60,
        });
        break;
      case "hours":
        this.setState({
          seconds: time * 3600,
          minutes: time * 60,
          hours: time,
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
        <div className="container">
          <div className="row">
            <label htmlFor="seconds">Seconds</label>
            <input
              id="seconds"
              type="number"
              onChange={(e) => {
                this.setTime(e);
              }}
              value={this.state.seconds}
            />
          </div>
          <div className="row">
            <label htmlFor="minutes">Minutes</label>
            <input
              id="minutes"
              type="number"
              onChange={(e) => {
                this.setTime(e);
              }}
              value={this.state.minutes}
            />
          </div>
          <div className="row">
            <label htmlFor="hours">Hours</label>
            <input
              id="hours"
              type="number"
              onChange={(e) => {
                this.setTime(e);
              }}
              value={this.state.hours}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
