function wordCounter(string) {
    const words = string.replace(/[.]/g, '').split(/\s/);
    const solObj = {}

    words.forEach(word => {

        if (!solObj[word]) {
            solObj[word] = 0
        }

        solObj[word]++
    })

    return solObj
}

const inputString = "Hello there how are you Can you tell me how to get to the nearest Starbucks"
// console.log(wordCounter(inputString))

// Given a sorted linked list, write an algorithm to delete all duplicate numbers from the sorted linked list.
// INPUT: 1 -> 1 -> 2 -> 3 -> 3 -> 4 
// OUTPUT: 1 -> 2 -> 3 -> 4

// function(list)
    // currNode = list.head

    // while (currNode.next !== null) {
        // check if next value is the same as current value
            // if so then change the current node pointer to skip next node
            // set currNode to next node
        // if not 
            // set currNode to next node
    
    // return list
// }

// Given a string, write an algorithm to count the number of words in the string that are palindromes. 
// The output must include a list of the palindromes and the number of palindromes.

// Input: "Dad gave mom a Tesla as a racecar"
// Output: "Dad, mom, racecar, 3 Palindromes"

function isPalindrome(word) {
    const reverseWord = word.split('').reverse().join('').toLowerCase()

    if (word.length === 1) {
        return false
    }
    else {
        return word.toLowerCase() === reverseWord ? true : false
    }
}

function countPalindromes(string) {
    let numPal
    const solution = []
    const strArr = string.split(' ')

    strArr.forEach(word => {
        if (isPalindrome(word)) {
            solution.push(word)
        }
    })

    numPal = solution.length
    solution.push(numPal)

    return solution
}

const palindromeString = "Dad gave mom a Tesla as a racecar"
// console.log(countPalindromes(palindromeString))

// find the value that occurs most often. also find how many times it occurs. if no number is
// repeated then there is no mode

// - Input: `1, 2, 3, 6, 10, 3, 5, 6, 3, 3`
// - Output: `Mode = 3, Frequency of mode = 4`

function findMaxFreq(freqObj) {
    let objKey
    let maxMode = 0

    for (let [key, value] of Object.entries(freqObj)) {
        if (value > 1 && value > maxMode) {
            maxMode = value
            objKey = key
        }
    }

    return { maxMode, objKey } 
}

function findMode(list) {
    const freqObj = {}
    const numArr = list.split(',')
    
    // loop through array of numbers
    numArr.forEach(num => {
        num = parseInt(num.trim())

        if (!freqObj[num]) {
            freqObj[num] = 0
        }

        freqObj[num]++
    })

    return findMaxFreq(freqObj)
}

const modeList = `1, 2, 3, 6, 10, 3, 5, 6, 3, 3`
// console.log(findMode(modeList))

