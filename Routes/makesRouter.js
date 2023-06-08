const Router = require('express').Router()
const controller = require('../controllers/makeController.js')


Router.get('/', controller.getMakes)
Router.get('/:id', controller.getMakesById)


Router.get('/samsung', controller.getSamsungPhones)
Router.get('/google', controller.getGooglePhones)





module.exports = Router
