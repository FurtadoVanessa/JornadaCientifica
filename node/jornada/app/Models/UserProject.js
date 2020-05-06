'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class UserProject extends Model {
  user(){
    return this.hasOne('App/Model/User', 'user_id')
  }

  project() {
    return this.hasOne('App/Model/Project', 'project_id')
  }
}

module.exports = UserProject
