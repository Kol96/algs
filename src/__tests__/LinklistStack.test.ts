import Stack from '../LinkListStack'

describe('LinkListStack', () => {
  it('should have push and pop function', () => {
    const a = new Stack<number>()
    expect(a.size()).toBe(0)
    a.push(1)
    expect(a.size()).toBe(1)
    a.push(2)
    expect(a.size()).toBe(2)
    const value = a.pop()
    expect(value).toBe(2)
    expect(a.size()).toBe(1)
  })

  it('Symbol iterator', () => {
    const a = new Stack<number>()
    for (let i = 0; i < 4; i++) {
      a.push(i)
    }
    const itra = a[Symbol.iterator]()
    for (let i = 0; i < 4; i++) {
      expect(itra.next()).toEqual({ done: false, value: 3 - i })
    }
    expect(itra.next()).toEqual({ done: true, value: undefined })
  })

  it('for...of', () => {
    const a = new Stack<number>()
    for (let i = 0; i < 4; i++) {
      a.push(i)
    }
    let value = 3
    for (const v of a) {
      expect(v).toEqual(value--)
    }
  })
})
