import {validate} from "../utils/validation"

class DistributionParam {
    name;
    value;
    min;
    max;

    constructor(name, value, min, max) {
        this.name = name;
        this.value = value;
        this.min = min;
        this.max = max;
    }

    get isValid() {
        if (!validate(this.value, this.min, (f, s) => f >= s)) {
            return {valid: false, message: `Value should be greater than ${this.min}`}
        } else if (!validate(this.value, this.max, (f, s) => f <= s)) {
            return {valid: false, message: `Value should be less than ${this.max}`}
        } else {
            return {valid: true, message: ""};
        }
    }

}

export default DistributionParam