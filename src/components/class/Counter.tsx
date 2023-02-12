import { Component } from "react";

type CounterProps = {
  message: string;
};

type CounterState = {
  count: number;
};

class Counter extends Component<CounterProps, CounterState> {
  state = {
    count: 0,
  };

  handleClick = (amt: number) => {
    this.setState((prevState) => ({
      count: prevState.count + amt,
    }));
  };
  render() {
    return (
      <div>
        <button onClick={() => this.handleClick(20)}>Increment</button>
        {this.props.message} {this.state.count}
      </div>
    );
  }
}

export default Counter;
