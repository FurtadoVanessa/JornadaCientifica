'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CertificateSchema extends Schema {
  up () {
    this.create('certificates', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('certificates')
  }
}

module.exports = CertificateSchema
