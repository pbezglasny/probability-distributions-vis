import {cachedFactorial} from "../distribution-math";

class poisson {

    constructor() {
        throw new Error("This class is not supposed to instantiate");
    }

    static pmf(lambda, k) {
        return Math.pow(lambda, k) * Math.pow(Math.E, -1 * lambda) / cachedFactorial(k);
    }

    static mean(lambda) {
        return lambda
    }

    static var(lambda) {
        return lambda;
    }

    static std(lambda) {
        return Math.sqrt(this.var(lambda));
    }
}

export default poisson;