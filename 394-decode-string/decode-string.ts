function decodeString(s: string): string {
    const stack: (string | number)[] = [];

    for (let char of s) {
        if (char !== "]") {
            stack.push(char);
        } else {
            // Build the substring
            let substring = "";
            while (stack.length && stack[stack.length - 1] !== "[") {
                substring = stack.pop() + substring;
            }

            // Pop the '['
            stack.pop();

            // Build the number (could be multiple digits)
            let k = "";
            while (stack.length && /\d/.test(stack[stack.length - 1] as string)) {
                k = stack.pop() + k;
            }

            const repeated = substring.repeat(Number(k));
            stack.push(repeated);
        }
    }

    return stack.join("");
}
