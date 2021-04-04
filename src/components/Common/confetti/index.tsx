import React, { Component, ReactElement } from 'react';
import Confetti from 'react-confetti';
import ReactDOM from 'react-dom';

interface IState {
    party: boolean;
    size: {
        y: number;
        x: number;
    };
}

class ConfettiWrp extends Component<unknown, IState> {
    state = {
        party: true,
        size: {
            y: window.innerHeight,
            x: window.innerWidth - 20,
        },
    };

    componentDidMount(): void {
        window.addEventListener('resize', this.resize);

        setTimeout(() => {
            this.close();
        }, 3000);
    }

    componentWillUnmount(): void {
        window.removeEventListener('resize', this.resize);
    }

    close = (): void => {
        this.setState({ party: false });
    };

    resize = (): void => {
        this.setState({ size: { y: window.innerHeight, x: window.innerWidth - 20 } });
    };

    render(): ReactElement {
        return ReactDOM.createPortal(
            <Confetti
                style={{ position: 'fixed', top: 0, left: 0, zIndex: 100000, width: '100%', pointerEvents: 'none' }}
                numberOfPieces={this.state.party ? 200 : 0}
                gravity={0.3}
                onConfettiComplete={confetti => {
                    this.close();
                    confetti?.reset();
                }}
                width={this.state.size.x}
                height={this.state.size.y}
            />,
            document.body,
        );
    }
}

export default ConfettiWrp;
