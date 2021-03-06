'use strict'
const UserHistory = use("App/Models/UserHistory")
const Event = use("App/Models/Event")

class UserHistoryController {

    async store({auth, request}){
        const {event_id} = request.post()
        const {id} = auth.user;
        await Event.findOrFail(event_id)
        return await UserHistory.create({user_id:id, event_id})
    }
    async index ({auth}) {
        const {id} = auth.user;
        return await UserHistory.query().with('event').select('event_id').where('user_id', '=', id).fetch()
    }
}
module.exports = UserHistoryController