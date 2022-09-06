const express = require('express')
const router = express.Router()
const hordeController = require('../controllers/horde')

router.get('/', hordeController.getHorde)

router.post('/hordeEntry', hordeController.createEntry)

router.put('/markFake', hordeController.markFake)

router.put('/unmarkFake', hordeController.unmarkFake)

router.delete('/deleteEntry', hordeController.deleteEntry)

module.exports = router