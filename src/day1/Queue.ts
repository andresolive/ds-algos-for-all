type Node<T> = {
  value: T,
  next?: Node<T>,
}

export default class Queue<T> {
  public length: number;
  private head?: Node<T>;
  private tail?: Node<T>;

  constructor() {
    this.head = this.tail = undefined;
    this.length = 0;
  }

  enqueue(item: T): void {
    this.length++;
    const newNode = { value: item } as Node<T>

    if (!this.tail) {
      this.head = this.tail = newNode;
      return;
    }

    this.tail.next = newNode;
    this.tail = newNode;
  }

  deque(): T | undefined {

    if (!this.head) return undefined;

    this.length--;

    const prevHead = this.head;
    this.head = this.head.next;

    prevHead.next = undefined;

    if (this.length === 0) this.tail = undefined;

    return prevHead.value;
  }

  peek(): T | undefined {
    return this.head?.value;
  }
}