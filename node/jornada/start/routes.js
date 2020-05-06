'use strict'

const Route = use('Route')

Route.post('/register', 'UserController.store')
Route.post('/login', 'UserController.login')

Route.group(() => {

    Route.post('/category', 'CategoryController.store')
    Route.post('/modality', 'ModalityController.store')
    Route.post('/project', 'ProjectController.store')
    Route.post('/event', 'EventController.store')
    Route.post('/userProject', 'UserProjectController.store')
    Route.post('/certificate', 'CertificateController.store')

}).middleware(['auth', 'admin'])

Route.group(() => {

    Route.post('/grade', 'GradeController.store')

}).middleware(['auth', 'evaluator'])

Route.group(() => {

    Route.post('/logout', 'UserController.logout')
    Route.get('/project', 'ProjectController.index')
    Route.get('/modality', 'ModalityController.index')
    Route.get('/category', 'CategoryController.index')
    Route.get('/grade', 'GradeController.index')
    Route.get('/userProject', 'UserProjectController.index') 
    Route.get('/meal', 'MealController.index')
    Route.get('/event', 'EventController.index')
    Route.get('/certificate', 'CertificateController.index')

}).middleware(['auth'])




Route.on('/').render('welcome')