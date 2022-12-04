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
  setTime(time) {
    console.log(this.state.seconds, this.state.minutes, this.state.hours);
    this.setState = console.log("value", time.target.value);
    // console.log("id", time.target.id);
  }
  render() {
    return (
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <label htmlFor="seconds">Seconds</label>
        <input
          id="seconds"
          type="text"
          onChange={(e) =>
            this.setState({
              seconds: e.target.value,
              minutes: e.target.value / 60,
              hours: e.target.value / 3600,
            })
          }
          value={this.state.seconds}
        />
        <label htmlFor="minutes">Minutes</label>
        <input
          id="minutes"
          type="text"
          onChange={(e) =>
            this.setState({
              seconds: e.target.value * 60,
              minutes: e.target.value,
              hours: e.target.value / 60,
            })
          }
          value={this.state.minutes}
        />
        <label htmlFor="hours">Hours</label>
        <input
          id="hours"
          type="text"
          onChange={(e) =>
            this.setState({
              seconds: e.target.value * 3600,
              minutes: e.target.value * 60,
              hours: e.target.value,
            })
          }
          value={this.state.hours}
        />
      </div>
    );
  }
}

// ============================
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//       </header>
//     </div>
//   );
// }

export default App;
