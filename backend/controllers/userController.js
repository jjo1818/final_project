const User = require('../models/userModel')

async function show(req, res) {
    try {
        const foundUser = await User.findById(req.id)
        res.json(foundUser)

    } catch (error) {
        res.json({ error: error.message })
    }
}

module.exports = {
    show
}