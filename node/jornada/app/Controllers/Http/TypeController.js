'use strict'
const Type = use("App/Models/Type")

class TypeController {

    async store({request}, response){
        const data = request.post()
        const type = await Type.create(data)
        return type
    }
    async index ({ request, auth }) {
        const types =  await Type.all()
        return types
    }
}
module.exports = TypeController