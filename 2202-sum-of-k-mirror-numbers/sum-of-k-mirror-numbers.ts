// CRAZY QUESTION PART OF DAILY CHALLENGES

function kMirror(k: number, n: number): number {
    let ans = 0;

    // generating palindromes in base 10
    // increases palindrome length l starting from 1, going indefinitely until n palindromes are found.
    for (let l = 1; ; l++) {
        // x and y define the range of the "left half" of the palindrome digits:
        const x = Math.pow(10, Math.floor((l - 1) / 2));
        const y = Math.pow(10, Math.floor((l + 1) / 2));


        for (let i = x; i < y; i++) {
            //Constructing the full palindrome:
            // v starts as the left half (i).
            let v = i;
            // j is set to: If l is even, j = i If l is odd, j = floor(i / 10)
            let j = l % 2 === 0 ? i : Math.floor(i / 10);
            // The while loop appends the reverse of j's digits to v:
            while (j > 0) {
                v = v * 10 + (j % 10);
                j = Math.floor(j / 10);
            }

            // Result: v is the full palindrome number of length l.

            // check if v is palindrome in base k
            if (check(v, k)) {
                ans += v;
                n--;
                if (n === 0) {
                    // terminate when done
                    return ans;
                }
            }
        }
    }
}

    // checks if x is palindrome in baseK
    // converts the number x into an array of digits in base k and checks if this array is symmetric (palindromic).
    function check(x: number, k: number): boolean {
        const s: number[] = [];
        while (x > 0) {
            s.push(x % k);  // Push the remainder of x divided by k (the digits in base k)
            x = Math.floor(x / k);  // Move to the next digit
        }
        // Now s contains the digits of x in base k, least significant digit first

        // Check if s is a palindrome
        for (let i = 0, j = s.length - 1; i < j; i++, j--) {
            if (s[i] !== s[j]) {
                return false;  // If mismatch, not a palindrome
            }
        }
        return true;  // Otherwise, it is a palindrome in base k
    }