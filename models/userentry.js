const mongoose = require('mongoose')

const userEntrySchema = new mongoose.Schema({
    faction: {
        type: String,
        required: true
    },
    entry: {
        type: String,
        required: true
    },
    fake: {
        type: Boolean,
        required: true
    },
    userName: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('UserEntry', userEntrySchema)