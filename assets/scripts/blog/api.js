'use strict'
const config = require('../config.js')
const store = require('../store.js')

const addPost = (data) => {
  return $.ajax({
    url: config.apiOrigin + '/posts',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const showPosts = (data) => {
  return $.ajax({
    url: config.apiOrigin + '/posts/',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const removeById = (data) => {
  return $.ajax({
    url: config.apiOrigin + '/posts/' + data,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: data
  })
}

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
  addPost,
  showPosts,
  removeById
  // onUpdateById
}
