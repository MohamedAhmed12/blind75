/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = (nums, target, map = new Map()) => {
    for(let i=0; i < nums.length; i++) {
        const diff = target - nums[i];
        if(map.has(diff)) {
            return [map.get(diff), i];
        }

        map.set(nums[i], i);
    }
};