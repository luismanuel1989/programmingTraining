var target = 9, nums = [2, 7, 11, 15];
sumTwo(target, nums);

function sumTwo(target, nums) {
    var result = [];
    for (var i = 0; i < nums.length; i++) {
        for (var j = 0; j < nums.length; j++) {
            if (j !== i) {
                if (nums[i] + nums[j] == target) {
                    result.push(i, j);
                    nums.splice(i, 1)
                    nums.splice(j, 1)
                }
            }
        }
    }

    return result
}