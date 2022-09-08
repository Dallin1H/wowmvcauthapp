const express = require('express')
const router = express.Router()
const allianceController = require('../controllers/alliance')
const { ensureAuth, ensureGuest } = require('../middleware/auth')

router.get('/', ensureAuth, allianceController.getAlliance)

router.post('/allianceEntry', allianceController.createEntry)

router.put('/markFake', allianceController.markFake)

router.put('/unmarkFake', allianceController.unmarkFake)

router.delete('/deleteEntry', allianceController.deleteEntry)

module.exports = router