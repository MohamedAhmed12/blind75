class Solution {
    /**
    * @param Integer[] $nums
    * @param Integer $target
    * @return Integer[]
    */
    function twoSum($nums, $target) {
        $map = array();
        for($i=0; $i < count($nums); $i++){
            $diff = $target - $nums[$i];
            if(array_key_exists($diff, $map)) {
                return [$map[$diff], $i];
            }

            $map[$nums[$i]] = $i;
        }
    }
}