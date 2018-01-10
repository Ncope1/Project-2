const express = require('express')
const router  = express.Router()
const mongoose = require('../db/connection')
const Routine = mongoose.model('Routine')

router.get('/', (req, res) => {
	Routine.find({})
	  .then((routines) => {
		res.render('routines-index', { routines: routines })
	  })
  })
  
router.get('/:title', (req, res) => {
	var title = req.params.title
	Routine.findOne({ title: title })
	.then(routine => {
		res.render('routines-show', { routine: routine })
	})
})

router.post('/', (req, res) => {
Routine.create(req.body.routine)
	.then(routine => {
	res.redirect(`/routines/${routine.title}`)
	})
})

router.put('/:title', (req, res) => {
Routine.findOneAndUpdate({ title: req.params.title }, req.body.routine, { new: true })
.then(routine => {
	res.redirect(`/routines/${routine.title}`)
})
})
  
router.delete('/:title', (req, res) => {
Routine.findOneAndRemove({ title: req.params.title })
.then(routine => {
	res.redirect('/routines')
})
})

module.exports = router