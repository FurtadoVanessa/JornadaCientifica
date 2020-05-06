'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserProjectSchema extends Schema {
  up () {
    this.create('user_projects', (table) => {
      table.increments()
      
      table.timestamps()
    })
  }

  down () {
    this.drop('user_projects')
  }
}

module.exports = UserProjectSchema
