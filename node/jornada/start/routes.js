'use strict'

const Route = use('Route')

Route.post('/register', 'UserController.store')
Route.post('/login', 'UserController.login')

Route.post('/logout', 'UserController.logout')

Route.get('/register', 'UserController.store')


Route.on('/').render('welcome')