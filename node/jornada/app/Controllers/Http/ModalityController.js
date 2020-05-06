'use strict'

const Modality = use("App/Models/Modality")

class ModalityController {

    async store({request}, response){
        const data = request.post()
        const modality = await Modality.create(data)
        return modality
    }

    async index ({ request, auth }) {
        const modalities =  await Modality.all()
        return modalities
    }
}

module.exports = ModalityController