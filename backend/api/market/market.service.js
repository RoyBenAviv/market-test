const dbService = require('../../services/db.service')
const ObjectId = require('mongodb').ObjectId
const logger = require('../../services/logger.service')

async function query(filterBy) {
  const criteria = {}
  try {
    const collection = await dbService.getCollection('marketer')
    var marketers = await collection.find(criteria).toArray()
    return marketers
  } catch (err) {
    throw err
  }
}

async function getById(marketerId) {
  try {
    const collection = await dbService.getCollection('marketer')
    const marketer = collection.findOne({ _id: ObjectId(marketerId) })
    return marketer
  } catch (err) {
    logger.error(`cannot find marketer: ${marketerId}`, err)
    throw err
  }
}

async function add(marketer) {
  try {
    // if(_validateEmail(marketer.email)) throw new Error('This email already submitted')
    console.log('marketer',marketer);
    const collection = await dbService.getCollection('marketer')
    const {ops} = await collection.insertOne(marketer)
    return ops[0]
  } catch (err) {
    logger.error('cannot insert marketer', err)
    throw err
  }
}

async function update(marketer) {
  try {
    var id = ObjectId(marketer._id)
    delete marketer._id
    const collection = await dbService.getCollection('marketer')
    await collection.updateOne({ _id: id }, { $set: { ...marketer } })
    marketer._id = id
    return marketer
  } catch (err) {
    logger.error(`cannot update marketer ${marketer._id}`, err)
    throw err
  }
}

async function remove(marketerId) {
  try {
    const collection = await dbService.getCollection('marketer')
    await collection.deleteOne({ _id: ObjectId(marketerId) })
    return marketerId
  } catch (err) {
    logger.error(`cannot remove marketer ${marketerId}`, err)
    throw err
  }
}

async function _validateEmail(email) {
    const users = await query()
    var res = users.find(u => u.email === email)
    console.log('res',res);
    // return users.find(u => u.email === email)
    return false
}

module.exports = {
  query,
  getById,
  add,
  update,
  remove,
}

function _buildCriteria(filterBy) {
  const criteria = {}
  // if (filterBy.name) {
  //     const txtCriteria = { $regex: filterBy.name , $options: 'i' }
  //     criteria.$or = [
  //         {
  //             name: txtCriteria
  //         }
  //     ]
  // }
  if (filterBy.isStarred) {
    criteria.isStarred = { $eq: JSON.parse(filterBy.isStarred) }
  }

  if (filterBy.recentlyViewed) {
    criteria.recentlyViewed = { $gte: Date.now() -  1648684800} //in the last 24 hours
    // criteria.recentlyViewed = { $gte: Date.now() -  11540793600} //in the last week
  }
  // if (filterBy.workspace) {
  //   criteria.isStarred = { $eq: false }
  // }
  // if(filterBy.labels) {
  //     criteria.labels = { $in: filterBy.labels }
  // }
  return criteria
}
