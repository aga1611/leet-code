function compress(chars: string[]): number {
    let write = 0;  // Index where we write the compressed value
    let left = 0;   // Start of the current group

    for (let read = 0; read <= chars.length; read++) {
        // Check if end of group or end of array
        if (read === chars.length || chars[read] !== chars[left]) {
            // Write the character
            chars[write++] = chars[left];

            // Write the count if more than 1
            let count = read - left;
            if (count > 1) {
                const digits = count.toString();
                for (let digit of digits) {
                    chars[write++] = digit;
                }
            }

            // Move to the next group
            left = read;
        }
    }

    return write;
}



// this kinda works, but it's not in-place
// function compress(chars: string[]): number {
//     if(chars.length === 1) return 1;
//     let s = "";

//     let left = 0;
//     let right = 1;
//     let counter = 1;

//     while (right < chars.length) {
//         if (chars[right] === chars[left]) {
//             counter++;
//             right++;
//         } else {
//             s += chars[left];
//             s += counter;
//             left = right;
//             right++;
//             counter = 1
//         }
//     }

//     // last character edge case
//     s += chars[left];
//     s += counter;

//     for(let i = 0; i < s.length; i++) {
//         chars[i] = s[i]
//     }

//     console.log(chars);
//     return s.length

// };