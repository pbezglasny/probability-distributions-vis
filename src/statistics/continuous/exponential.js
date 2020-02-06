class exponential {
    constructor() {
        throw new Error("This class is not supposed to instantiate");
    }


    static pdf(lambda, x) {
        if (x < 0) return 0;
        else return lambda * Math.exp(-lambda * x);
    }

    static mean(lambda) {
        return 1 / lambda;
    }

    static var(lambda) {
        return 1 / Math.pow(lambda, 2);
    }

    static std(lambda) {
        return Math.sqrt(exponential.var(lambda));
    }

}

export default exponential;