'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class GradeSchema extends Schema {
  up () {
    this.create('grades', (table) => {
      table.increments()
      table.integer('grade').unsigned().notNullable()
      table.integer('evaluator_id').unsigned().notNullable().references('id').inTable('users').onUpdate('CASCADE').onDelete('CASCADE')
      table.integer('project_id').unsigned().notNullable().references('id').inTable('projects').onUpdate('CASCADE').onDelete('CASCADE')
      table.timestamps()
    })
  }

  down () {
    this.drop('grades')
  }
}

module.exports = GradeSchema
