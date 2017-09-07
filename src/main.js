import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './Counter';
import SimpleLineChart from './simpleline'




document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(
    React.createElement(Counter),
    document.getElementById('mount')
  );
  ReactDOM.render(
  <SimpleLineChart />,
  document.getElementById('container')
);
});