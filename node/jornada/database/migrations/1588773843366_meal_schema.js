'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MealSchema extends Schema {
  up () {
    this.create('meals', (table) => {
      table.increments()
      table.integer('user_id').unsigned().notNullable().references('id').inTable('users').onUpdate('CASCADE').onDelete('CASCADE')
      table.integer('type_id').unsigned().notNullable().references('id').inTable('types').onUpdate('CASCADE').onDelete('CASCADE')
      table.string('dateTime', 200).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('meals')
  }
}

module.exports = MealSchema
