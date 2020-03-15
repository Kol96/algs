class Stack<T> {
  private arr: T[]
  private N: number = 0

  constructor(size: number) {
    this.arr = new Array<T>(size)
  }

  push(value: T) {
    // 扩容
    if (this.isFull()) {
      this.resize(this.arr.length * 2)
    }
    this.arr[this.N++] = value
  }

  pop(): T {
    // 栈中无数据
    if (this.N === 0) return undefined
    const value = this.arr[--this.N]
    this.arr[this.N] = undefined
    // 缩小数组
    if (this.N > 0 && this.N === Math.floor(this.arr.length / 4)) {
      this.resize(Math.floor(this.arr.length / 2))
    }
    return value
  }

  isEmpty(): boolean {
    return this.N === 0
  }

  // 元素大小
  size(): number {
    return this.N
  }

  // 分配空间大小
  length(): number {
    return this.arr.length
  }

  private isFull(): boolean {
    return this.N === this.arr.length
  }

  private resize(size: number): void {
    const newArr = new Array(size)
    for (let i = 0; i < size; i++) {
      newArr[i] = this.arr[i]
    }
    this.arr = newArr
  }

  [Symbol.iterator](): Iterator<T> {
    let index = this.N
    return {
      next: (): IteratorResult<T> => {
        if (index > 0) {
          return {
            done: false,
            value: this.arr[--index]
          }
        }
        return {
          done: true,
          value: undefined
        }
      }
    }
  }
}

export default Stack
