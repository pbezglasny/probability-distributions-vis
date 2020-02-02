import * as React from "react";
import {ComponentDistributionParam} from "../model/dist-param";
import DiscreteDistribution from "./discrete-distribution";
import geometric from "../statistics/discrete/geometric";

class Geometric extends React.Component {

    makePmf(params) {
        const p = params['p'].value;
        const pmf = [];
        let k = 0;
        let prob = geometric.pmf(k, p);
        while (prob >= 1e-5 && k <= 500) {
            pmf.push({'name': k.toString(), 'prob': prob});
            k++;
            prob = geometric.pmf(k, p);
        }
        return pmf;
    }

    mean(params) {
        const p = params['p'].value;
        return geometric.mean(p);
    }

    variance(params) {
        const p = params['p'].value;
        return geometric.var(p);
    }

    std(params) {
        const p = params['p'].value;
        return geometric.std(p);
    }

    render() {
        return (
            <DiscreteDistribution
                defaultParams={[new ComponentDistributionParam("p", "Probability of success in one trial", 0.5, 0, 1)]}
                makePmfArray={this.makePmf}
                mean={this.mean}
                variance={this.variance}
                std={this.std}
                name='Geometric'/>
        );
    }
}

export default Geometric;