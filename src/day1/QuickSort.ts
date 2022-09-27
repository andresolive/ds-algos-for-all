// often times, quick sort is split into 2 functions: 
// the partition fcn --> produces the pivot index and moves the <= items to one side and > items to the other; returns pivot
// qs fcn --> actually does the sorting recursively 
// arguments of both fcns are the array, the lo and the hi

// both lo and hi are inclusive (unusual in algorithms, but helpful here)
function qs(arr: number[], lo: number, hi: number): void {
  // base case
  // lo and hi are indexes. If they are the same index (an array of 1 element) don't recurse.
  if (lo >= hi) return;

  // get the pivot index so you can split the arrays
  const pivotIdx = partition(arr, lo, hi);

  // call the function recursively on the array to the left and the array to the right of the pivotIdx
  qs(arr, lo, pivotIdx - 1);
  qs(arr, pivotIdx + 1, hi);

}

// the goal is to return the partition index. The element at the partition index has everything to its
// left <= to it and everything to its right > it.
function partition(arr: number[], lo: number, hi: number): number {

  // for simplicity, we take the last element in the array to be our pivot
  const pivot = arr[hi];

  let idx = lo - 1;

  // compare each element in the array with the pivot. If any element is <= the pivot, swap them.
  for (let i = lo; i < hi; i++) {
    if (arr[i] <= pivot) {
      idx++;
      [arr[i], arr[idx]] = [arr[idx], arr[i]];
    }
  }

  // finally, take the pivot and swap it with the element to the right of the last element you
  // swapped in the for loop. This guarantees that everything to the left of the pivot is <= to it
  // and everything to its left is > it
  // remember the pivot is at arr[hi]
  idx++;
  arr[hi] = arr[idx];
  arr[idx] = pivot;

  return idx;

}

export default function quick_sort(arr: number[]): void {
  qs(arr, 0, arr.length - 1);
}