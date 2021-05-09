const removeFromArray = function(inputArray, ...removeEles) {
    let newArray = [];
    let x = 0;

    while (x <= removeEles.length) {
        for (i=0; i<inputArray.length; i++) {
            if(inputArray[i] === removeEles[x])
                inputArray.splice(i,1);
        }
        x++;
    }

    return inputArray;
}

module.exports = removeFromArray
