function isPalindrome(s: string): boolean {
    // removing whitespaces and characters (want to have numbers and letters)
    s = s.replace(/[^A-Za-z0-9]/g, '');
    const splitString = s.split("");

    // empty string case
    if(splitString.length === 0){
        return true
    }

    // 2 pointers from start to end
    let start = 0;
    let end = splitString.length - 1;

    while(start < splitString.length){
        // comparing letters at indexes - toLowerCase so it's not case sensitive
        if(splitString[start].toLowerCase() === splitString[end].toLowerCase()) {
            start++;
            end--;
        } else {
            return false
        }
    }
    return true;
    
};