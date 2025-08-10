const reorderedPowerOf2 = (n: number): boolean => {
    const getDigitSignature = (number: number): string => {
        return number.toString().split('').sort().join('');
    };
    
    const targetSignature = getDigitSignature(n);
    
    const UPPER_LIMIT = 1e9;
    
    let currentPowerOf2 = 1;
    
    while (currentPowerOf2 <= UPPER_LIMIT) {
        const powerOf2Signature = getDigitSignature(currentPowerOf2);
        
        if (powerOf2Signature === targetSignature) {
            return true;
        }
        
        currentPowerOf2 <<= 1;
    }
    
    return false;
};