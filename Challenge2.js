/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    var arrLen = nums.length;
     console.log(nums);
     console.log("Array length is:" + arrLen);
     nums.sort(function (a, b) {
       return a - b;
     });
     console.log(nums);
       if (!nums.includes(0)) {
         console.log("Missing Number is: " + 0);
         return 0; 
       } else if (!nums.includes(arrLen)) {
         console.log("Missing Item is: " + arrLen);
         return arrLen; 
       } else {
         for (let i = 0; i < arrLen; i++) {
           if (nums[i + 1] - nums[i] != 1) {
             console.log("Missing Element is: " + (nums[i + 1] - 1));
             return nums[i + 1] - 1;
           }
         }
       }
     
   };
