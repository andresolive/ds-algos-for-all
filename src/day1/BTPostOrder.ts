function walk(curr: BinaryNode<number> | null, path: number[]): number[] {
  // base case
  if (!curr) return path;

  // remember the 3 steps in recursion
  // 1. pre
  // nothing to do

  // 2. recurse
  walk(curr.left, path)
  walk(curr.right, path)

  // 3. post 
  path.push(curr.value);

  return path;
}

export default function post_order_search(head: BinaryNode<number>): number[] {
  return walk(head, []);
}