// Balancing parentheses - hackerrank

function getMin(s) {
    let result = 0;
    let balancer = 0;
    s.split("").forEach(pare => {
        if (pare === "(") {
            balancer++;
        }
        else {
            if (balancer === 0) {
                result++;
            } else {
                balancer--;
            }
        }
    })
    // balancer is equal to the number of "(" left
    // we need to add the same number of ")" to balance the parentheses
    return result + balancer;
}