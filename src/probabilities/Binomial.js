import React from "react";
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from "recharts"


let data = [
    {name: 'Page A', uv: 4000, pv: 2400, amt: 2400},

];

class Binomial extends React.Component {

    constructor(props) {
        super(props);
        this.state = {x: 0, n: 0, r: 0};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.barChartElement = React.createRef();
    }

    handleChange(event) {
        const {name, value} = event.target;
        this.setState({[name]: value});
    }


    handleSubmit(event) {
        let newR = this.state.x * this.state.n;
        this.setState({'r': newR});
        data.push({name: 'Page G', uv: 3490, pv: 4300, amt: 2100});
        window.console.log(data);
        this.barChartElement.data = data;
        event.preventDefault();
    }


    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        X:
                        <input type="number" value={this.state.x} name="x" onChange={this.handleChange}/>
                    </label>
                    <label>
                        N:
                        <input type="number" value={this.state.n} name="n" onChange={this.handleChange}/>
                    </label>
                    <input type="submit" value="Submit"/>
                </form>
                <p>{this.state.r}</p>
                <BarChart width={600} height={300} data={data}
                          margin={{top: 5, right: 30, left: 20, bottom: 5}}
                          ref={this.barChartElement}>
                    <CartesianGrid strokeDasharray="3 3"/>
                    <XAxis dataKey="name"/>
                    <YAxis/>
                    <Tooltip/>
                    <Legend/>
                    <Bar dataKey="pv" fill="#8884d8"/>
                    <Bar dataKey="uv" fill="#82ca9d"/>
                </BarChart>
            </div>
        );
    }
}

export default Binomial;