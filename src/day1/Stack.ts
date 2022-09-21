type Node<T> = {
  value: T,
  prev: Node<T>,
}

export default class Stack<T> {
  public length: number;
  private head?: Node<T>

  constructor() {
    this.head = undefined;
    this.length = 0;
  }

  push(item: T): void {
    const newNode = { value: item } as Node<T>;
    this.length++;

    if (!this.head) {
      this.head = newNode;
      return;
    }

    newNode.prev = this.head;
    this.head = newNode;
  }
  pop(): T | undefined {
    if (!this.head) return undefined;

    this.length--;
    const prevHead = this.head;
    this.head = prevHead.prev;
    return prevHead.value;
  }
  peek(): T | undefined {
    return this.head?.value;
  }
}