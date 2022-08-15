var target = 9, nums = [2, 7, 11, 15];
sumTwo(target, nums);

function sumTwo(target, nums) {
    var result = [], i, j;
    for (i = 0; i < nums.length; i++) {
        for (j = 0; j < nums.length; j++) {
            if (j !== i) {
                if (nums[i] + nums[j] == target) {
                    if (!result.includes(i) && !result.includes(j)) result.push(i, j)
                }
            }
        }
    }

    return result
}