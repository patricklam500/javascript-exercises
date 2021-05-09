const sumAll = function(beginNum, endNum) {
    let result = 0;

    //Error checking
    if ((beginNum<0) || (endNum<0) || (isNaN(beginNum)) || (isNaN(endNum)) ||
        (typeof(beginNum) == "string") || (typeof(endNum) == "string"))
            return "ERROR";

    //Sum all values between
    if(beginNum > endNum) {
        for(i=endNum; i<=beginNum; i++)
            result += i;

        console.log(result);
        return result;
    }

    for(x=beginNum; x<=endNum; x++)
        result += x;

    console.log(result);
    return result;
}

module.exports = sumAll
