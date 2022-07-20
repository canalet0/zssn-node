const express = require('express')
const router = express.Router()
const controller = require('../controllers/SurvivorController')

router.post('/', controller.createSurvivor)

module.exports = router
