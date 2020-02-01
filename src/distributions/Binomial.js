import * as React from "react";
import DiscreteDistribution from "./discrete-distribution"
import {ComponentDistributionParam} from "../model/dist-param";
import {nChooseK} from "../utils/distribution-math";


class BinomialFromDiscrComponent extends React.Component {

    makePmf(params) {
        const pmf = [];
        const p = params['p'].value;
        const n = params['n'].value;
        for (let k = 1; k <= n; k++) {
            let choose = nChooseK(n, k);
            let binProb = choose * Math.pow(p, k) *
                Math.pow(1 - p, n - k);
            pmf.push({'name': k.toString(), 'prob': binProb});
        }
        return pmf;
    }

    render() {
        return (
            <DiscreteDistribution
                defaultParams={[new ComponentDistributionParam("p", "Probability of success in one trial", 0.5, 0, 1),
                    new ComponentDistributionParam("n", "Num of trials", 10, 0)]}
                makePmfArray={this.makePmf}/>
        )
    }
}

export default BinomialFromDiscrComponent