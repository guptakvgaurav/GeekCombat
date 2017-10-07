var express = require('express')
var router = express.Router()

const controller = require('./controller')

router.route('/')
    .get(controller.getHistory)
    .post(controller.createHistory)
    .put(controller.updateHistory)

module.exports = router