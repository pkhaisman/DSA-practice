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
function anagrams(string) {
    var results = {};
   
    function combos(buildCombo, string) {
        if (!string.length) {
            results[buildCombo] = 'values';
            return;
        }

        for (var i = 0; i < string.length; i++) {
            console.log(buildCombo + string.charAt(i), string.slice(0, i) + string.slice(i + 1))
            combos(buildCombo + string.charAt(i), string.slice(0, i) + string.slice(i + 1));
        }
    };
   
    combos('', string);
    return Object.keys(results);
};

console.log(anagrams('abc'));
