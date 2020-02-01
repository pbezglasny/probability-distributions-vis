import React from "react";
import {formStyles} from "../styles/form-styles";
import {withStyles} from '@material-ui/core/styles';
import combineStyles from "../styles/combine-styles";
import {gridStyles} from "../styles/grid-styles";
import {makeCdfFromPmf} from "../utils/distribution-math";
import {DistributionParam} from "../model/dist-param";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import {Bar, BarChart, CartesianGrid, Tooltip, XAxis, YAxis} from "recharts";
import Typography from '@material-ui/core/Typography';


class DiscreteDistribution extends React.Component {

    constructor(props) {
        super(props);
        const paramsMap = {};
        for (const param of props.defaultParams) {
            paramsMap[param.name] = new DistributionParam(param.name, param.defaultValue, param.min, param.max)
        }
        this.state = {params: paramsMap, pmf: [], cdf: []};
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        const id = event.target.id;
        const newValue = event.target.value;
        const params = this.state.params;
        params[id].value = newValue;
        this.setState({params: params});
    }

    componentDidMount() {
        this.drawChart();
    }

    isAllParamValid() {
        return Object.keys(this.state.params).reduce((result, par) =>
            result && this.state.params[par].isValid.valid, true);
    }

    drawChart() {
        if (!this.isAllParamValid()) {
            return;
        }
        const pmf = this.props.makePmfArray(this.state.params);
        const cdf = makeCdfFromPmf(pmf);
        this.setState({pmf: pmf, cdf: cdf});
    }

    render() {
        const {classes} = this.props;
        return (
            <div>
                <Typography style={{paddingLeft: 75, paddingTop: 20}}
                            variant="h4"
                            color="textPrimary"
                            noWrap>
                    {this.props.name}
                </Typography>
                <div>
                    <form style={{paddingLeft: 70, paddingTop: 20}}
                          className={classes.form_root} noValidate autoComplete="off">
                        {this.props.defaultParams.map(param =>
                            <TextField key={param.name}
                                       id={param.name} type="number"
                                       label={param.description}
                                       value={this.state.params[param.name].value}
                                       onChange={this.handleChange}
                                       error={!this.state.params[param.name].isValid.valid}
                                       helperText={this.state.params[param.name].isValid.valid ? "" :
                                           this.state.params[param.name].isValid.message}
                            />
                        )}
                        <br/>
                        <Button style={{width: 100}}
                                variant="contained"
                                onClick={() => this.drawChart()}
                                disabled={!this.isAllParamValid()}>Calculate</Button>
                    </form>
                </div>
                <div className={classes.grid_root}>
                    <Grid container spacing={0} alignContent="center">
                        <Grid item xs={6}>
                            <div className={classes.grid_names}>PMF</div>
                        </Grid>
                        <Grid item xs={6}>
                            <div className={classes.grid_names}>CDF</div>
                        </Grid>
                        <Grid item xs={6}>
                            <BarChart width={600} height={300} data={this.state.pmf}
                                      margin={{top: 5, right: 30, left: 20, bottom: 5}}>
                                <CartesianGrid strokeDasharray="3 3"/>
                                <XAxis dataKey="name"/>
                                <YAxis/>
                                <Tooltip/>
                                <Bar dataKey="prob" name="Probability" fill="#009688"/>
                            </BarChart>
                        </Grid>
                        <Grid item xs={6}>
                            <BarChart width={600} height={300} data={this.state.cdf}
                                      margin={{top: 5, right: 30, left: 20, bottom: 5}}>
                                <CartesianGrid strokeDasharray="3 3"/>
                                <XAxis dataKey="name"/>
                                <YAxis/>
                                <Tooltip/>
                                <Bar dataKey="prob" name="Probability" fill="#009688"/>
                            </BarChart>
                        </Grid>
                    </Grid>
                </div>
            </div>
        )
    }
}

export default withStyles(combineStyles(formStyles, gridStyles))(DiscreteDistribution);