import React from "react";
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from "recharts"

function nChooseK(n, k) {
    let res = 1;
    if (k > n - k)
        k = n - k;
    for (let i = 0; i < k; ++i) {
        res *= (n - i);
        res /= (i + 1);
    }
    return res;
}

//{name:k, prob:p}

class Binomial extends React.Component {

    constructor(props) {
        super(props);
        this.state = {p: 0, n: 0, r: 0, data: []};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.barChartElement = React.createRef();
    }

    handleChange(event) {
        const {name, value} = event.target;
        this.setState({[name]: value});
    }


    componentDidCatch(error, errorInfo) {
        window.console.log(error);
        window.console.log(errorInfo);
    }

    handleSubmit(event) {
        let newR = this.state.p * this.state.n;
        this.setState({'r': newR});
        let newData = [];
        window.console.log(newData);
        for (let k = 1; k <= this.state.n; k++) {
            let choose = nChooseK(this.state.n, k);
            let binProb = choose * Math.pow(this.state.p, k) * Math.pow(1 - this.state.p, this.state.n - k);
            newData.push({'name': k.toString(), 'binProb': binProb});
        }
        this.setState({data: newData});
        event.preventDefault();
    }


    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Probability of success in one trial:
                        <input type="number" value={this.state.p} name="p" onChange={this.handleChange}/>
                    </label>
                    <label>
                        Num of trials:
                        <input type="number" value={this.state.n} name="n" onChange={this.handleChange}/>
                    </label>
                    <input type="submit" value="Submit"/>
                </form>
                <BarChart width={600} height={300} data={this.state.data}
                          margin={{top: 5, right: 30, left: 20, bottom: 5}}
                          ref={this.barChartElement}>
                    <CartesianGrid strokeDasharray="3 3"/>
                    <XAxis dataKey="name"/>
                    <YAxis/>
                    <Tooltip/>
                    <Legend/>
                    <Bar dataKey="binProb" fill="#8884d8"/>
                </BarChart>
            </div>
        );
    }
}

export default Binomial;