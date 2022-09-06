const userEntries = require('../models/UserEntry')

module.exports = {
    getAlliance: async (req, res) => {
        try {
            const allianceEntries = await userEntries.find({faction: 'alliance'})
            res.render('alliance', {entries: allianceEntries})
            
        } catch (err) {
            console.log(err)
        }

    },
    createEntry: async (req, res) => {
        try {
            const allianceEntry = req.body.entry
            await userEntries.create({faction: 'alliance', entry: allianceEntry, fake: false, userName: req.user.userName})
            res.redirect('/alliance')
            
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