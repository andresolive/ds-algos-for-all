export default function compare(a: BinaryNode<number> | null, b: BinaryNode<number> | null): boolean {

  // 3 base cases:
  // first 2 are structural checks; third one is a value check

  // have we made it into a point in both subtrees in which we cannot recurse any furhter?
  // this means, structurally, the trees are the exact same
  if (a === null && b === null) return true;

  // this one means the trees are structurally not the same (one is a node and the other is null)
  if (a === null || b === null) return false;

  // this is a value check
  if (a.value !== b.value) return false;

  // you could replace base cases 2 and 3 with the following line
  // if (a?.value !== b?.value) return false;

  return compare(a.left, b.left) && compare(a.right, b.right);

}