const express = require('express')
const router = express.Router()

router.get('/', (res, req) => {
    res.setEncoding('Routes Home page')
})

module.exports = router