'use strict'
const config = require('../config.js')
const store = require('../store.js')

const addsTask = (data) => {
  return $.ajax({
    url: config.apiOrigin + '/tasks',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

// const showsTasks = (data) => {
//   return $.ajax({
//     url: config.apiOrigin + '/tasks/',
//     method: 'GET',
//     headers: {
//       Authorization: 'Token token=' + store.user.token
//     },
//     data
//   })
// }
//
// const onRemoveById = (data) => {
//   return $.ajax({
//     url: config.apiOrigin + '/tasks/' + data,
//     method: 'DELETE',
//     headers: {
//       Authorization: 'Token token=' + store.user.token
//     },
//     data: data
//   })
// }

// updates without using id via ui and events code using store
// see notes in applicable files
// const onUpdateById = (data, findId) => {
//   event.preventDefault()
//   return $.ajax({
//     url: config.apiOrigin + '/tasks/' + findId,
//     method: 'PATCH',
//     headers: {
//       Authorization: 'Token token=' + store.user.token
//     },
//     data
//   })
// }

module.exports = {
  addsTask,
  showsTasks,
  onRemoveById,
  onUpdateById
}
