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


export default function in_order_search(head: BinaryNode<number>): (number | undefined)[] {
  // recursion
  // return walk(head, []);

  // iterative approach using a stack:

  const result = [];
  const stack = [];
  let currentNode: BinaryNode<number> | null | undefined = head;

  while (currentNode !== null || stack.length) {
    // either keek going down to the left
    while (currentNode !== null) {
      stack.push(currentNode);
      currentNode = currentNode?.left;
    }
    // or add to result and go to the right
    currentNode = stack.pop();
    result.push(currentNode?.value);
    currentNode = currentNode?.right;
  }
  return result;
}


