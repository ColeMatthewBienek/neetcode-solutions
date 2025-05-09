// Note: This is leetcode problem# 26:
// https://leetcode.com/problems/remove-duplicates-from-sorted-array/
// Note 2: The official leetcode problem requires O(1) space, and that you mutate the original array

const removeDuplicatesNaive = (sortedArray) => {
    for(let index in sortedArray) {
        const lastElement = index === 0 ? undefined : sortedArray[index -1]
        const currentElement = sortedArray[index]

        if(currentElement === lastElement) {
            sortedArray.splice(index, 1)
        }
    }
    return sortedArray
}

const removeDuplicatesNonDestructive = (sortedArray) => {
    // this method is O(n) space but also does not mutate the input array
    // the Naive approach both mutates the input array and is O(n^2) time complexity (this is O(n))
    // the Dangerous speed approach is similar in speed to this approach but mutates the input
    // therefore this is probably the best overall approach if not allowed to mutate the original
    
    const results = []

    for(let index in sortedArray) {
        const lastResult = results.length === 0 ? undefined : results[results.length -1]
        const currentElement = sortedArray[index]

        if(currentElement !== lastResult) {
            results.push(currentElement)
        }
    }

    return results
}

const removeDuplicatesSpeed = (sortedArray) => {
    let lastUniqueIndex = -1
    let lastUniqueElement = undefined

    for(let index = 0; index < sortedArray.length; index++) {
        const currentElement = sortedArray[index]

        if(currentElement !== lastUniqueElement) {
            lastUniqueElement = currentElement
            lastUniqueIndex++
            sortedArray[lastUniqueIndex] = currentElement
        }
    }

    const duplicateCount = sortedArray.length - lastUniqueIndex - 1

    for(let i = 0; i < duplicateCount; i++) {
        sortedArray.pop()
    }

    return sortedArray
}

// Change the export to a different function name if you wish to test a variation
module.exports = {removeDuplicates: removeDuplicatesSpeed}