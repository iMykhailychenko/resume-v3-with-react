import React from 'react';
import FusionCharts from 'fusioncharts';
import Column2D from 'fusioncharts/fusioncharts.charts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.candy';
import ReactFC from 'react-fusioncharts';

import data from './data/data.json';

ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme);

const dataSource = {
  chart: {
    caption:
      'Comparison of my work efficiency and the work efficiency of other candidates',
    yaxisname: '% of efficiency',
    subcaption: '2020-2024',
    showhovereffect: '1',
    numbersuffix: '%',
    drawcrossline: '1',
    plottooltext: '<b>$dataValue</b> of efficiency were on $seriesName',
    theme: 'candy',
  },
  categories: [
    {
      category: [
        {
          label: '2020',
        },
        {
          label: '2021',
        },
        {
          label: '2022',
        },
        {
          label: '2023',
        },
        {
          label: '2024',
        },
      ],
    },
  ],
  dataset: [...data],
};

const ChartEffectiveness = () => (
  <ReactFC
    type="msline"
    width="100%"
    height="500"
    dataFormat="JSON"
    dataSource={dataSource}
  />
);

export default ChartEffectiveness;
