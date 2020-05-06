'use strict'

const Category = use("App/Models/Category")


class CategoryController {

    async store({request}, response){
        const data = request.post()
        const category = await Category.create(data)
        return category
    }

    async index ({ request, auth }) {
        const categories =  await Category.all()
        return categories
    }


}

module.exports = CategoryController