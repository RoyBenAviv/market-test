const marketService = require('./market.service.js')
const logger = require('../../services/logger.service')

async function getMarketers(req, res) {
  try {
    // var filterBy = req.query
    // logger.info('filterBy', filterBy)
    // const marketers = await marketService.query(filterBy)
    const marketers = await marketService.query()
    res.json(marketers)
  } catch (err) {
    logger.error('Failed to load marketers', err)
    res.status(500).send({ err: 'Failed to get marketers' })
  }
}

async function getMarketerById(req, res) {
  try {
    var filterBy = req.query
    const marketerId = req.params.id
    var marketer = await marketService.getById(marketerId)
    // if (filterBy.type === 'sort') {
    //   var idx = marketer.groups.findIndex((g) => g.id === filterBy.groupId)
    //   logger.info('idx', idx)
    //   var newGroup = _sort(marketer.groups[idx], filterBy)
    //   logger.info('newGroup', newGroup)
    //   marketer.groups.splice(idx, 1, newGroup)
    // }
    res.json(marketer)
  } catch (err) {
    logger.error('Failed to get marketer', err)
    res.status(500).send({ err: 'Failed to get marketer' })
  }
}

async function addMarketer(req, res) {
  try {
    const marketer = req.body
    console.log(marketer);
    const addedMarketer = await marketService.add(marketer)
    res.json(addedMarketer)
  } catch (err) {
    logger.error('Failed to add marketer', err)
    res.status(500).send({ err: 'Failed to add marketer' })
  }
}

async function updateMarketer(req, res) {
  try {
    logger.info('Backend updateBoard')
    const marketer = req.body
    const updatedMarketer = await marketService.update(marketer)
    res.json(updatedMarketer)
  } catch (err) {
    logger.error('Failed to update marketer', err)
  }
}

async function removeMarketer(req, res) {
  try {
    const marketerId = req.params.id
    const removedId = await marketService.remove(marketerId)
    res.send(removedId)
  } catch (err) {
    logger.error('Failed to remove marketer', err)
    res.status(500).send({ err: 'Failed to remove marketer' })
  }
}

module.exports = {
  getMarketers,
  getMarketerById,
  addMarketer,
  updateMarketer,
  removeMarketer,
}

function _sort(group, { sortBy }) {
  if (!sortBy) return

  switch (sortBy) {
    case 'createdNew':
      group.cards.sort((c1, c2) => c2.createdAt - c1.createdAt)
      break
    case 'createdOld':
      group.cards.sort((c1, c2) => c1.createdAt - c2.createdAt)
      break
    case 'name':
      group.cards.sort((c1, c2) => c1.title.localeCompare(c2.title))
      break
    case 'dueDate':
      logger.info('dueDate')
      var cardsDue = []
      var cardsWithoutDue = []
      group.cards.forEach((c) => {
        c.dueDate ? cardsDue.push(c) : cardsWithoutDue.push(c)
      })
      ;(c) => !c.dueDate
      cardsDue.sort((c1, c2) => c1.dueDate - c2.dueDate)
      group.cards = cardsDue.concat(cardsWithoutDue)
      break
  }
  return group
}

function _filter(board) {
  const filterBy = board.filterBy
  logger.info('filterBy', filterBy)
  if (filterBy.by.none) {
    board.groups = board.groups.map((group) => {
      group.cards = group.cards.filter((card) => card.memberIds.length === 0)
      return group
    })
    logger.info('filterBy.by.none')
  } else {
    if (filterBy.by.options.length) {
      board.groups = board.groups.map((group) => {
        group.cards = group.cards.filter((card) => {
          card.memberIds = card.memberIds.filter((memberId) => filterBy.by.options.includes(memberId))
          if (card.memberIds.length) return card
        })
        return group
      })
      logger.info('filterBy.by.options')
    }
  }
  if (filterBy.due.none) {
    board.groups = board.groups.map((group) => {
      group.cards = group.cards.filter((card) => !card.dueDate)
      return group
    })
  } else if (filterBy.due.over) {
    board.groups = board.groups.map((group) => {
      group.cards = group.cards.filter((card) => card.dueDate > Date.now())
      return group
    })
  } else if (filterBy.due.tommarow) {
    board.groups = board.groups.map((group) => {
      group.cards = group.cards.filter((card) => this.calcIfTommarow(card.dueDate))
      return group
    })
  }
  if (filterBy.label.none) {
    board.groups = board.groups.map((group) => {
      group.cards = group.cards.filter((card) => card.labelIds.length === 0)
      return group
    })
  } else {
    if (filterBy.label.options.length) {
      board.groups = board.groups.map((group) => {
        group.cards = group.cards.filter((card) => {
          card.labelIds = card.labelIds.filter((labelId) => filterBy.label.options.includes(labelId))
          if (card.labelIds.length) return card
        })
        return group
      })
    }
  }
  return board
}
