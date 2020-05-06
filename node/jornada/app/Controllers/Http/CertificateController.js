'use strict'

const Certificate = use("App/Models/Certificate")


class CertificateController {

    async store({request}, response){
        const data = request.post()
        const certificate = await Certificate.create(data)
        return certificate
    }

    async index ({ request, auth }) {
        const certificates =  await Certificate.all()
        return certificates
    }


}

module.exports = CertificateController