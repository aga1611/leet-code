function reverseWords(s: string): string {
    // split into array with separate words
    let array = s.split(" ");
    // create a new string
    let reversedString = "";

    // go through the array from the end
    for(let i = array.length - 1; i >= 0; i--) {
        // if it's space continue
        if(array[i] === "") continue;
        // if there is already a word in the string, add space
        if(reversedString.length > 0) reversedString += " ";
        // add word to the string
        reversedString += array[i]
    }
    
    return reversedString
};

// function reverseWords(s: string): string {
//     return s.split(" ").filter((w) => /\S/.test(w)).reverse().join(" ")
// };