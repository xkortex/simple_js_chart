// https://github.com/recharts/recharts/issues/49

import React from 'react';
import ReactDOM from 'react-dom';
import * as Recharts from 'recharts';

const {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} = Recharts;
var data = [
      {name: 'Page A', uv: 0, foo: 1, pv: 2400, amt: 2400},
      {name: 'Page B', uv: 0, foo: 1, pv: 1398, amt: 2210},
      {name: 'Page C', uv: 0, foo: 1, pv: 9800, amt: 2290},
      {name: 'Page D', uv: 2780, foo: 1, pv: 3908, amt: 2000},
      {name: 'Page E', uv: 1890, foo: 1, pv: 4800, amt: 2181},
      {name: 'Page F', uv: 2390, foo: 1, pv: 3800, amt: 2500},
      {name: 'Page G', uv: 3490, foo: 1, pv: 4300, amt: 2100},
];
var i =1000;
const XileLineChart = React.createClass({
	getInitialState(){
  	return {data:data};
  },
	componentDidMount(){
  	setInterval(function(){
  	  console.log('update');
      let data= this.state.data;
      i++;
      if (data.length > 20) {
        data = data.slice(1);
      }
      data = [...data, {name: 'Page '+i, uv: Math.random() * 1000, pv: Math.random() * 1000, amt: Math.random() * 1000}];
      this.setState({data:data});
    }.bind(this),100)
  },
	render () {
  	return (
    	<LineChart width={600} height={300} data={this.state.data}
            margin={{top: 5, right: 30, left: 20, bottom: 5}}>
       <XAxis dataKey="name"/>
       <YAxis/>
       <CartesianGrid strokeDasharray="3 3"/>
       <Tooltip/>
       <Legend />
       <Line type="monotone" dataKey="pv" stroke="#8884d8" />
       <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
       <Line type="monotone" dataKey="amt" stroke="#2299AA" strokeWidth={20} />

      </LineChart>
    );
  }
})

// ReactDOM.render(
//   <SimpleLineChart />,
//   document.getElementById('container')
// );

export default XileLineChart;