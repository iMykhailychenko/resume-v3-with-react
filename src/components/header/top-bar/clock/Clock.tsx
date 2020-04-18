import React, { Component } from 'react';
import styles from './Clock.module.css';

type Props = {};

interface State {
  hours: string;
  minutes: string;
}

const hours = (): string => String(new Date().getHours()).padStart(2, "0")
const minutes = (): string => String(new Date().getMinutes()).padStart(2, "0")

export default class Clock extends Component<Props, State> {
  intervalID!: any;

  state = {
    hours: hours(),
    minutes: minutes(),
  };

  componentDidMount() {
    this.intervalID = setInterval(() => this.tick(), 30000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  tick() {
    this.setState({
      hours: hours(),
      minutes: minutes(),
    });
  }
  render() {
    const { hours, minutes } = this.state;
    return <p className={styles.time}>{hours}:{minutes}</p>;
  }
}