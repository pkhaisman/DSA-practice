// 1) Counting Sheep
function escape(numberOfSheep) {
    if (numberOfSheep === 0) {
        console.log('All sheep jumped over the fence')
        return
    }

    console.log(`${numberOfSheep}: Another sheep jumps over the fence`)
    escape(numberOfSheep - 1)
}

const numberOfSheep = 3
// escape(numberOfSheep)

// 2) Power Calculator
function powerCalculator(base, power) {
    if (power === 1) {
        return base
    }

    return base * powerCalculator(base, power - 1)
}

const base = 10, power = 5
// console.log(powerCalculator(base, power))

// 3) Reverse a String
function reverseString(string) {
    if (string.length === 1) {
        return string
    }

    return reverseString(string.slice(1)).concat(string[0])
}

const string = 'Hello'
// console.log(reverseString(string))

// 4) nth Triangular Number
function nthTriNum(triLength) {
    if (triLength === 1) {
        return triLength
    }

    return triLength + (nthTriNum(triLength - 1))
}

const triLength = 10
// console.log(nthTriNum(triLength))

// 5) String Splitter
// HELP
// array in reverse order
// doesn't work when separator is firs or last character
// or when more than one in a row mid string
function stringSplitter(inputString, separator) {
    if (!inputString.includes(separator)) {
        return [inputString]
    }

    const index = inputString.indexOf(separator)

    return stringSplitter(inputString.slice(index + 1) , separator).concat(inputString.slice(0, index))
}

const inputString = '02/20/2020', separator = '/'
// console.log(stringSplitter(inputString, separator))

// 6) Fibonacci

// 7) Factorial
function factorial(num) {
    if (num === 1) {
        return num
    }

    return num * factorial(num - 1)
} 

const numFactorial = 5
// console.log(factorial(numFactorial))

// 8) Maze
// this maze will not work if there are any blocked paths
// cannot move up or left
function possibleMazePath(maze, path) {
    let newMaze = []

    if (!path) {
        path = []
    }

    // base case
    if (maze.length === 1 && maze[0].length === 1) {
        return path
    }

    // if space to the right is not border or block then move right
    if (maze[0].length > 1 && maze[0][1] !== '*') {
        path.push('R')
        maze.forEach(row => newMaze.push(row.slice(1)))

        return possibleMazePath(newMaze, path)
    // otherwise move down
    } else {
        path.push('D')
        newMaze = maze.slice(1)

        return possibleMazePath(newMaze, path)
    }
}

let mySmallMaze = [
    [' ', ' ', ' '],
    [' ', '*', ' '],
    [' ', ' ', 'e']
];

let maze = [
    [' ', ' ', ' ', '*', ' ', ' ', ' '],
    ['*', '*', ' ', '*', ' ', '*', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', '*', '*', '*', '*', '*', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', 'e']
];

// console.log(possibleMazePath(maze))

// 9) Maze - All Paths

// 10) Anagrams
function reverse(string) {
    return string.split('').reverse().join('')
}

// abc -> abc acb bca bac cab cba
function combos(string) {
    let arrStrings = []
    let strArr = string.split('')

    while (arrStrings.length !== string.length) {
        // store first letter of string
        const firstLetter = strArr[0]
        // remove first letter of string
        strArr.shift()
        // push firstLetter to string
        strArr.push(firstLetter)
        // convert back to string and push to solution array
        arrStrings.push(strArr.join(''))
    }
    
    return arrStrings
}

function anagrams(string, solution) {
    solution = solution || []

    if (string.length === 2) {
        return reverse(string)
    }

    while (solution.length !== factorial(string.length)) {
        let combosArr = combos(string)

        combosArr.forEach(comboStr => {
            const firstLetter = comboStr[0]
            const newStr = comboStr.slice(1)
            solution.push(firstLetter + anagrams(newStr))
            return anagrams(newStr)
        })
    }

    return solution
}

const testAnaStr = 'abcd'
// console.log(anagrams('abcd'));

// Write a recursive function that prints the Fibonacci sequence of a given number. 
// The Fibonacci sequence is a series of numbers in which each number is the sum of 
// the 2 preceding numbers. For example, the 7th Fibonacci number in a Fibonacci 
// sequence is 13. The sequence looks as follows: 1, 1, 2, 3, 5, 8, 13.

// fibSeq(7) => 0, 1, 1, 2, 3, 5, 8, 13

function fibSeq(num) {
    if (num <= 1) {
        return [0 , 1]
    }

    // recursive case
    let indexOne = fibSeq(num - 1)[fibSeq(num - 1).length - 2]
    let indexTwo = fibSeq(num - 1)[fibSeq(num - 1).length - 1]

    return fibSeq(num - 1).concat(indexOne + indexTwo)
}

console.log(fibSeq(10))