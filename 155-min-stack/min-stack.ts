class MinStack {
    private stack
    constructor() {
       this.stack = []
    }

    push(val: number): void {
        this.stack.push({
            val,
            // the minimum value at the time of this push (always keeping track of min value currently)
            min: this.stack.length == 0 ? val: Math.min(val, this.getMin())
        })
    }

    pop(): void {
        this.stack.pop()
    }

    top(): number {
        return this.stack[this.stack.length - 1].val // returnung val
        
    }

    getMin(): number {
        // returning min of latast el
        return this.stack.length == 0 ? 0: this.stack[this.stack.length - 1].min
        
    }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */