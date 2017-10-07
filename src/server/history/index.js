var express = require('express')
var router = express.Router()

import { getHistory, createHistory } from './controller'

router.route('/')
    .get(getHistory)
    .post(createHistory)

export default router