class geometric {

    constructor() {
        throw new Error("This class is not supposed to instantiate");
    }

    static pmf(k, p) {
        return Math.pow((1 - p), k) * p;
    }

    static mean(p) {
        return (1 - p) / p;
    }

    static var(p) {
        return (1 - p) / Math.pow(p, 2);
    }

    static std(n, p) {
        return Math.sqrt(this.var(n, p));
    }
}

export default geometric;