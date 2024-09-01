function createMeal(type, calorieGoal) {
    var meal = {
        type: type,
        calorieGoal,
        dishes: []
    }
    return meal
}

function addDish(mealObj, dishObj) {
    if (dishObj.calories <= mealObj.calorieGoal) {
    mealObj.dishes.push(dishObj);
    mealObj.calorieGoal = mealObj.calorieGoal - dishObj.calories
    }
    return mealObj
}

function calculateCalories(mealObj) {
    var totalCal = 0;
    for (var i = 0; i < mealObj.dishes.length; i++) {
        totalCal += mealObj.dishes[i].calories
    }
    return `${mealObj.type} has a total of ${totalCal} calories`
}



module.exports = { 
    createMeal, 
    addDish, 
    calculateCalories 
}