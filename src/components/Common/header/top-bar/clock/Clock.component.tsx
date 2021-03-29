import React, { Component, ReactElement } from 'react';

import css from './Clock.module.css';

interface State {
    hours: string;
    minutes: string;
}

// convert time to correct form
const hours = (): string => String(new Date().getHours()).padStart(2, '0');
const minutes = (): string => String(new Date().getMinutes()).padStart(2, '0');

export default class Clock extends Component<unknown, State> {
    intervalID!: NodeJS.Timeout;

    state = {
        hours: hours(),
        minutes: minutes(),
    };

    componentDidMount(): void {
        this.intervalID = setInterval(this.tick, 1000);
    }

    componentWillUnmount(): void {
        clearInterval(this.intervalID);
    }

    tick = (): void => {
        this.setState({
            hours: hours(),
            minutes: minutes(),
        });
    };

    render(): ReactElement {
        const { hours, minutes } = this.state;
        return (
            <time className={css.time}>
                {hours}:{minutes}
            </time>
        );
    }
}
