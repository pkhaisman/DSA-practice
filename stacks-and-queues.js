class _Node {
    constructor(data, next) {
        this.data = data
        this.next = next
    }
}

class Stack {
    constructor() {
        this.top = null
    }

    push(data) {
        if (!this.top) {
            this.top = new _Node(data, null)
            return this.top
        }

        const node = new _Node(data, this.top)
        this.top = node
    }

    pop() {
        // is this necessary?
        if (!this.top) {
            return
        }

        const node = this.top
        this.top = node.next
        return node.data
    }
}

class Queue {
    constructor() {
        this.first = null
        this.last = null
    }

    enqueue(data) {
        const node = new _Node(data)

        if (!this.first) {
            this.first = node
        }

        if (this.last) {
            this.last.next = node
        }

        this.last = node
    }

    dequeue() {
        // do nothing if queue is empty
        if (!this.first) {
            return
        }
        // set first item to next item back
        const node = this.first
        this.first = this.first.next
        // set last item to null if one item in queue
        if (mode === this.last) {
            this.last = null
            // is this necessary
            this.first = null
        }

        return node.value
    }
}

// QUEUE FUNCTIONS
function createQueue(data) {
    let queue = new Queue()

    data.forEach(d => {
        queue.enqueue(d)
    })

    return queue
}

function createStarTrekQueue() {
    const data = ['Kirk', 'Uhura', 'Sulu', 'Checkov']

    return createQueue(data)
}

const queue = createStarTrekQueue()

function queuePeek(queue) {
    return queue.first
}

function queueIsEmpty(queue) {
    return queue.first ? false : true
}

function queueDisplay(queue) {
    // add queue items to solution array until item.next === null
    const disArr = []
    let currNode = queue.first

    while (currNode) {
        disArr.push(currNode.data)
        currNode = currNode.next
    }

    return disArr
}

console.log(queueDisplay(queue))





// STACK FUNCTIONS
function createStack(data) {
    let stack = new Stack()

    data.forEach(d => {
        stack.push(d)
    })

    return stack
}

// see the node at the top of the stack
function stackPeek(stack) {
    return stack.top
}

// check if stack is empty
function stackisEmpty(stack) {
    return stack.top ? true : false
}

// display the stack
function stackDisplay(stack) {
    let stackArr = []
    let currentNode = stack.top

    while (currentNode !== null) {
        stackArr.push(currentNode.data)
        currentNode = currentNode.next
    }

    return stackArr.reverse()
}

function stackIsPalindrome(string) {
    string = string.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
    let strArr = string.split('')
    let palStack = createStack(strArr)
    let revStrArr = []

    while (revStrArr.length !== strArr.length) {
        let removedLetter = palStack.pop()
        revStrArr.push(removedLetter)
    }

    let revStr = revStrArr.join('')

    return string === revStr ? true : false
}

