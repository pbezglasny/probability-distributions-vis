import * as React from "react";
import {ComponentDistributionParam} from "../model/dist-param";
import DiscreteDistribution from "./discrete-distribution";
import negative_binomial from "../statistics/discrete/negative_binomial";

class NegativeBinomial extends React.Component {

    makePmf(params) {
        const p = params['p'].value;
        //TODO react parse r as string, why?
        const r = parseInt(params['r'].value);
        const pmf = [];
        let k = 0;
        let prob = negative_binomial.pmf(k, p, r);
        while (prob >= 1e-4 && k <= 500) {
            pmf.push({'name': k.toString(), 'prob': prob});
            k++;
            prob = negative_binomial.pmf(k, p, r);
        }
        return pmf;
    }

    mean(params) {
        const p = params['p'].value;
        const r = params['r'].value;
        return negative_binomial.mean(p, r);
    }

    variance(params) {
        const p = params['p'].value;
        const r = params['r'].value;
        return negative_binomial.var(p, r);
    }

    std(params) {
        const p = params['p'].value;
        const r = params['r'].value;
        return negative_binomial.std(p, r);
    }

    render() {
        return (
            <DiscreteDistribution
                defaultParams={[new ComponentDistributionParam("p", "Probability of success in one trial", 0.2, 0, 1),
                    new ComponentDistributionParam("r", "Number of failures until the experiment is stopped", 4, 0)]}
                makePmfArray={this.makePmf}
                mean={this.mean}
                variance={this.variance}
                std={this.std}
                name='Negative Binomial'/>
        );
    }
}

export default NegativeBinomial;