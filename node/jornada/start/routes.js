'use strict'

const Route = use('Route')

Route.post('/register', 'UserController.store')
Route.post('/login', 'UserController.login')

Route.group(() => {

    Route.post('/category', 'CategoryController.store')
    Route.post('/modality', 'ModalityController.store')
    Route.post('/project', 'ProjectController.store')

}).middleware(['auth', 'admin'])



Route.group(() => {

    Route.post('/logout', 'UserController.logout')
    Route.get('/project', 'ProjectController.index')
    Route.get('/modality', 'ModalityController.index')
    Route.get('/category', 'CategoryController.index')

}).middleware(['auth'])


Route.on('/').render('welcome')