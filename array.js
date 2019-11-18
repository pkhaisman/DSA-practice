const Memory = require('./memory')
const memory = new Memory()

class Array {
    constructor() {
        this.length = 0
        this.capacity = 0
        this.ptr = memory.allocate(this.length)
    }

    push(value) {
        console.log(this, value)
        if (this.length >= this.capacity) {
            console.log('increasing capacity')
            this.resize((this.length + 1) * Array.SIZE_RATIO)
        }
        // this.ptr refers to start of array
        memory.set(this.ptr + this.length, value)
        // what does this do?
        this.length++
    }

    resize(size) {
        const oldPtr = this.ptr
        // allocate new memory
        this.ptr = memory.allocate(size)
        if (this.ptr === null) {
            throw new Error('Out of memory')
        }
        // copy values to new memory location
        memory.copy(this.ptr, oldPtr, this.length)
        // delete values in old memor location
        memory.free(oldPtr)
        this.capacity = size
    }

    get(index) {
        if (index < 0 || index >= this.length) {
            throw new Error('Index error')
        }

        return memory.get(this.ptr + index)
    }

    pop() {
        console.log('pop!')
        if (this.length == 0) {
            throw new Error('Index error')
        }

        const value = memory.get(this.ptr + this.length - 1)
        this.length--
        return value
    }

    insert(index, value) {
        if (index < 0 || index >= this.length) {
            throw new Error('Index error')
        }

        if (this.length >= this.capacity) {
            this.resize((this.length + 1) * Array.SIZE_RATIO);
        }

        // copy values one position to the right
        memory.copy(this.ptr + index + 1, this.ptr + index, this.length - index);
        // insert value at index
        memory.set(this.ptr + index, value)
        // add to array length
        this.length++
    }

    remove(index) {
        if (index < 0 || index >= this.length) {
            throw new Error('Index error');
        }

        memory.copy(this.ptr + index, this.ptr + index + 1, this.length - index - 1);
        this.length--;
    }
}

Array.SIZE_RATIO = 3

module.exports = Array

function main(){
    Array.SIZE_RATIO = 3;

    // Create an instance of the Array class
    let arr = new Array();

    // Add an item to the array
    arr.push(3);
    arr.push(5);
    arr.push(15);
    arr.push(19);
    arr.push(45);
    arr.push(10);

    console.log(arr.get(0));

    arr.pop()
    arr.pop()
    arr.pop()
    arr.pop()
    arr.pop()
    arr.pop()

    arr.push("tauhida")
    
    console.log(arr)
    console.log(arr.get(0))
}

main()