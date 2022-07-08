import { solveTwoSum, twoSumSlow, twoSumFast } from "./two-sum.js";

const inputSizes = [10, 100, 1000, 10000, 50000];

/**
 * Example on how to use the algorithms declared in two-sum.js
 */
function init() {
    const millisSlow = solveTwoSum(inputSizes, twoSumSlow);
    const millisFast = solveTwoSum(inputSizes, twoSumFast);
    console.log('Results for slow approach:');
    millisSlow.forEach((millis, index) => {
        console.log(`Input size: ${inputSizes[index]}  Slow took ${millis}ms to complete`);
    });
    console.log('------------------------');
    console.log('Results for fast approach:');
    millisFast.forEach((millis, index) => {
        console.log(`Input size: ${inputSizes[index]}  Fast took ${millis}ms to complete`);
    });
}

init();