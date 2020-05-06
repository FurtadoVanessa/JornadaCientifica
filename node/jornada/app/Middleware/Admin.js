'use strict'
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

class Admin {
  /**
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Function} next
   */
  async handle ({ response, auth }, next) {
    if(auth.user.type === 3){
      await next()
    }else{
      console.log('RECUSADO. Não eh admin')
      return response.status(401)
    }
  }
}

module.exports = Admin
