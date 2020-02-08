class normal {
    constructor() {
        throw new Error("This class is not supposed to instantiate");
    }

    static pdf(m, sigma, x) {
        const multiplier = 1 / (sigma * Math.sqrt(2 * Math.PI));
        return multiplier * Math.exp(Math.pow((x - m) / sigma, 2) / -2);
    }

    static mean(m) {
        return m;
    }

    static var(sigma) {
        return Math.pow(sigma, 2);
    }

    static std(lambda) {
        return Math.sqrt(normal.var(lambda));
    }
}

export default normal