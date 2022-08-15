import React, { Component } from "react";

const App = () => {
  return <Counter></Counter>;
};

class Counter extends Component {
  constructor(props) {
    super(props);
    console.log(this.state);
    this.state = { count: 5 };
  }

  addHandle = () => {
    this.setState({ count: this.state.count + 1 });
  };

  descHandle = () => {
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    return (
      <React.Fragment>
        <div>Counter: {this.state.count}</div>
        <button onClick={this.addHandle}>追加</button>
        <button onClick={this.descHandle}>減少</button>
      </React.Fragment>
    );
  }
}

export default App;
