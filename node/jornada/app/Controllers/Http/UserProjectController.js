'use strict'
const UserProject = use("App/Models/UserProject")

class UserProjectController {

    async store({request}, response){
        const data = request.post()
        const userProject = await UserProject.create(data)
        return userProject
    }
    async index ({ request, auth }) {
        const userProjects =  await UserProject.all()
        return userProjects
    }
}
module.exports = UserProjectController