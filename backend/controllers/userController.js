const User = require('../models/userModel')

async function show(req, res) {
    try {
        const foundUser = await User.findById(req.id)
        console.log(foundUser)
        res.json(foundUser)

    } catch (error) {
        res.json({ error: error.message })
    }
}

async function update(req, res) {
    try {
        const updateUser = await User.findByIdAndUpdate(req.id, req.body, {new: true} )
        res.status(200).json(updateUser) 
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

module.exports = {
    show, 
    update
}