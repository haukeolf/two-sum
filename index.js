const nums = createNumbersInput(1500, 2, 7);;
const target = 9;
let stepsSlow = 0;
let stepsMedium = 0;
let stepsFast = 0;
let millisSlow = 0;
let millisMedium = 0;
let millisFast = 0;

function twoSumSlow(nums, target) {
    let start = new Date().getTime();
    for(let i = 0; i < nums.length; i++) {
        for(let j = i + 1; j < nums.length; j++) {
            stepsSlow++;
            if(nums[i] + nums[j] === target) {
                let end = new Date().getTime();
                millisSlow = end - start;
                return [i, j];
            }
        }
    }
    return null;
}

function twoSumMedium(nums, target) {
    let start = new Date().getTime();
    const map = {};
    for (let i = 0; i < nums.length; i++) {
        map[nums[i]] = i;
        stepsMedium++;
    }
    for (let i = 0; i < nums.length; i++) {
        stepsMedium++;
        let compliment = target - nums[i];
        if(compliment in map && (i !== map[compliment])) {
            let end = new Date().getTime();
            millisMedium = end - start;
            return [i, map[compliment]];
        }
    }
    return null;
}

function twoSumFast(nums, target) {
    let start = new Date().getTime();
    const map = {};
    for (let i = 0; i < nums.length; i++) {
        let compliment = target - nums[i];
        stepsFast++;
        if(compliment in map && (i !== map[compliment])) {
            let end = new Date().getTime();
            millisFast = end - start;
            return [i, map[compliment]];
        }
        map[nums[i]] = i;
    }
    return null;
};

function createNumbersInput(n, a, b) {
    const numbersInput = [];
    for(let i = 0; i < n - 2; i++) {
        numbersInput.push(10 + i);
    }
    numbersInput.push(a);
    numbersInput.push(b);
    return numbersInput;
}

const slowResult = twoSumSlow(nums, target);
if(slowResult.length === 2) {
    // console.log(stepsSlow);
}
console.log('--------------------');
const mediumResult = twoSumMedium(nums, target);
if(mediumResult.length === 2) {
    // console.log(stepsMedium);
}
console.log('--------------------');
const fastResult = twoSumFast(nums, target);
if(fastResult.length === 2) {
    // console.log(stepsFast);
}
console.log('--------------------');
console.log('Slow needed ' + stepsSlow + ' steps and ' + millisSlow + ' milliseconds to complete.');
console.log('Medium needed ' + stepsMedium + ' steps and ' + millisMedium + ' milliseconds to complete.');
console.log('Fast needed ' + stepsFast + ' steps and ' + millisFast + ' milliseconds to complete.');
console.log('Slow uses ' + (stepsSlow / stepsMedium) + ' times more steps than Medium');
console.log('Slow uses ' + (stepsSlow / stepsFast) + ' times more steps than Fast');
console.log('Slow took ' + (millisSlow / millisMedium) + ' times longer than Medium');
console.log('Slow took ' + (millisSlow / millisFast) + ' times longer than Fast');
console.log('--------------------');
