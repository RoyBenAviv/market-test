import axios from 'axios'
import { httpService } from './http.service'

axios.defaults.withCredentials = true

export const marketService = {
  query,
  getMarketerById,
  removeMarketer,
  updateMarketer,
}

async function query(filterBy) {
  return await httpService.get('market', filterBy)
}

async function getMarketerById(marketerId) {
  return await httpService.get(`market/${marketerId}`)
}

async function removeMarketer(marketerId) {
  return await httpService.delete(`market/${marketerId}`)
}

async function updateMarketer(marketer) {
  if (marketer._id) {
    return await httpService.put(`market/${marketer._id}`, marketer)
  } else {
    return await httpService.post('market', marketer)
  }
}
