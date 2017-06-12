'use strict'
const store = require('../store.js')
const showPostsTemplate = require('../templates/post-display.handlebars')
const api = require('./api.js')
const getFormFields = require(`../../../lib/get-form-fields`)

const addPostSuccess = () => {
  $('input').val('')
  $('textarea').val('')
  console.log('add post success')
}

const addPostFailure = () => {
  $('input').val('')
  console.log('add post failure')
}

const onRemoveId = (event) => {
  const findId = $(event.target).attr('data-id')
  api.removeById(findId)
    .then(removePostSuccess)
  .then(() => {
    api.showPosts()
    .then(showPostSuccess)
    .catch(showPostFailure)
  })
  .catch(removePostFailure)
}

// const onUpdateId = (event) => {
//   const findId = $(event.target).attr('data-id')
//   api.updateById(findId)
//     .then(updatePostSuccess)
//   .then(() => {
//     api.showPosts()
//     .then(showPostSuccess)
//     .catch(showPostFailure)
//   })
//   .catch(updatePostFailure)
// }

// edit/remove post button launches the above code
const showPostSuccess = (response) => {
  console.log('show posts success')
  console.log(response)
  const showPostsHtml = showPostsTemplate({ posts: response.posts })
  $('.post-display').html(showPostsHtml)
  $('.remove-post-button').on('click', onRemoveId)
  // $('.edit-post-button').on('click', onUpdateId)
}

const showPostFailure = () => {
  console.log('failure showing posts')
}

const removePostSuccess = (response) => {
  $('input').val('')
  console.log('remove post success', response)
}

const removePostFailure = (response) => {
  $('input').val('')
  console.log('remove post success', response)
}

// const updatePostSuccess = (response) => {
//   console.log('update success')
// }
//
// const updatePostFailure = (response) => {
//   console.log('update failure')
// }

module.exports = {
  addPostSuccess,
  addPostFailure,
  showPostFailure,
  showPostSuccess
  // updatePostSuccess,
  // updatePostFailure
}
