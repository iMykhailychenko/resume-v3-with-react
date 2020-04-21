import React, { Component } from 'react';
import FusionCharts from 'fusioncharts';
import TimeSeries from 'fusioncharts/fusioncharts.timeseries';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.candy';
import ReactFC from 'react-fusioncharts';

// data for chart
import schema from './data/schema';
import data from './data/data';

ReactFC.fcRoot(FusionCharts, TimeSeries, FusionTheme);

const fusionTable = new FusionCharts.DataStore().createDataTable(data, schema);

const dataSource: object = {
  chart: {
    theme: 'candy',
  },
  caption: {
    text: 'Effectiveness Analysis',
  },
  subcaption: {
    text: 'Effectiveness',
  },
  series: 'Type',
  yaxis: [
    {
      plot: 'Effectiveness Value',
      title: 'Effectiveness Value',
    },
  ],
  data: fusionTable,
};

export default class ChartEffectiveness extends Component {
  state = {
    type: 'timeseries',
    renderAt: 'container',
    width: '100%',
    height: '600',
    dataSource,
  };

  render() {
    return <ReactFC {...this.state} />;
  }
}
