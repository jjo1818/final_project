const Character = require('../models/characterModel')
// const Comments = require('../models/commentModel')


module.exports.index = async (req, res) => {
    try {
        const characters = await Character.find().sort({ createdAt: 1 })
        res.status(200).json(characters)
    } catch(err) {
        res.status(400).json({ error: err.message })
    }
}

module.exports.delete = async (req, res) => {
    try {
        // first find the post, store it in a variable, then delete it from database
        const character = await Character.findByIdAndDelete(req.params.id)
        // delete all comments where the comment id 
        
        res.status(200).json({ message: 'deleted successfully' })
    } catch(err) {
        res.status(400).json({ error: err.message })
    }
}

module.exports.update = async (req, res) => {
    try {
        // add a third argument to the update { new: true } to return the new updated version of the document
        const updatedCharacter = await Character.findByIdAndUpdate(req.params.id, req.body, { new: true })
        res.status(200).json(updatedCharacter)
    } catch(err) {
        res.status(400).json({ error: err.message })
    }
}

module.exports.create = async (req, res) => {
    try {
        const character = await Character.create(req.body)
        res.status(200).json(character)
    } catch(err) {
        res.status(400).json({ error: err.message })
    }
}

module.exports.show = async (req, res) => {
    try {
        // populate replaces the ids with actual documents/objects we can use
        const character = await Character.findById(req.params.id)
        res.status(200).json(character)
    } catch(err) {
        res.status(404).json({ error: err.message })
    }
}


