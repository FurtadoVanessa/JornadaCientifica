'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class EventSchema extends Schema {
  up () {
    this.create('events', (table) => {
      table.increments()
      table.string('name', 200).notNullable()
      table.string('hour', 200).notNullable()
      table.integer('speaker_id').unsigned().references('id').inTable('users').onUpdate('CASCADE').onDelete('CASCADE')
      table.integer('category_id').unsigned().references('id').inTable('categories').onUpdate('CASCADE').onDelete('CASCADE')
      table.integer('modality_id').unsigned().references('id').inTable('modalities').onUpdate('CASCADE').onDelete('CASCADE')
      table.timestamps()
    })
  }

  down () {
    this.drop('events')
  }
}

module.exports = EventSchema
