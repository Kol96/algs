import BinarySearch from '../BinarySearch'

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
test('search 1', () => {
  expect(BinarySearch(arr, 1)).toBe(0)
})

test('search 10', () => {
  expect(BinarySearch(arr, 10)).toBe(9)
})

test('not found', () => {
  expect(BinarySearch(arr, 11)).toBe(-1)
})
