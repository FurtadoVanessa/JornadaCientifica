'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class UserHistory extends Model {
  user(){
    return this.belongsToMany('App/Models/User', 'user_id', 'id')
  }

  event() {
    return this.hasMany('App/Models/Event', 'event_id', 'id')
  }
}

module.exports = UserHistory
