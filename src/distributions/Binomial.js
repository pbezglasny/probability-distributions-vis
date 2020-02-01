import React from "react";
import {Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis} from "recharts"
import {formStyles} from "../styles/form-styles";
import {withStyles} from '@material-ui/core/styles';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

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

class Binomial extends React.Component {

    constructor(props) {
        super(props);
        this.state = {binom_p: 0.5, binom_n: 10, data: []};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.barChartElement = React.createRef();
    }

    handleChange(event) {
        const id = event.target.id;
        const value = event.target.value;
        this.setState({[id]: value});
    }


    componentDidMount() {
        this.drawChart();
    }

    drawChart() {
        const newData = [];
        for (let k = 1; k <= this.state.binom_n; k++) {
            let choose = nChooseK(this.state.binom_n, k);
            let binProb = choose * Math.pow(this.state.binom_p, k) *
                Math.pow(1 - this.state.binom_p, this.state.binom_n - k);
            newData.push({'name': k.toString(), 'binProb': binProb});
        }
        this.setState({data: newData});
    }

    handleSubmit(event) {
        this.drawChart();
        event.preventDefault();
    }

    render() {
        const {classes} = this.props;
        return (
            <div>
                <div>
                    <form className={classes.form_root} noValidate autoComplete="off">
                        <TextField id="binom_p" type="number" label="Probability of success in one trial"
                                   value={this.state.binom_p} onChange={this.handleChange}/>
                        <TextField id="binom_n" type="number" label="Num of trials"
                                   value={this.state.binom_n} onChange={this.handleChange}/>
                        <Button variant="contained" onClick={this.handleSubmit}>Submit</Button>
                    </form>
                </div>
                <BarChart width={600} height={300} data={this.state.data}
                          margin={{top: 5, right: 30, left: 20, bottom: 5}}
                          ref={this.barChartElement}>
                    <CartesianGrid strokeDasharray="3 3"/>
                    <XAxis dataKey="name"/>
                    <YAxis/>
                    <Tooltip/>
                    <Legend/>
                    <Bar dataKey="binProb" name="Probability" fill="#8884d8"/>
                </BarChart>
            </div>
        );
    }
}

export default withStyles(formStyles)(Binomial);