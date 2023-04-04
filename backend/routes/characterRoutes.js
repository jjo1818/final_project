const express = require('express')

const router = express.Router()

const characterControl = require('../controllers/characterController')

const { authorize } = require('../middleware/authMiddleware')

// index
router.get('/', characterControl.index)

// delete
router.delete('/:id', authorize, characterControl.delete)

// update
router.put('/:id', authorize, characterControl.update)

// create
router.post('/', authorize, characterControl.create)

// show
router.get('/:id', characterControl.show)

module.exports = router