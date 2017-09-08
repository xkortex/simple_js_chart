import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './Counter';
import SimpleLineChart from './simpleline'
import XileLineChart from './xile_chart2'




document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(
    React.createElement(Counter),
    document.getElementById('mount')
  );
  ReactDOM.render(
    React.createElement(XileLineChart),
    document.getElementById('container')
);
});