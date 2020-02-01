import React from "react";
import {Bar, BarChart, CartesianGrid, Tooltip, XAxis, YAxis} from "recharts"
import {formStyles} from "../styles/form-styles";
import {withStyles} from '@material-ui/core/styles';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import DistributionParam from "../model/dist-param"
import {make_cdf_from_pmf} from "../utils/distribution-math";
import combineStyles from "../styles/combine-styles";
import {grid_styles} from "../styles/grid-styles";
import Grid from "@material-ui/core/Grid";

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
        this.state = {
            binom_p: new DistributionParam('binom_p', 0.5, 0, 1),
            binom_n: new DistributionParam('binom_n', 10, 0),
            pmf: [],
            cdf: []
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const id = event.target.id;
        const newValue = event.target.value;
        const paramValue = this.state[id];
        paramValue.value = newValue;
        this.setState({[id]: paramValue});
    }

    componentDidMount() {
        this.drawChart();
    }

    isAllParamValid() {
        return this.state.binom_p.isValid.valid && this.state.binom_n.isValid.valid
    }

    drawChart() {
        if (!this.isAllParamValid()) {
            return;
        }
        const pmf = [];
        for (let k = 1; k <= this.state.binom_n.value; k++) {
            let choose = nChooseK(this.state.binom_n.value, k);
            let binProb = choose * Math.pow(this.state.binom_p.value, k) *
                Math.pow(1 - this.state.binom_p.value, this.state.binom_n.value - k);
            pmf.push({'name': k.toString(), 'prob': binProb});
        }
        const cdf = make_cdf_from_pmf(pmf);
        this.setState({pmf: pmf, cdf: cdf});
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
                                   value={this.state.binom_p.value} onChange={this.handleChange}
                                   error={!this.state.binom_p.isValid.valid}
                                   helperText={this.state.binom_p.isValid.valid ? "" : this.state.binom_p.isValid.message}
                        />
                        <TextField id="binom_n" type="number" label="Num of trials"
                                   value={this.state.binom_n.value} onChange={this.handleChange}
                                   error={!this.state.binom_n.isValid.valid}
                                   helperText={this.state.binom_n.isValid.valid ? "" : this.state.binom_n.isValid.message}
                        />
                        <br/>
                        <Button variant="contained"
                                onClick={this.handleSubmit}
                                disabled={!this.isAllParamValid()}>Submit</Button>
                    </form>
                </div>
                <div className={classes.grid_root}>
                    <Grid container spacing={1}>
                        <Grid item xs={6}>
                            <BarChart width={600} height={300} data={this.state.pmf}
                                      margin={{top: 5, right: 30, left: 20, bottom: 5}}>
                                <CartesianGrid strokeDasharray="3 3"/>
                                <XAxis dataKey="name"/>
                                <YAxis/>
                                <Tooltip/>
                                <Bar dataKey="prob" name="Probability" fill="#8884d8"/>
                            </BarChart>
                        </Grid>
                        <Grid item xs={6}>
                            <BarChart width={600} height={300} data={this.state.cdf}
                                      margin={{top: 5, right: 30, left: 20, bottom: 5}}>
                                <CartesianGrid strokeDasharray="3 3"/>
                                <XAxis dataKey="name"/>
                                <YAxis/>
                                <Tooltip/>
                                <Bar dataKey="prob" name="Probability" fill="#8884d8"/>
                            </BarChart>
                        </Grid>
                    </Grid>
                </div>
            </div>
        );
    }
}

export default withStyles(combineStyles(formStyles, grid_styles))(Binomial);