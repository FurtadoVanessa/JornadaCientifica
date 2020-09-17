'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Event extends Model {


    user(){
        return this.belongsTo('App/Models/User', 'speaker_id')
    }

    category(){
        return this.hasOne('App/Models/Category', 'category_id')
    }

    modality(){
        return this.hasOne('App/Models/Modality', 'modality_id')
    }

    userHistory(){
        return this.belongsToMany('App/Models/UserHistory', 'id','event_id')
    }



}

module.exports = Event
