import React from 'react';
import FusionCharts from 'fusioncharts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.candy';
import Column2D from 'fusioncharts/fusioncharts.charts';
import ReactFC from 'react-fusioncharts';

ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme);

const dataSource = {
  chart: {
    caption: 'The increase in the efficiency of your company after you hire me',
    xaxisname: 'Years',
    yaxisname: '%',
    numbersuffix: '%',
    theme: 'candy',
  },
  data: [
    {
      label: '2020',
      value: '110',
    },
    {
      label: '2021',
      value: '162',
    },
    {
      label: '2022',
      value: '201',
    },
    {
      label: '2023',
      value: '279',
    },
    {
      label: '2024',
      value: '344',
    },
    {
      label: '2025',
      value: '403',
    },
  ],
};

type Props = {};

const ChartCompany: React.FC<Props> = () => (
  <ReactFC
    type="column2d"
    width="100%"
    height="500"
    dataFormat="JSON"
    dataSource={dataSource}
  />
);

export default ChartCompany;
