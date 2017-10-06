var express = require('express')
var router = express.Router()
import {index} from './controller'

router.route('/')
    .get(index)

export default router