const express = require('express')
const router = express.Router()
const userCtrl = require('../controllers/userController')


router.put('/:id', userCtrl.update)
router.get('/', userCtrl.show)


module.exports = router
