const repeatString = function(stringRepeat, numRepeat) {
    let count = 0;
    let answer = "";

    if(numRepeat<0)
        return "ERROR";
    else {
        while (count<numRepeat) {
            answer += stringRepeat;
            count++;
        }
    }
    return answer;
}

module.exports = repeatString;
