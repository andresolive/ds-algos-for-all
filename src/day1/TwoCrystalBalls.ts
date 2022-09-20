export default function two_crystal_balls(breaks: boolean[]): number {

  let n = breaks.length;
  let jumpAmt = Math.floor(Math.sqrt(n));

  // first ball
  let i = jumpAmt;
  for (; i < n; i += jumpAmt) {
    if (breaks[i]) break;
  }

  // at this point i = the floor where the first ball broke

  // second ball
  // go back i - jumpAmt floors and start dropping the second ball there
  for (let j = i - jumpAmt; j < n; j++) {
    if (breaks[j]) return j;
  }

  return -1;
}
