import * as React from "react";
import DiscreteDistribution from "./discrete-distribution"
import {ComponentDistributionParam} from "../model/dist-param";
import binomial from "../statistics/discrete/binomial"


class Binomial extends React.Component {

    makePmf(params) {
        const result = [];
        const p = params['p'].value;
        const n = params['n'].value;
        for (let k = 1; k <= n; k++) {
            const prob = binomial.pmf(n, k, p);
            result.push({'name': k.toString(), 'prob': prob});
        }
        return result;
    }

    mean(params) {
        const p = params['p'].value;
        const n = params['n'].value;
        return binomial.mean(n, p);
    }

    variance(params) {
        const p = params['p'].value;
        const n = params['n'].value;
        return binomial.var(n, p);
    }

    std(params) {
        const p = params['p'].value;
        const n = params['n'].value;
        return binomial.std(n, p);
    }


    render() {
        return (
            <DiscreteDistribution
                defaultParams={[new ComponentDistributionParam("p", "Probability of success in one trial", 0.5, 0, 1),
                    new ComponentDistributionParam("n", "Num of trials", 10, 0)]}
                makePmfArray={this.makePmf}
                mean={this.mean}
                variance={this.variance}
                std={this.std}
                name='Binomial'/>
        )
    }
}

export default Binomial