const userEntries = require('../models/UserEntry')

module.exports = {
    getHorde: async (req, res) => {
        try {
            const hordeEntries = await userEntries.find({faction: 'horde'})
            res.render('horde', {entries: hordeEntries})
            
        } catch (err) {
            console.log(err)
        }

    },
    createEntry: async (req, res) => {
        try {
            const hordeEntry = req.body.entry
            await userEntries.create({faction: 'horde', entry: hordeEntry, fake: false, userName: req.user.userName})
            res.redirect('/horde')
            
        } catch (err) {
            console.log(err)
        }

    },
    markFake: async (req, res) => {
        try {
            const entryId = req.body.id 
            await userEntries.findOneAndUpdate({_id: entryId}, {
                fake: true
            })
            res.json('marked fake')
        } catch (err) {
            console.log(err)
        }

    },
    unmarkFake: async (req, res) => {
        try {
            const entryId = req.body.id 
            await userEntries.findOneAndUpdate({_id: entryId}, {
                fake: false
            })
            res.json('unmarked fake')
            
        } catch (err) {
            console.log(err)
        }

    },
    deleteEntry: async (req, res) => {
        try {
            const entryId = req.body.id
            await userEntries.findOneAndDelete({_id: entryId})
            res.json('Deleted It')
            
        } catch (err) {
            console.log(err)
        }

    }
}