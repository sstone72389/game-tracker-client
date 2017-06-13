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

// requires store and when first edit button is clicked
// this is used to pass on to the modals click handler in events
// (onUpdatePost function)
const onUpdateId = (event) => {
  console.log('at ui', event)
  event.preventDefault()
  const data = getFormFields(event.target)
  const findId = $(event.target).attr('data-id')
  store.currentId = findId
}

// edit/remove post button launches the above code
const showPostSuccess = (response) => {
  console.log('show posts success')
  console.log(response)
  const showPostsHtml = showPostsTemplate({ posts: response.posts })
  $('.post-display').html(showPostsHtml)
  $('.remove-post-button').on('click', onRemoveId)
  $('.edit-post-button').on('click', onUpdateId)
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

const updatePostSuccess = (response) => {
  console.log('update success')
  $('#updatePostModal').modal('hide')
}

const updatePostFailure = (response) => {
  console.log('update failure')
  $('#updatePostModal').modal('hide')
}

module.exports = {
  addPostSuccess,
  addPostFailure,
  showPostFailure,
  showPostSuccess,
  updatePostSuccess,
  updatePostFailure
}
