const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.send('Routes Home page')
})

module.exports = router