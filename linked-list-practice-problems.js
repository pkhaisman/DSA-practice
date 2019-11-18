const { LinkedList, length, display, isEmpty, reverse } = require('./LinkedList')

function main() {
    const SSL = new LinkedList()

    const names = ['a', 'b', 'c', 'd', 'e']
    
    names.forEach(name => SSL.insertLast(name))
    
    return reverse(SSL)
}

console.log(main())