'use strict'
const Grade = use("App/Models/Grade")

class GradeController {

    async store({request}, response){
        const data = request.post()
        const grade = await Grade.create(data)
        return grade
    }
    async index ({ request, auth }) {
        const grades =  await Grade.all()
        return grades
    }
}
module.exports = GradeController