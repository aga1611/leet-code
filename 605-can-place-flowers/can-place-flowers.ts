function canPlaceFlowers(flowerbed: number[], n: number): boolean {
    // EDGE CASES !!!!!
    if(n === 0) return true;
    let potentialFlowers = 0;
    let left = 0;

    while (left < flowerbed.length) {

        if (flowerbed[left] === 1) {
            left++;
        } else {
            if ((flowerbed[left - 1] === undefined && flowerbed[left + 1] === 0) || (flowerbed[left - 1] === 0 && flowerbed[left + 1] === 0) || (flowerbed[left - 1] === 0 && flowerbed[left + 1] === undefined) || (flowerbed[left - 1] === undefined && flowerbed[left + 1] === undefined)) {
                potentialFlowers++;
                flowerbed[left] = 1;
            } 
            left++;
        }

                if (potentialFlowers === n) {
            return true
        }

    }
    return false

};