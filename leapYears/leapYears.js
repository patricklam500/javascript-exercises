const leapYears = function(inYear) {
    
    //Error checking
    if((inYear%100 == 0) && (inYear%400 != 0))
        return false;
    else if (((inYear%100 == 0) && (inYear%400 == 0)))
        return true;
    else if (inYear%4 == 0)
        return true;
    else
        return false;

}

module.exports = leapYears

//if divisible by 4, TRUE
//if divisible by 100, FALSE done
//if divisible by 100 AND 400, TRUE