// https://github.com/recharts/recharts/issues/49

import React from 'react';
import ReactDOM from 'react-dom';
import * as Recharts from 'recharts';
import _ from 'underscore';


const UPDATE_PERIOD = 200;
const CHART_WIDTH_POINTS = 20;

const {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} = Recharts;
var data = [
      {name: 'Page A', uv: 0, foo: 1, pv: 240, amt: 240},
      {name: 'Page B', uv: 0, foo: 1, pv: 138, amt: 221},
      {name: 'Page C', uv: 0, foo: 1, pv: 180, amt: 229},
      {name: 'Page D', uv: 278, foo: 1, pv: 398, amt: 200},
      {name: 'Page E', uv: 189, foo: 1, pv: 180, amt: 211},
      {name: 'Page F', uv: 239, foo: 1, pv: 80, amt: 250},
      {name: 'Page G', uv: 149, foo: 1, pv: 130, amt: 210},
];
var i =1000;

function clip(val, lower, upper) {
  return _.max([_.min([val, upper]), lower])

}

function new_datum() {
  return {name: 'Page '+i,
    uv: Math.random() * 100,
    pv: Math.random() * 100,
    amt: Math.random() * 100}

}

function new_data_scaler() {
  let scale = 1;
  return {name: 'Page '+i,
    uv: scale * (Math.random() -0.5),
    pv: scale * (Math.random() -0.5),
    amt: scale * (Math.random() -0.5)}

}

class XileLineChart extends React.Component{
  constructor(props) {
    super(props);
    this.state = {data: data};
    console.log('running Xile2');
  }
	getInitialState(){
  	return {data:data};
  }
	componentDidMount(){

    // var that = this; // i hate JS.
    setInterval(()=>{
      this.update_data(new_datum())
    }, UPDATE_PERIOD );
    // setInterval(that.update_data, 200, new_datum() );


    // setInterval(function(){
  	 //  console.log('update');
    //   let data= this.state.data;
    //   i++;
    //   if (data.length > 20) {
    //     data = data.slice(1);
    //   }
    //   data = [...data, {name: 'Page '+i, uv: Math.random() * 1000, pv: Math.random() * 1000, amt: Math.random() * 1000}];
    //   this.setState({data:data});
    // }.bind(this),200)
  }
  update_data(datum) {
	  console.log('update2');
    let data= this.state.data;
    let last_datum = data.slice(-1)[0];

    i++;

    _.each(_.keys(last_datum), (key) => {
      if (key != 'name') {
        datum[key] = clip(last_datum[key] + (datum[key] - 50), 0, 200);

      }
    });

    if (data.length > CHART_WIDTH_POINTS) {
      data = data.slice(1);
    }
    data = [...data, datum];
    this.setState({data:data});
  }
	render () {
  	return (
    	<LineChart width={600} height={300} data={this.state.data}
            margin={{top: 5, right: 30, left: 20, bottom: 5}}>
       <XAxis dataKey="name"/>
       <YAxis/>
       <CartesianGrid strokeDasharray="3 3"/>
       <Tooltip/>
       <Legend />
       <Line type="monotone" dataKey="pv" stroke="#8884d8" isAnimationActive={false} dot={false} /> /*isAnimationActive={false}*/
       <Line type="monotone" dataKey="uv" stroke="#82ca9d" isAnimationActive={false} dot={false} />
       <Line type="monotone" dataKey="amt" stroke="#2299AA" strokeWidth={5} isAnimationActive={false} dot={false}  />

      </LineChart>
    );
  }
}

// ReactDOM.render(
//   <SimpleLineChart />,
//   document.getElementById('container')
// );

export default XileLineChart;