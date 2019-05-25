import arraysEqual from './utils'

describe('arraysEqual', () => {
  it('should return true for the same arrays', () => {
    const arr = [1, 2]
    expect(arraysEqual(arr, arr)).toBe(true)
  })

  it('should return true for arrays with same values', () => {
    const arr1 = ['', '']
    const arr2 = ['', '']
    expect(arraysEqual(arr1, arr2)).toBe(true)
  })

  it('should return true for empty arrays', () => {
    const arr1 = []
    const arr2 = []
    expect(arraysEqual(arr1, arr2)).toBe(true)
  })

  it('should return false for arrays with different values', () => {
    const arr1 = [1]
    const arr2 = [2]
    expect(arraysEqual(arr1, arr2)).toBe(false)
  })

  it('should return true for arrays with the same objects', () => {
    const object1 = { a: 1 }
    const object2 = { b: 2 }
    const arr1 = [object1, object2]
    const arr2 = [object1, object2]
    expect(arraysEqual(arr1, arr2)).toBe(true)
  })

  it('should return false for arrays with different objects', () => {
    const arr1 = [{ a: 1 }, { b: 2 }]
    const arr2 = [{ a: 1 }, { b: 2 }]
    expect(arraysEqual(arr1, arr2)).toBe(false)
  })
})
