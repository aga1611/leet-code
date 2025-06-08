// A STACK is the ideal data structure for this problem because of how it handles Last-In, First-Out (LIFO) operations — which perfectly matches how brackets must be opened and closed in a valid sequence.

function isValid(s: string): boolean {
    // initialising stack
    const stack = [];

    // A mapping of closing brackets to their corresponding opening brackets
    const bracketMap = {
        ')': '(',
        ']': '[',
        '}': '{'
    };

    // iterate over all characters in the strings
    for (let char of s) {
        // Check if the character is a closing bracket:
        if (bracketMap[char]) {
            // If the stack isn't empty
            // if the top of the stack matches the corresponding opening bracke
            // pop it off the stack (i.e., brackets matched).
            if (stack.length > 0 && stack[stack.length - 1] === bracketMap[char]) {
                stack.pop();
            // If not, the brackets are mismatched → return false.
            } else {
                return false;
            }
        // If the character is an opening bracket
        // Push it onto the stack so it can be matched later with a closing bracket
        } else {
            stack.push(char);
        }
    }

    // At the end, if the stack is empty, all brackets matched correctly → return true.
    //If the stack is not empty → some brackets are unmatched → return false.
    return stack.length === 0;
};