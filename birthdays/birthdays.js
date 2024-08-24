function createBirthday(name, month, day)  {
    var birthdayObj = {
        name: name,
        month: month,
        day: day
    }
    return birthdayObj
}

function celebrateBirthday(birthdayObj) {
    return `Today is ${birthdayObj.month}/${birthdayObj.day}! Happy birthday, ${birthdayObj.name}!`
}

function countBirthdays(birthdaysArr, count) {
    var monthCount = 0
    for (var i = 0; i < birthdaysArr.length; i++) {
        if (birthdaysArr[i].month === count) {
            monthCount++
        }
    }
    return monthCount
}


module.exports = {  
    createBirthday,
    celebrateBirthday,
    countBirthdays
};