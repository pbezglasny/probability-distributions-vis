import {findUpperBoundOfContinuousCDF} from './distribution-math'
import '@testing-library/jest-dom/extend-expect';

test('find upper bound', () => {
    const cdf = v => Math.min(v / 1000, 1);
    const threshold = 0.01;
    const upper = findUpperBoundOfContinuousCDF(cdf, 0.03, threshold);
    const result = Math.abs(upper / 1000 - 1);
    expect(result).toBeLessThanOrEqual(threshold + Math.pow(threshold, 2));
    expect(1 - result).toBeGreaterThanOrEqual(1 - threshold - Math.pow(threshold, 2))
});