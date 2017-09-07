// https://github.com/recharts/recharts/issues/655
const {LineChart,ComposedChart, Line,Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend} = Recharts;
var data = [
      {name: 'Page A', uv: 4000, pv: 2400, amt: 2400},
      {name: 'Page B', uv: 3000, pv: 1398, amt: 2210},
      {name: 'Page C', uv: 2000, pv: 9800, amt: 2290},
      {name: 'Page D', uv: 2780, pv: 3908, amt: 2000},
      {name: 'Page E', uv: 1890, pv: 4800, amt: 2181},
      {name: 'Page F', uv: 2390, pv: 3800, amt: 2500},
      {name: 'Page G', uv: 3490, pv: 4300, amt: 2100},
];

const Chart = React.createClass({
  getInitialState(){
  	return {data:this.props.data};
  },
  componentWillReceiveProps(nextProps){
    this.setState({data:nextProps.data})
  },
  render () {
  	return (
    	<ComposedChart width={600} height={300} data={this.state.data}>
       <XAxis dataKey="name"/>
       <YAxis yAxisId="left" orientation="left" />
       <YAxis yAxisId="right" orientation="right" />
       <CartesianGrid strokeDasharray="3 3"/>
       <Tooltip/>
       <Legend />
       <Area yAxisId='left' type="monotone" dataKey="pv" stroke="#8884d8" fill='#8884d8'  />
       <Line yAxisId='right' type="monotone" dataKey="uv" stroke="#82ca9d"  />
      </ComposedChart>
    );
  }
})

var i =1000;
const SimpleLineChart = React.createClass({
	getInitialState(){
  	return {data:data};
  },
	componentDidMount(){

  	setInterval(() => {
    i+=100;
    var data= this.state.data;
    data.shift();
    data.push({name: 'Page '+i, uv: 3490+i, pv: 4300+i, amt: 2100+i})
    this.setState({data:data});
    },5000)

  },
	render () {
  	return (
    	<div>
       <Chart data={this.state.data}  />
      <Chart data={this.state.data}  />
      <Chart data={this.state.data}  />
      </div>
    );
  }
})



ReactDOM.render(
  <SimpleLineChart />,
  document.getElementById('container')
);
