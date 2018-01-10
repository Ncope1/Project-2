const express = require('express')
const router  = express.Router()

router.get('/', (req, res) => {
	res.render('index')
})

router.get('/removal', (req, res) => {
	res.render('removal')

})

router.get('/cleansing', (req, res) => {
	res.render('cleansing')

})

router.get('/treatment', (req, res) => {
	res.render('treatment')

})

module.exports = router