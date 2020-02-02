import {nChooseK} from "../distribution-math";


class binomial {

    constructor() {
        throw new Error("This class is not supposed to instantiate");
    }

    static pmf(n, k, p) {
        return nChooseK(n, k) * Math.pow(p, k) * Math.pow(1 - p, n - k);
    }

    static mean(n, p) {
        return n * p;
    }

    static var(n, p) {
        return n * p * (1 - p);
    }

    static std(n, p) {
        return Math.sqrt(this.var(n, p));
    }
}


export default binomial;