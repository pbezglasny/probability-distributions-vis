import * as React from "react";
import {ComponentDistributionParam} from "../model/dist-param";
import DiscreteDistribution from "./discrete-distribution";

class Geometric extends React.Component {

    makePmf(params) {
        const p = params['p'].value;
        const pmf = [];
        let k = 0;
        let prob = Math.pow((1 - p), k) * p;
        while (prob >= 1e-5) {
            pmf.push({'name': k.toString(), 'prob': prob});
            k++;
            prob = Math.pow((1 - p), k) * p;
        }
        return pmf;
    }

    render() {
        return (
            <DiscreteDistribution
                defaultParams={[new ComponentDistributionParam("p", "Probability of success in one trial", 0.5, 0, 1)]}
                makePmfArray={this.makePmf}/>
        );
    }
}

export default Geometric;