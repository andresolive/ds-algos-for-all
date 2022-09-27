function search(curr: BinaryNode<number> | null, needle: number): boolean {
  // if we hit the bottom of the tree and couldn't find the value we're looking for
  if (!curr) return false;

  // if we find the value 
  if (curr.value === needle) return true;

  if (curr.value < needle) {
    return search(curr.right, needle);
  }
  return search(curr.left, needle);
}

export default function dfs(head: BinaryNode<number>, needle: number): boolean {
  return search(head, needle);
}