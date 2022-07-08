const SOLUTION_SUM = 9;
const SOLUTION_A = 2;
const SOLUTION_B = 7;

/**
 * Return solutions in ms for corresponding algorithm & input size
 */
export function solveTwoSum(inputSizes, algorithm) {
    const solutionTimes = [];
    inputSizes.forEach((inputSize) => {
        const nums = createNumbersInput(inputSize);
        let start = new Date().getTime();
        let solution = algorithm(nums);
        let end = new Date().getTime();
        if(validateResult(solution, inputSize)) {
            solutionTimes.push(end - start);
        } else {
            console.error(`--- SOLUTION INCORRECT FOR INPUT SIZE ${inputSize} ---`);
        }
    });
    return solutionTimes;
}

/** 
* Slow solution for the two sum problem: O(n^2)
*/
export function twoSumSlow(nums) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === SOLUTION_SUM) {
                return [i, j];
            }
        }
    }
    return null;
}

/** 
* Slightly slower solution than fast for the two sum problem: Also O(n)
*/
export function twoSumMedium(nums) {
    const map = {};
    for (let i = 0; i < nums.length; i++) {
        map[nums[i]] = i;
    }
    for (let i = 0; i < nums.length; i++) {
        let compliment = SOLUTION_SUM - nums[i];
        if (compliment in map && (i !== map[compliment])) {
            return [i, map[compliment]];
        }
    }
    return null;
}

/** 
* Fast solution for the two sum problem: O(n)
*/
export function twoSumFast(nums) {
    const map = {};
    for (let i = 0; i < nums.length; i++) {
        let compliment = SOLUTION_SUM - nums[i];
        if (compliment in map && (i !== map[compliment])) {
            return [i, map[compliment]];
        }
        map[nums[i]] = i;
    }
    return null;
};

// Helper functions
function validateResult(result, inputSize) {
    const correctResult = [inputSize - 2, inputSize - 1];
    let validated = false;
    correctResult.forEach((element) => {
        validated = result.includes(element);
    });
    return result.length === 2 && validated;
}

function createNumbersInput(n) {
    const numbersInput = [];
    for (let i = 0; i < n - 2; i++) {
        // Our solution is 2 + 7 = 9. 
        // By pushing numbers >10 into the array, we make sure that there won't be a second solution.
        numbersInput.push(10 + i);
    }
    // We append the solution (2 + 7) to the very end of the array to achieve a Big O Notation scenario.
    numbersInput.push(SOLUTION_A);
    numbersInput.push(SOLUTION_B);
    return numbersInput;
}
