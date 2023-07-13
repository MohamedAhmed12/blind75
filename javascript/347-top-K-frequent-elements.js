/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
    const frequency = {};
    for (let i = 0; i < nums.length; i++) {
        if (frequency.hasOwnProperty(nums[i])) frequency[nums[i]] += 1;
        else frequency[nums[i]] = 1;
    }

    const sortedFrequency = Object.keys(frequency).sort((a, b) => frequency[b] - frequency[a]);

    const res = [];
    for (let i = 0; i < k; i++) {
        res.push(sortedFrequency[i]);
    }

    return res;
};
