//  ts-node ./scripts/ts/src/findLargestSubbaraySum.ts   

// Implement a function called findLargestSubarraySum that takes an 
// array of integers as its parameter and returns the sum of the largest subarray within the input array.
// findLargestSubarraySum([1, -2, 3, 10, -4, 7, 2, -5]) // returns 18
function findLargestSubarraySum(array: number[]): number {
    let maxSum = 0
    let currentSum = 0
    for (let i = 0; i < array.length; i++) {
        currentSum += array[i]
        if (currentSum > maxSum) {
            maxSum = currentSum
        }
        if (currentSum < 0) {
            currentSum = 0
        }
    }
    return maxSum
}

const arr: number[] = [1, 2, 3, 4, 5, 6]
console.log(findLargestSubarraySum(arr))