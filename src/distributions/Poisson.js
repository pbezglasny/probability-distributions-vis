import * as React from "react";
import poisson from "../statistics/discrete/poisson";
import DiscreteDistribution from "./discrete-distribution";
import {ComponentDistributionParam} from "../model/dist-param";

class Poisson extends React.Component {

    makePmf(params) {
        const lambda = params['lambda'].value;
        const pmf = [];
        let k = 0;
        let prob = poisson.pmf(lambda, k);
        while (prob >= 1e-5 && k <= 50) {
            pmf.push({'name': k.toString(), 'prob': prob});
            k++;
            prob = poisson.pmf(lambda, k);
        }
        return pmf;
    }

    mean(params) {
        const lambda = params['lambda'].value;
        return poisson.mean(lambda);
    }

    variance(params) {
        const lambda = params['lambda'].value;
        return poisson.var(lambda);
    }

    std(params) {
        const lambda = params['lambda'].value;
        return poisson.var(lambda);
    }

    render() {
        return (
            <DiscreteDistribution
                defaultParams={[new ComponentDistributionParam("lambda", "Expected number of occurrences", 4, 0)]}
                makePmfArray={this.makePmf}
                mean={this.mean}
                variance={this.variance}
                std={this.std}
                name='Poisson'/>
        )
    }
}

export default Poisson;