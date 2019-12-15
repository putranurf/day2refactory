const express = require('express')
const router = express.Router()

router.post('/address', (req, res) => {
    console.log(req.body)
    res.json({
        message: 'Ini post'
    })
})

router.get('/users', (req, res) => {
    console.log(req.body)
    res.json({
        message: 'Ini get'
    })
})

module.exports = router