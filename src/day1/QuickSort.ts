// often times, quick sort is split into 2 functions: 
// the partition fcn --> produces the pivot index and moves the <= items to one side and > items to the other; returns pivot
// quick sort fcn --> actually does the sorting recursively 
// arguments of both fcns are the array, the lo and the hi

// both lo and hi are inclusive (unusual in algorithms, but helpful here)
function qs(arr: number[], lo: number, hi: number): void {

}

function partition(arr: number[], lo: number, hi: number): number {

  const pivot = arr[hi];
  let idx = lo - 1;

  for (let i = lo; i < hi; i++) {
    if (arr[i] <= pivot) {
      idx++;
      [arr[i], arr[idx]] = [arr[idx], arr[i]];
    }
  }

  idx++;
  arr[hi] = arr[idx];
  arr[idx] = pivot;

  return idx;
}

export default function quick_sort(arr: number[]): void {


}