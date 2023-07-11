class Solution(object):
    def containsDuplicate(self, nums):
        numSet = set(nums)
        return len(numSet) != len(nums)