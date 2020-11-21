import { Chart } from 'chart.js';
import React, { Component, createRef, ReactElement } from 'react';

import { Theme } from '../../../../types';

interface IPallet {
  backgroundColor: {
    light: string;
    dark: string;
  };
  borderColor: {
    light: string;
    dark: string;
  };
  gridLines: {
    light: string;
    dark: string;
  };
}

const pallet: IPallet = {
  backgroundColor: {
    light: 'rgba(255, 197, 109, 0.4)',
    dark: 'rgba(54, 159, 255, 0.4)',
  },
  borderColor: {
    light: 'rgb(255, 197, 109)',
    dark: 'rgb(54, 159, 255)',
  },
  gridLines: {
    light: 'rgba(40, 40, 40, 0.1)',
    dark: 'rgba(250, 250, 250, 0.1)',
  },
};

interface IProps {
  theme: Theme;
}

interface IInstance {
  destroy: () => void;
}

type Data = number[];
type Labels = string[];

export default class ChartCompany extends Component<IProps> {
  canvasRef = createRef<HTMLCanvasElement>();
  instance: IInstance | null = null;

  data: Data = [110, 172, 207, 289, 365, 419];
  labels: Labels = ['2020', '2021', '2022', '2023', '2024', '2025'];

  componentDidMount(): void {
    this.ctreate();
  }

  componentDidUpdate(prevProps: IProps): void {
    if (prevProps.theme === this.props.theme) return;
    this.ctreate();
  }

  ctreate = (): void => {
    if (!this.canvasRef.current) return;
    const ctx = this.canvasRef.current.getContext('2d');

    if (this.instance) this.instance.destroy();
    if (!ctx) return;

    const { theme } = this.props;
    const instance = new Chart(ctx, {
      type: 'bar',
      data: {
        datasets: [
          {
            backgroundColor: pallet.backgroundColor[theme],
            borderColor: pallet.borderColor[theme],
            borderWidth: 1,
            data: this.data,
          },
        ],
      },
      options: {
        maintainAspectRatio: false,
        legend: {
          display: false,
        },
        tooltips: {
          xPadding: 15,
          yPadding: 15,
          callbacks: {
            title(item) {
              return `YEAR: ${item[0].label}`;
            },
            label(item) {
              return ` The increase in the efficiency of your company - ${item.value}`;
            },
          },
        },
        scales: {
          yAxes: [
            {
              gridLines: {
                color: pallet.gridLines[theme],
              },
            },
          ],
          xAxes: [
            {
              gridLines: {
                color: pallet.gridLines[theme],
              },
              type: 'category',
              stacked: true,
              labels: this.labels,
            },
          ],
        },
      },
    });

    this.instance = instance;
  };

  render(): ReactElement {
    return <canvas ref={this.canvasRef} height={450} />;
  }
}
