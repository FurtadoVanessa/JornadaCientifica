'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Certificate extends Model {
  user() {
    return this.hasOne('App/Model/User', 'user_id')
  }
  project() {
    return this.hasOne('App/Model/Project', 'project_id')
  }
  event() {
    return this.hasOne('App/Model/Event', 'event_id')
  }
  modality() {
    return this.hasOne('App/Model/Modality', 'modality_id')
  }
}

module.exports = Certificate
