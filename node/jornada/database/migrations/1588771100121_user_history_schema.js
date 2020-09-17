'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserHistorySchema extends Schema {
  up () {
    this.create('user_histories', (table) => {
      table.increments()
      table.integer('event_id').unsigned().notNullable().references('id').inTable('events').onUpdate('CASCADE').onDelete('CASCADE')
      table.integer('user_id').unsigned().notNullable().references('id').inTable('users').onUpdate('CASCADE').onDelete('CASCADE')
      table.timestamps()
    })
  }

  down () {
    this.drop('user_histories')
  }
}

module.exports = UserHistorySchema
