//go:build mage
// +build mage

package main

import "fmt"

func Hello() {
	// ret := NumIdenticalPairs([]int{1, 2, 3, 1, 1, 3})
	// ret := NumIdenticalPairsWithHash([]int{1, 2, 3, 1, 1, 3})
	// ret := NumIdenticalPairsWithHash([]int{1, 1, 1, 1, 1})
	ret := NumIdenticalPairsWithHash([]int{1, 1, 1, 1, 1, 1})
	// ret := NumIdenticalPairsWithHash([]int{1, 2, 3, 1, 1, 3})
	fmt.Printf("There are %d good pairs", ret)
}

// 1512. Number of Good Pairs in leetcode.
// Given an array of integers nums, return the number of good pairs.
// A pair (i, j) is called good if nums[i] == nums[j] and i < j
// where i and j are indexes in the array and nums[i] is the actual item value.
func NumIdenticalPairs(nums []int) int {
	type pair struct {
		a, b int
	}
	pairs := make([]pair, 0)
	for i := 0; i < len(nums); i++ {
		for j := i + 1; j < len(nums); j++ {
			if nums[i] == nums[j] && i < j {
				pairs = append(pairs, pair{i, j})
			}
		}
	}

	return len(pairs)
}

func NumIdenticalPairsWithHash(nums []int) int {
	hashmap := make(map[int][]int) // map num to indexes
	for i := 0; i < len(nums); i++ {
		hashmap[nums[i]] = append(hashmap[nums[i]], i)
	}
	total := 0
	for _, v := range hashmap {
		total += addFactorial(len(v))
	}
	return total
}

// addFactorial - additive version of factorial minus first value
// source: https://www.quora.com/Is-there-a-factorial-function-but-for-addition
// (n-1) + (n-2) + (n-3) ...
func addFactorial(num int) int {
	return (num*(num+1))/2 - num
}
