import React from 'react';
import ReactDOM from 'react-dom';
import * as Recharts from 'recharts';
const {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} = Recharts;

let seriesNames = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];

function gen_data() {
  let new_data = seriesNames.map(function (item) {
    // let datum = {name: item, uv: Math.random() * 10, pv: Math.random() * 10,};
    let datum = {uv: Math.random() * 10, pv: Math.random() * 10,};

    // console.log('gen_data', datum);
    return datum
  });
  console.log('new series');
  // console.log(data);

  return new_data
}

function roll_data(chart_data) {
  let datum = {uv: Math.random() * 10, pv: Math.random() * 10,};
  chart_data.shift().push(datum);
  return chart_data;

}



const data = [
      {name: 'Page A', uv: 4000, pv: 2400, amt: 2400},
      {name: 'Page B', uv: 3000, pv: 1398, amt: 2210},
      {name: 'Page C', uv: 2000, pv: 9800, amt: 2290},
      {name: 'Page D', uv: 2780, pv: 3908, amt: 2000},
      {name: 'Page E', uv: 1890, pv: 4800, amt: 2181},
      {name: 'Page F', uv: 2390, pv: 3800, amt: 2500},
      {name: 'Page G', uv: 3490, pv: 4300, amt: 2100},
];

class SimpleLineChart extends React.Component {
    constructor() {
      console.log('just made a chart');
      super();
      this.chartData = gen_data();
      this.state = {
        photoAdded: false
      }
      this.togglePhoto = this.togglePhoto.bind(this); // why is javascript horrible.
  }
  // getInitialState() {
  //   return {
  //     text: "",
  //     photoAdded: false
  //   };
  // }
  handleChange(event) {
    this.setState({ text: event.target.value });
  }
  togglePhoto(event) {
    this.setState({ photoAdded: !this.state.photoAdded });
    this.new_chart();
    this.render();
  }
  setState(newState) {
      for (let key of Object.keys(newState)) {
        console.log(key, newState[key]);
        this.state[key] = newState[key];
      }
  }
  update_chart () {
      this.chartData = roll_data(this.chartData);
  }

  new_chart() {
      this.chartData = gen_data();
  }
	render () {
  	return (
  	  <div className="well clearfix">
        <LineChart width={600} height={300} data={gen_data()}
              margin={{top: 5, right: 30, left: 20, bottom: 5}}>
         <XAxis dataKey="name"/>
         <YAxis/>
         <CartesianGrid strokeDasharray="3 3"/>
         <Tooltip/>
         <Legend />
         <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{r: 8}}/>
         <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
          { console.log('I have no idea what I\'m doing') }
        </LineChart>
        <br />
          <button className="btn btn-default pull-right"
          onClick={this.togglePhoto}>
          {this.state.photoAdded ? "✓ Photo Added" : "Add Photo" }
        </button>
        {console.log('render')}
      </div>
    );
  }
};

export default SimpleLineChart;