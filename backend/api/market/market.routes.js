const express = require('express')
const { getMarketers, getMarketerById, addMarketer } = require('./market.controller')
const router = express.Router()

router.get('/', getMarketers)
router.get('/:id', getMarketerById)
router.post('/', addMarketer)
// router.put('/:id', updateBoard)
// router.delete('/:id', removeBoard)

module.exports = router