'use strict'
const store = require('../store.js')
const showPostsTemplate = require('../templates/post-display.handlebars')
const api = require('./api.js')
const getFormFields = require(`../../../lib/get-form-fields`)

const addPostSuccess = () => {
  $('input').val('')
  $('textarea').val('')
}

const addPostFailure = () => {
  $('input').val('')
  $('#succ-fail-mess').text('Failure Adding Post').fadeIn().delay(2000).fadeOut('slow')

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
  event.preventDefault()
  const data = getFormFields(event.target)
  const findId = $(event.target).attr('data-id')
  store.currentId = findId
}

// edit/remove post button launches the above code
const showPostSuccess = (response) => {
  const showPostsHtml = showPostsTemplate({ posts: response.posts })
  $('.post-display').html(showPostsHtml)
  $('.remove-post-button').on('click', onRemoveId)
  $('.edit-post-button').on('click', onUpdateId)
}

const showPostFailure = () => {
  $('#succ-fail-mess').text('Failure Displaying Posts').fadeIn().delay(2000).fadeOut('slow')
}

const removePostSuccess = (response) => {
  $('input').val('')
}

const removePostFailure = (response) => {
  $('input').val('')
  $('#succ-fail-mess').text('Failure Removing Post').fadeIn().delay(2000).fadeOut('slow')

}

const updatePostSuccess = (response) => {
  $('#updatePostModal').modal('hide')
}

const updatePostFailure = (response) => {
  $('#succ-fail-mess').text('Failure Updating post').fadeIn().delay(2000).fadeOut('slow')
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
