export default function bs_list(haystack: number[], needle: number): boolean {
  // [lo, hi) --> lo is inclusive, hi is exclusive
  // when reassigning lo, do it to middle + 1
  // when reassigning hi, do it to middle

  let lo = 0;
  let hi = haystack.length;

  while (lo < hi) {
    let middle = Math.floor(lo + (hi - lo) / 2);
    if (haystack[middle] === needle) return true;
    else if (haystack[middle] < needle) lo = middle + 1;
    else hi = middle;
  }
  return false;
}