import { Component, useState } from "react";

function Countries(props) {
  return (
    <div>
      {props.state.data.map((country) => {
        return <div key={country.name}>{country.name}</div>;
      })}
    </div>
  );
}

function Search(props) {
  const searching = function (e) {
    console.log(props);
    const filtered = props.state.data.filter((country) => {
      return country.name.includes(e.target.value);
    });
    console.log(filtered);
    props.setState({ data: filtered });
  };
  return (
    <div>
      <input onChange={searching} type="text" />
    </div>
  );
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }
  async componentDidMount() {
    if (this.state.data.length === 0) {
      const res = await fetch("https://restcountries.com/v2/all");
      const data = await res.json();
      this.setState({ data: data });
    }
  }

  render() {
    return (
      <div>
        <Search data={this.state.data} setState={this.setState}></Search>
        <Countries data={this.state.data} />
      </div>
    );
  }
}
export default App;
