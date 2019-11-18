const _Node = require('./Node')

class LinkedList {
    constructor() {
        this.head = null
    }

    insertFirst(item) {
        // create a new node item and point the head to new node
        this.head = new _Node(item, this.head)
    }

    insertLast(item) {
        // create a new node with pointer set as null
        const newNode = new _Node(item, null)
        // if list is empty, insertFirst()
        if (!this.head) {
            this.insertFirst(item)
        }
        else {
            let currNode = this.head
            // iterate through list until you reach the end
            while (currNode.next !== null) {
                currNode = currNode.next
            }
            // set the end node's next point to new node
            currNode.next = newNode
        }
    }

    insertBefore(item, value) {
        // if list is empty return null
        if (!this.head) {
            return null
        }

        let currNode = this.head, prevNode = this.head
        // iterate over list
        while (currNode.value !== value) {
            if (currNode.next === null) {
                console.log('Item not found')
                return
            }
            else {
                prevNode = currNode
                currNode = currNode.next
            }
        }

        prevNode.next = new _Node(item, currNode)
    }

    insertAfter(item, value) {
        if (!this.head) {
            return null
        }

        let currNode = this.head, nextNote = this.head

        while (currNode.value !== value) {
            if (currNode.next === null) {
                console.log('Item not found')
                return
            }
            else {
                currNode = currNode.next
                nextNote = currNode.next
            }
        }

        currNode.next = new _Node(item, nextNote)
    }

    _findLength(list) {
        if (!list.head) {
            return null
        }

        let i = 1, currNode = list.head
        while (currNode.next !== null) {
            i++
            currNode = currNode.next
        }
        
        return i
    }

    insertAt(item, position) {
        if (!this.head) {
            return null
        }

        let i = 1
        let currNode = this.head
        const length = length(this)

        while (i <= length && i !== position && currNode.next !== null) {
            if (currNode.next === null) {
                console.log('Item not found')
                return
            } 
            else if (position > length) {
                console.log('Position does not exist')
                return
            }
            else {
                i++
                currNode = currNode.next
            }
        }

        this.insertBefore(item, currNode.value)
    }

    find(item) {
        if (!this.head) {
            return null
        }

        let currNode = this.head

        // while currNode value is not equal to item and currNode is not the last node
        while (currNode.value !== item) {
            if (currNode.next === null) {
                return null
            }
            else {
                currNode = currNode.next
            }
        }
        
        return currNode
    }

    remove(item) {
        if (!this.head) {
            return null
        }
        // delete from list start
        if (this.head.value === item) {
            this.head = this.head.next
            return
        }
        // delete from list end
        let currNode = this.head
        let prevNode = this.head
        // iterate through list
        while ((currNode !== null) && (currNode.value !== item)) {
            prevNode = currNode
            currNode = currNode.next
        }

        if (currNode === null) {
            console.log('Item not found')
            return
        }

        prevNode.next = currNode.next
    }
}

function length(list) {
    if (!list.head) {
        return null
    }

    let i = 1, currNode = list.head
    while (currNode.next !== null) {
        i++
        currNode = currNode.next
    }
    
    return i
}

function display(list) {
    let listArr = []
    let currNode = list.head

    while (currNode) {
        listArr.push(currNode.value)
        currNode = currNode.next
    }

    return listArr
}

function isEmpty(list) {
    return list.head ? false : true
}

// INCOMPLETE
function reverse(list) {
    // given a -> b -> c get c -> b -> a
    let currNode = list.head, prevNode = list.head

    if (currNode.next === null) {
        return currNode
    }

    while (currNode.next !== null) {
        prevNode = currNode
        currNode = currNode.next
    }

    list.remove(list.head.value)
    prevNode.next = null

    return reverse(list).next = prevNode


    // list.remove(currNode.value)
    // console.log('currNode', currNode)
    // // currNode.next = null
    // return reverse(list).next = currNode
    
    
    
    
    // console.log(list.head)
    // let currentNode = list.head
    // console.log(currentNode)
    // let newList

    // if (currentNode.next === null) {
    //     return currentNode
    // }

    // while (currentNode.next !== null) {
    //      newList = list.remove(currentNode.value)
    //     currentNode = currentNode.next
    // }

    // return reverse(newList).next = currentNode
}

module.exports = {
    LinkedList,
    length,
    display,
    isEmpty,
    reverse
}