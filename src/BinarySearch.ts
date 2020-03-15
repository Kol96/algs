/**
 * 有序数组二分查找 shallowEqual
 * @param {T[]}} list
 * @param {T} value
 */
function BinarySearch<T>(list: T[], value: T): number {
  let start = 0
  let end = list.length
  while (start <= end) {
    const mid = Math.floor((start + end) / 2)
    if (value === list[mid]) {
      return mid
    } else if (value < list[mid]) {
      end = mid - 1
    } else {
      start = mid + 1
    }
  }
  return -1
}

export default BinarySearch
