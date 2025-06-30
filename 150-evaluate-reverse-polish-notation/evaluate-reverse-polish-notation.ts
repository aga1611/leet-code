/*
Use a stack:
Iterate through each token:
If it's a number, push it onto the stack.
If it's an operator, pop the top two numbers from the stack, apply the operation, then push the result back
At the end, the stack should contain a single number: the result.
*/

function evalRPN(tokens: string[]): number {
    const stack = [];

    for(let s of tokens) {
        if(["+", "-", "*", "/"].includes(s)) {
            let b = stack.pop();
            let a = stack.pop();
            let result;

            switch (s) {
                case "+": result = a + b; break;
                case "-": result = a - b; break;
                case "*": result = a * b; break;
                case "/": result = Math.trunc(a / b); break; // truncate toward zero
            }

            stack.push(result)
        } else {
            stack.push(Number(s))
        }
    }
    return stack.pop()
};