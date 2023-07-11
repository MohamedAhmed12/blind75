class Solution {
    /**
    * @param String[] $strs
    * @return String[][]
    */
    function groupAnagrams($strs) {
        $result = array_reduce($strs, function($map, $str) {
            $orderedStr = $this->order($str);
            $map[$orderedStr][] = $str;
            return $map;
        }, []);

        return $result;
    }

    /**
    * @param String $str
    * @return String
    */
    function order($str) {
        $str= str_split($str);
        sort($str);

        return implode("", $str);
    }
}