'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Grade extends Model {
  user() {
    return this.hasOne('App/Model/User', 'evaluator_id')
  }
  project() {
    return this.hasOne('App/Model/Project', 'project_id')
  }
}

module.exports = Grade
