function findWordsContaining(words: string[], x: string): number[] {
    const indexArray = []
    for(let i = 0; i < words.length; i++) {
        const splitWord = new Set(words[i].split(""));
        for(const letter of splitWord) {
            if(letter === x) {
                indexArray.push(i)
            }
        }
    }
    return indexArray;
};