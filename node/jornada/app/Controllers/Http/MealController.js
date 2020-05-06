'use strict'
const Meal = use("App/Models/Meal")

class MealController {

    async store({request}, response){
        const data = request.post()
        const meal = await Meal.create(data)
        return meal
    }
    async index ({ request, auth }) {
        const meals =  await Meal.all()
        return meals
    }
}
module.exports = MealController