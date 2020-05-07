import React, { Component } from 'react';
import styles from './Clock.module.css';

type Props = {};

interface State {
  hours: string;
  minutes: string;
}

// convert time to correct form
const hours = (): string => String(new Date().getHours()).padStart(2, '0');
const minutes = (): string => String(new Date().getMinutes()).padStart(2, '0');

export default class Clock extends Component<Props, State> {
  intervalID!: any;

  state = {
    hours: hours(),
    minutes: minutes(),
  };

  componentDidMount() {
    // we set timeout on 10s to minimise influence on performance
    // therefore, inaccuracies may occur but performance is more important
    this.intervalID = setInterval(() => this.tick(), 10000);
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
    return (
      <time className={styles.time}>
        {hours}:{minutes}
      </time>
    );
  }
}
