function walk(curr: BinaryNode<number> | null, path: number[]): number[] {
  // base case
  if (!curr) return path;

  // remember the 3 steps in recursion
  // 1. pre
  // nothing to do

  // 2. recurse
  walk(curr.left, path)
  path.push(curr.value);
  walk(curr.right, path)

  // 3. post 
  // nothing to do

  return path;
}


export default function in_order_search(head: BinaryNode<number>): number[] {
  return walk(head, []);

}