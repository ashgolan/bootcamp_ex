import { Component } from "react";

const Search = (props) => {
  const searching = (e) => {
    const filtered = props.state.data.filter((country) => {
      return country.name.includes(e.target.value);
    });
    props.setState({ data: filtered });
  };
  return (
    <div>
      <input onKeyUp={searching} type="text" />
    </div>
  );
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      countries: [],
    };
  }
  async componentDidMount() {
    if (this.state.data.length === 0) {
      const res = await fetch("https://restcountries.com/v2/all");
      const data = await res.json();
      this.setState({ countries: data });
      this.setState({ data: data });
    }
  }
  componentDidUpdate() {
    this.setState({ data: this.state.countries });
  }
  render() {
    return (
      <div>
        <Search state={this.state} setState={this.setState.bind(this)}></Search>
        <div>
          {this.state.countries.map((country) => {
            return <div key={country.name}>{country.name}</div>;
          })}
        </div>{" "}
      </div>
    );
  }
}
export default App;
