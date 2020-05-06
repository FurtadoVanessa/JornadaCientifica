'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CertificateSchema extends Schema {
  up () {
    this.create('certificates', (table) => {
      table.increments()
      table.integer('user_id').unsigned().notNullable().references('id').inTable('users').onUpdate('CASCADE').onDelete('CASCADE')
      table.integer('project_id').unsigned().notNullable().references('id').inTable('projects').onUpdate('CASCADE').onDelete('CASCADE')
      table.integer('modality_id').unsigned().references('id').inTable('modalities').onUpdate('CASCADE').onDelete('CASCADE')
      table.integer('event_id').unsigned().references('id').inTable('events').onUpdate('CASCADE').onDelete('CASCADE')
      table.timestamps()
    })
  }

  down () {
    this.drop('certificates')
  }
}

module.exports = CertificateSchema
