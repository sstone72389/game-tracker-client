'use strict'
// requiring the necesary files...
const getFormFields = require(`../../../lib/get-form-fields`)
const api = require('./api')
const ui = require('./ui')
const store = require('../store.js')

const onShowPosts = function (event) {
  event.preventDefault()
  console.log('clicked show button')
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
    console.log('please fill in all fields')
    $('input').val('')
  }
}

const onUpdatePost = function (event) {
  const data = getFormFields(this)
  console.log('im at events', this)
  const currentId = store.currentId
  event.preventDefault()
  api.updateById(data, currentId)
    .then(ui.updatePostSuccess)
    .then(() => {
      api.showPosts(data)
        .then(ui.showPostSuccess)
        .catch(ui.showPostFailure)
    })
    .catch(ui.updatePostFailure)
}

const addHandlers = () => {
  $('#new-post').on('submit', onAddPost)
  $('#show-posts').on('submit', onShowPosts)
  $('#update-post').on('submit', onUpdatePost)
}

module.exports = {
  addHandlers
}
