// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

var maxProfit = function (prices) {
    if (prices.length < 2) return 0;

    let lowestPrice = 10000;
    let maxProfit = 0;

    // at every step you find either a lower price to buy at
    // or a price that generates higher profits
    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < lowestPrice) {
            lowestPrice = prices[i];
        } else if (prices[i] - lowestPrice > maxProfit) {
            maxProfit = prices[i] - lowestPrice;
        }
    }

    return maxProfit;
};
