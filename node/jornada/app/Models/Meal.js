'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Meal extends Model {


    user(){
        return this.hasMany('App/Model/User', 'user_id')
    }

    type(){
        return this.hasMany('App/Model/Type', 'type_id')
    }

}

module.exports = Meal
