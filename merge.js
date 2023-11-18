function merge(arr1, arr2) {
    let res = []
    let l = 0
    let r = 0

    while (l < arr1.length && r < arr2.length) {
        if (arr1[l] < arr2[r]) {
            res.push(arr1[l])
            l++
        } else {
            res.push(arr2[r])
            r++
        }
    }

    while (l < arr1.length) {
        res.push(arr1[l])
        l++
    }

    while (r < arr2.length) {
        res.push(arr2[r])
        r++
    }

    return res
}

function mergeSort(arr) {
    if (arr.length <= 1) { return arr }
    let midx = Math.floor(arr.length / 2)
    const leftArr = mergeSort(arr.slice(0, midx))
    const rightArr = mergeSort(arr.slice(midx))

    return merge(leftArr, rightArr)

}

module.exports = { merge, mergeSort };