var express = require('express')
var router = express.Router()
import { getHistory } from './controller'

router.route('/')
    .get(getHistory)

export default router