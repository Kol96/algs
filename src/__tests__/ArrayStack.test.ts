import Stack from '../ArrayStack'

test('size', () => {
  const a = new Stack<number>(10)
  expect(a.size()).toBe(0)
  a.push(1)
  expect(a.size()).toBe(1)
  a.push(2)
  expect(a.size()).toBe(2)
  const value = a.pop()
  expect(value).toBe(2)
  expect(a.size()).toBe(1)
})

test('push', () => {
  const a = new Stack<number>(10)
  a.push(1)
  expect(a.size()).toBe(1)
})

test('Symbol iterator', () => {
  const a = new Stack<number>(10)
  for (let i = 0; i < 4; i++) {
    a.push(i)
  }
  const itra = a[Symbol.iterator]()
  for (let i = 0; i < 4; i++) {
    expect(itra.next()).toEqual({ done: false, value: 3 - i })
  }
  expect(itra.next()).toEqual({ done: true, value: undefined })
})

test('for...of', () => {
  const a = new Stack<number>(10)
  for (let i = 0; i < 4; i++) {
    a.push(i)
  }
  let value = 3
  for (const v of a) {
    expect(v).toEqual(value--)
  }
})

test('resize array', () => {
  const a = new Stack<number>(1)
  a.push(1) // N = 1
  expect(a.length()).toBe(1)
  a.push(1) // N = 2
  expect(a.length()).toBe(2)
  a.push(1) // N = 3
  expect(a.length()).toBe(4)
  a.pop() // N = 2
  expect(a.length()).toBe(4)
  a.pop() // N = 1
  expect(a.length()).toBe(2)
})
