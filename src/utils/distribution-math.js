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

export {makeCdfFromPmf, nChooseK}