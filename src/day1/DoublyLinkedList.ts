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
    // say you have [A] <--> [B] <--> [C] and want to insert the new node [F] btwn B and C

    if (idx > this.length) {
      throw new Error('cannot insert there');
    }

    if (idx === this.length) {
      this.append(item);
      return;
    } else if (idx === 0) {
      this.prepend(item);
      return;
    }

    this.length++;
    // we need to traverse the list
    let curr = this.head;
    for (let i = 0; curr && i < idx; i++) {
      curr = curr.next;
    }

    curr = curr as Node<T>;
    // curr represents [C]

    // now that we are at the index where we need to insert:
    const node = { value: item } as Node<T>;

    // first: attach the new node
    node.next = curr;
    node.prev = curr.prev;
    // second: break the old links
    curr.prev = node;
    if (curr.prev) {
      curr.prev.next = curr;
    }


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