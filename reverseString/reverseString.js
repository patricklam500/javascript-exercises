const reverseString = function(inputString) {
    let inputStringLength = inputString.length;
    let reString = new Array(inputStringLength);
    let lastCount = inputStringLength - 1;

    for (i=0; i<inputStringLength; i++){
        
        reString[i] = inputString[lastCount];
        lastCount--;
    }

    return reString.join("");
}

module.exports = reverseString
