from collections import defaultdict

class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        res = defaultdict(int)

        for num in nums:
            res[num] += 1

        sorted_res = sorted(res.items(), key=lambda x: x[1], reverse=True)
        return [x[0] for x in sorted_res[:k]]