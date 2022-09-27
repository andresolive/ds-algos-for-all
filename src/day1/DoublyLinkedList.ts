type Node<T> = {
  value: T,
  prev?: Node<T>,
  next?: Node<T>,
}

export default class DoublyLinkedList<T> {
  public length: number;
  private head?: Node<T>;
  private tail?: Node<T>;


  constructor() {
    this.length = 0;
    this.head = undefined;
    this.tail = undefined;
  }

  prepend(item: T): void {
    const node = { value: item } as Node<T>;

    this.length++;
    if (!this.head) {
      this.head = this.tail = node;
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
    // curr represents [C]
    const curr = this.getAt(idx) as Node<T>;
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
    this.length++;
    const node = { value: item } as Node<T>;
    if (!this.tail) {
      this.head = this.tail = node;
      return;
    }

    node.prev = this.tail;
    this.tail.next = node;
    this.tail = node;
  }
  remove(item: T): T | undefined {
    let curr = this.head;
    for (let i = 0; curr && curr.value && i < this.length; i++) {
      curr = curr.next;
      if (curr?.value === item) {
        break;
      }
    }

    if (!curr) return undefined;

    return this.removeNode(curr);
  }
  get(idx: number): T | undefined {
    return this.getAt(idx)?.value;

  }
  removeAt(idx: number): T | undefined {
    const node = this.getAt(idx);

    if (!node) return undefined;
    return this.removeNode(node);
  }

  private removeNode(node: Node<T>): T | undefined {
    this.length--;
    if (this.length === 0) {
      const out = this.head?.value;
      this.head = this.tail = undefined;
      return out;
    }

    // if there is a previous
    if (node.prev) node.prev = node.next;
    // if there is a next
    if (node.next) node.next = node.prev;

    // is current node the head?
    if (node === this.head) this.head = node.next;
    // is current node the tail
    if (node === this.tail) this.tail = node.prev;

    // break current node from the list
    node.prev = node.next = undefined;

    return node.value;
  }

  private getAt(idx: number): Node<T> | undefined {

  }
}