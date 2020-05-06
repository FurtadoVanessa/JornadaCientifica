'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserProjectSchema extends Schema {
  up () {
    this.create('user_projects', (table) => {
      table.increments()
      table.integer('project_id').unsigned().notNullable().references('id').inTable('projects').onUpdate('CASCADE').onDelete('CASCADE')
      table.integer('user_id').unsigned().notNullable().references('id').inTable('users').onUpdate('CASCADE').onDelete('CASCADE')
      table.timestamps()
    })
  }

  down () {
    this.drop('user_projects')
  }
}

module.exports = UserProjectSchema
