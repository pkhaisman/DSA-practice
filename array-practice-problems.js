// 5) URLify a string
function urlify(url) {
    let urlArr = url.split('')

    urlArr.forEach((char, i) => {
        if (char === ' ') {
            urlArr.splice(i, 1, '%20')
        }
    })

    return urlArr.join('')
}

const url = 'www.thinkful.com /tauh ida parv een'
// console.log(urlify(url))

// 6) Filtering an array
function filter(arr) {
    let filteredArr = []

    arr.forEach(num => {
        if (num >= 5) {
            filteredArr.push(num)
        }
    })

    return filteredArr
}

const numArr = [1, 2, 3, 65, 4, 32, 5, 4, -50] // [65, 32, 5]
// console.log(filter(numArr))

// 7) Max sum in the array
function maxSum(arr) {
    maxNumsArr = []
    arr.forEach((num, index) => {
        let solution = [0]
        const slicedArr = arr.slice(index)

        slicedArr.forEach((n, i) => {
            solution.push(solution[solution.length - 1] + n)
        })

        solution.shift()
        maxNumsArr.push(Math.max(...solution))
    })
    return Math.max(...maxNumsArr)
}

const maxSumArr = [-5, 6, -3, 5, -2, 1] // 12
console.log(maxSum(maxSumArr))
