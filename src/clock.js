import React from "react";

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {time: new Date().toLocaleString()};
  }
  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  tick() {
    this.setState({
      time: new Date().toLocaleString()
    });
  }
  render() {
    return <div>{this.state.time}</div>;
  }
}

export default Clock;
