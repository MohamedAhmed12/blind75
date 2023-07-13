from collections import defaultdict

class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        res = defaultdict(list)

        for str in strs:
            count = [0] * 26
            for l in str:
                count[ord(l) - ord("a")] += 1
            res[tuple(count)].append(str)

        return res.values()