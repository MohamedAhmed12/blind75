class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        for index, num in enumerate(nums):
            diff = target - num

            if diff in nums:
                diffIndex = nums.index(diff)

                if index != diffIndex:
                    return [index, diffIndex]