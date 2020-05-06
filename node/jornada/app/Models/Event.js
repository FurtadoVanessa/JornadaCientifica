'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Event extends Model {


    user(){
        return this.belongsTo('App/Model/User', 'speaker_id')
    }

    category(){
        return this.hasOne('App/Model/Category', 'category_id')
    }

    modality(){
        return this.hasOne('App/Model/Modality', 'modality_id')
    }

}

module.exports = Event
