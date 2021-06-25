const path = require('path')
const express = require('express')

const userController = require('../controllers/users')

const router = express.Router()

// /admin/add-user/ get method

router.get('/add-user', userController.getAddUsers)

// /admin/add-user/ post method

router.post('/add-user', userController.postAddUser)

exports.routes = router
