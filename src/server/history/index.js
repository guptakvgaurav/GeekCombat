var express = require('express')
var router = express.Router()

import { getHistory, createHistory, updateHistory } from './controller'

router.route('/')
    .get(getHistory)
    .post(createHistory)
    .put(updateHistory)

export default router