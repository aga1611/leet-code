// Time complexity: O(n)
// Space complexity: O(n)

function uniqueOccurrences(arr: number[]): boolean {
    // using map for better type safetly and slightly better performance
    const map = new Map<number,number>();

    for(let number of arr) {
        map.set(number, (map.get(number) || 0) + 1);
    }

    const values = Array.from(map.values());
    const set = new Set(values);

    return values.length === set.size;
};