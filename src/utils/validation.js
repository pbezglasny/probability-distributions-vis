function validate(value, toCompare, compareFunc) {
    if (typeof toCompare !== 'undefined' && value) {
        return compareFunc(value, toCompare);
    } else return true;
}

export {validate}