'use strict'

const Project = use("App/Models/Project")

class ProjectController {

    async store({request}, response){
        const data = request.post()
        const project = await Project.create(data)
        return project
    }

    async index ({ request, auth }) {
        const projects =  await Project.all()
        return projects
    }
}

module.exports = ProjectController