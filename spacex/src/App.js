import { Component } from "react";
import { Modal } from "./components/Modal";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      rockets: [],
    };
  }

  componentDidMount() {
    fetch("https://api.spacexdata.com/v4/rockets")
      .then((response) => response.json())
      .then((rockets) => this.setState({ rockets: rockets }));
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          {this.state.rockets.map((rocket) => (
            <Modal rocket={rocket} />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
