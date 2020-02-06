import {nChooseK} from "../distribution-math";

class negative_binomial {

    constructor() {
        throw new Error("This class is not supposed to instantiate");
    }

    static pmf(k, p, r) {
        return nChooseK(k + r - 1, k) * Math.pow((1 - p), r) * Math.pow(p, k);
    }

    static mean(p, r) {
        return p * r / (1 - p);
    }

    static var(p, r) {
        return p * r / Math.pow((1 - p), 2);
    }

    static std(p, r) {
        return Math.sqrt(negative_binomial.var(p, r));
    }
}


export default negative_binomial;