'use strict'
const store = require('../store.js')
const showPostsTemplate = require('../templates/post-display.handlebars')

const addPostSuccess = () => {
  $('input').val('')
  $('.clear-field').val('')
}

const addPostFailure = () => {
  $('input').val('')
  $('#succ-fail-mess').text('Failure Adding Post').fadeIn().delay(2000).fadeOut('slow')
}

const addVidSuccess = (response) => {
  console.log('addVidSuccess')
  $('input').val('')
  $('.vid-frame').attr('src', response.post.name)
}

const addVidFailure = () => {
  console.log('addVidFailure')
  $('input').val('')
  $('#succ-fail-mess-two').text('Failure Adding Post').fadeIn().delay(2000).fadeOut('slow')
}

const showPostSuccess = (response) => {
  store.postResponse = response
  const showPostsHtml = showPostsTemplate({ posts: response.posts })
  $('.post-display').html(showPostsHtml)
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
  updatePostFailure,
  removePostSuccess,
  removePostFailure,
  addVidSuccess,
  addVidFailure
}
