import * as React from "react";
import {ComponentDistributionParam} from "../model/dist-param";
import DiscreteDistribution from "./discrete-distribution";
import {nChooseK} from "../utils/distribution-math";


function probabilityOfOneTrial(k, p, r) {
    return nChooseK(k + r - 1, k) * Math.pow((1 - p), r) * Math.pow(p, k);
}

class NegativeBinomial extends React.Component {

    makePmf(params) {
        const p = params['p'].value;
        //TODO react parse r as string, why?
        const r = parseInt(params['r'].value);
        const pmf = [];
        let k = 0;
        let prob = probabilityOfOneTrial(k, p, r);
        while (prob >= 1e-4 && k <= 500) {
            pmf.push({'name': k.toString(), 'prob': prob});
            k++;
            prob = probabilityOfOneTrial(k, p, r);
        }
        return pmf;
    }

    render() {
        return (
            <DiscreteDistribution
                defaultParams={[new ComponentDistributionParam("p", "Probability of success in one trial", 0.5, 0, 1),
                    new ComponentDistributionParam("r", "Number of failures until the experiment is stopped", 10, 0)]}
                makePmfArray={this.makePmf}
                name='Negative Binomial'/>
        );
    }
}

export default NegativeBinomial;