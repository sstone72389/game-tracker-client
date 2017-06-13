'use strict'
// requiring the necesary files...
const getFormFields = require(`../../../lib/get-form-fields`)
const api = require('./api')
const ui = require('./ui')
const store = require('../store.js')

const onShowPosts = function (event) {
  event.preventDefault()
  api.showPosts()
    .then(ui.showPostSuccess)
    .catch(ui.showPostFailure)
}

// chains showPost to allow posts to be always visible
const onAddPost = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  if (data.post.title.length >= 1 && data.post.content.length >= 1) {
    api.addPost(data)
      .then(ui.addPostSuccess)
      .then(() => {
        api.showPosts(data)
          .then(ui.showPostSuccess)
          .catch(ui.showPostFailure)
      })
      .catch(ui.addPostfailure)
  } else {
    $('#succ-fail-mess-two').text('Please Fill in all fields').fadeIn().delay(2000).fadeOut('slow')
  }
}

const onShowModal = function (event) {
  event.preventDefault()
  const findId = $(event.target).attr('data-id')
  store.currentId = findId
  const findTitle = $(event.target).closest('.post-list').find('.post-name span').text()
  const findContent = $(event.target).closest('.post-list').find('.post-content li').text()
  $('.modal-content').find('.content-text').val(findContent)
  $('.modal-content').find('.title-text').val(findTitle)
  $('#updatePostModal').modal('show')
}

const onUpdatePost = function (event) {
  event.preventDefault()
  // console.log(this)
  const data = getFormFields(this)
  if (data.post.content.length >= 1 && data.post.title.length >= 1) {
    api.updateById(data, store.currentId)
      .then(ui.updatePostSuccess)
      .then(() => {
        api.showPosts(data)
          .then(ui.showPostSuccess)
          .catch(ui.showPostFailure)
      })
      .catch(ui.updatePostFailure)
  } else {
    $('#succ-fail-mess-two').text('Please Fill in all fields').fadeIn().delay(2000).fadeOut('slow')
    $('input').val('')
  }
}

const onRemovePost = (event) => {
  const findId = $(event.target).attr('data-id')
  api.removeById(findId)
    .then(ui.removePostSuccess)
  .then(() => {
    api.showPosts()
    .then(ui.showPostSuccess)
    .catch(ui.showPostFailure)
  })
  .catch(ui.removePostFailure)
}

const addHandlers = () => {
  $('#new-post').on('submit', onAddPost)
  $('#show-posts').on('submit', onShowPosts)
  $('body').on('click', '.edit-post-button', onShowModal)
  $('body').on('submit', '#update-post', onUpdatePost)
  $('body').on('click', '.remove-post-button', onRemovePost)

}

module.exports = {
  addHandlers
}
