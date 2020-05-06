'use strict'
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

class Evaluator {
  /**
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Function} next
   */
  async handle ({ request }, next) {
    if(auth.user.type >= 2){
      await next()
    }else{
      console.log('RECUSADO. Não eh admin ou avaliador')
      return response.status(401)
    }
  }
}

module.exports = Evaluator
