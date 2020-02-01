function make_cdf_from_pmf(pmf) {
    const cdf = [];
    let sum = 0;
    for (let i = 0; i < pmf.length; i++) {
        sum += pmf[i]['prob'];
        cdf[i] = {'name': pmf[i]['name'], 'prob': sum};
    }
    return cdf;
}

export {make_cdf_from_pmf}