function gcdOfStrings(str1: string, str2: string): string {
    // Helper to check if one string can be built by repeating another
    function isDivisible(str: string, base: string): boolean {
        if (str.length % base.length !== 0) {
            return false;
        }
        return base.repeat(str.length / base.length) === str;
    }

    // Helper to compute GCD of two numbers
    function gcd(a: number, b: number): number {
        while (b !== 0) {
            const temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    }

    // Find the GCD of the lengths
    const lenGCD = gcd(str1.length, str2.length);
    const candidate = str1.slice(0, lenGCD);

    // Check if this candidate divides both strings
    if (isDivisible(str1, candidate) && isDivisible(str2, candidate)) {
        return candidate;
    }

    return "";
}
