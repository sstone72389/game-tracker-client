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

const addVid = (data) => {
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

const updateById = (data, findId) => {
  event.preventDefault()
  return $.ajax({
    url: config.apiOrigin + '/posts/' + findId,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

module.exports = {
  addPost,
  addVid,
  showPosts,
  removeById,
  updateById
}
