class StackNode<T> {
  item: T
  next: StackNode<T>
}

class Stack<T> {
  first: StackNode<T> = null
  N: number = 0

  push(item: T) {
    const oldFirst = this.first
    this.first = new StackNode()
    this.first.item = item
    this.first.next = oldFirst
    this.N++
  }

  pop(): T {
    if (this.N === 0) return undefined
    const item = this.first.item
    this.first = this.first.next
    this.N--
    return item
  }

  isEmpty(): boolean {
    // N === 0
    return this.first === null
  }

  size(): number {
    return this.N
  }

  [Symbol.iterator](): Iterator<T> {
    let pointer = this.first
    return {
      next: (): IteratorResult<T> => {
        if (pointer) {
          const result = { done: false, value: pointer.item }
          pointer = pointer.next
          return result
        }
        return { done: true, value: undefined }
      }
    }
  }
}

export default Stack
