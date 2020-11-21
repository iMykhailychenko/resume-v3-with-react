import { Chart } from 'chart.js';
import React, { Component, createRef, ReactElement } from 'react';

import { Theme } from '../../../../types';

interface IPallet {
  main: string[];
  gridLines: {
    light: string;
    dark: string;
  };
}

const pallet: IPallet = {
  main: [
    'rgb(255, 197, 109)',
    'rgb(54, 159, 255)',
    'rgb(0,223,200)',
    'rgb(248,92,80)',
    'rgb(220,55,144)',
  ],
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

type Data = number[][];
type Labels = string[];

export default class ChartEffectiveness extends Component<IProps> {
  canvasRef = createRef<HTMLCanvasElement>();
  instance: IInstance | null = null;

  data: Data = [
    [82, 93, 98, 106, 132, 142],
    [16, 28, 34, 32, 20, 14],
    [20, 22, 27, 22, 23, 18],
    [12, 12, 14, 22, 17, 14],
    [72, 62, 54, 42, 37, 24],
  ];
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
      type: 'line',
      data: {
        datasets: this.data.map((item, index) => ({
          lineTension: 0,
          borderColor: pallet.main[index],
          backgroundColor: 'transparent',
          borderWidth: 1,
          pointBackgroundColor: pallet.main[index],
          pointBorderColor: pallet.main[index],
          pointBorderWidth: 2,
          pointHoverBorderWidth: 2,
          pointRadius: 6,
          pointHoverRadius: 14,
          data: item,
        })),
      },
      options: {
        maintainAspectRatio: false,
        legend: {
          display: false,
        },
        tooltips: {
          xPadding: 15,
          yPadding: 15,
          displayColors: false,
          callbacks: {
            title(item) {
              return `YEAR: ${item[0].label}`;
            },
            label(item) {
              return `The increase in the efficiency of your company - ${item.value}`;
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
