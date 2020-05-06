'use strict'
const Event = use("App/Models/Event")

class EventController {

    async store({request}, response){
        const data = request.post()
        const event = await Event.create(data)
        return event
    }
    async index ({ request, auth }) {
        const events =  await Event.all()
        return events
    }
}
module.exports = EventController