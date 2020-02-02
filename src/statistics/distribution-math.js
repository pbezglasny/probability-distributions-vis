function makeCdfFromPmf(pmf) {
    const cdf = [];
    let sum = 0;
    for (let i = 0; i < pmf.length; i++) {
        sum += pmf[i]['prob'];
        cdf[i] = {'name': pmf[i]['name'], 'prob': sum};
    }
    return cdf;
}

function nChooseK(n, k) {
    let res = 1;
    if (k > n - k)
        k = n - k;
    for (let i = 0; i < k; ++i) {
        res *= (n - i);
        res /= (i + 1);
    }
    return res;
}

function factorial(k) {
    if (k === 0) return 1;
    let result = 1;
    while (k > 1) {
        result *= k;
        k--;
    }
    return result;
}

const factorialCache = [];

function cachedFactorial(k) {
    if (k < 0) throw new Error("K must be non negative");
    if (k > 50) {
        throw new Error("Max value of param k is 50");
    }
    if (factorialCache.length < 1) {
        factorialCache.push(1.0);
        for (let i = 1; i <= 50; i++) {
            const prev = factorialCache[i - 1];
            factorialCache.push(prev * i);
        }
    }
    return factorialCache[k];
}

export {makeCdfFromPmf, nChooseK, factorial, cachedFactorial}