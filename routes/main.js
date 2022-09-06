const express = require('express')
const router = express.Router()
const authController = require('../controllers/auth') // add authcontroller
const homeController = require('../controllers/home') // add homecontroller
const { ensureAuth, ensureGuest } = require('../middleware/auth')

router.get('/', homeController.getIndex)  
router.get('/home', homeController.getHomePage)
router.get('/login', authController.getLogin)
router.post('/login', authController.postLogin)
router.get('/logout', authController.logout)    
router.get('/signup', authController.getSignup)
router.post('/signup', authController.postSignup)

module.exports = router