function uniqueOccurrences(arr: number[]): boolean {
    const dictionary = {};

    for(let number of arr) {
        dictionary[number] = (dictionary[number] || 0) + 1
    }

    const values = Object.values(dictionary);
    const set = new Set(values);

    return values.length === set.size;
};