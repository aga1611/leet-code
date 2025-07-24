function maximumGain(s: string, x: number, y: number): number {
    if (x > y){
        return getMax(s, 'a', 'b', x, y);
    } else {
        return getMax(s, 'b', 'a', y, x);
    }
    function getMax(s: string, a: string, b: string, x: number, y: number): number {
        let c1 = 0, c2 = 0, ans = 0;
        s += 'c';
        for (let c of s){
            if (c === a){
                c1++;
            } else if (c === b){
                if (c1 === 0){
                    c2++;
                } else {
                    ans += x;
                    c1--;
                }
            } else {
                ans += y * Math.min(c1, c2);
                c1 = c2 = 0;
            }
        }
        return ans;
    }
};