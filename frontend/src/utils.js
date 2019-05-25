function containsAll(arr1, arr2) {
  return arr2.every(item => arr1.includes(item))
}

function arraysEqual(arr1, arr2) {
  return containsAll(arr1, arr2) && containsAll(arr2, arr1)
}

export default arraysEqual
