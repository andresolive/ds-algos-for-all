type Node<T> = {
  value: T,
  prev?: Node<T>,
  next?: Node<T>,
}

export default class DoublyLinkedList<T> {
  public length: number;
  private head?: Node<T>


  constructor() {
    this.length = 0;
    this.head = undefined;
  }

  prepend(item: T): void {
    const node = { value: item } as Node<T>;

    this.length++;
    if (!this.head) {
      this.head = node;
      return;
    }

    // the following order matters!
    // say you have a DLL [A] <--> [B] <--> [C] and want to insert the new node [G] at the head
    // 1. [G] points to [A]
    node.next = this.head;
    // 2. [A] points to [G]
    this.head.prev = node;
    // 3. head points to [G]
    this.head = node;

  }
  insertAt(item: T, idx: number): void {

  }
  append(item: T): void {

  }
  remove(item: T): T | undefined {

  }
  get(idx: number): T | undefined {

  }
  removeAt(idx: number): T | undefined {

  }
}