import React, { Component } from 'react';

type Props = {};

interface State {
  hours: number;
  minutes: number;
}

export default class Clock extends Component<Props, State> {
  intervalID!: any;

  state = {
    hours: new Date().getHours(),
    minutes: new Date().getMinutes(),
  };

  componentDidMount() {
    this.intervalID = setInterval(() => this.tick(), 30000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  tick() {
    this.setState({
      hours: new Date().getHours(),
      minutes: new Date().getMinutes(),
    });
  }
  render() {
    const { hours, minutes } = this.state;
    return <p className="header__time">{hours}:{minutes}</p>;
  }
}
