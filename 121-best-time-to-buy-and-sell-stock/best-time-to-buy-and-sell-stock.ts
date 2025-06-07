function maxProfit(prices: number[]): number {
    //set the buyPrice from day 1
    let buyPrice = prices[0];

    // if trade not possible return 0
    let max = 0;

    for(let price of prices) {
        // if price is lower, update the buyPrice (want the lowest
        if(price < buyPrice) {
            buyPrice = price
        } else {
            // calculate profit
            let currentProfit = price - buyPrice;
            // check if profit is bigger
            max = Math.max(currentProfit, max)
        }
    }
    return max
};