function reverseWords(s: string): string {
    return s.split(" ").filter((w) => /\S/.test(w)).reverse().join(" ")
};