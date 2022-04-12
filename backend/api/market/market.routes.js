const express = require('express')
const { getMarketers, getMarketerById, addMarketer, updateMarketer, removeMarketer } = require('./market.controller')
const router = express.Router()

router.get('/', getMarketers)
router.get('/:id', getMarketerById)
router.post('/', addMarketer)
router.put('/:id', updateMarketer)
router.delete('/:id', removeMarketer)

module.exports = router