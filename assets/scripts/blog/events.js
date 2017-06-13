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
      .catch(ui.addTaskFailure)
  } else {
    console.log('please fill in all fields')
    $('input').val('')
  }
}

// chains showTask to allow list at all times
// uses store to store the data-id of the task clicked
// is passed to the api as such:
// const onUpdateTask = function (event) {
//   const data = getFormFields(this)
//   const currentId = store.currentId
//   event.preventDefault()
//   api.onUpdateById(data, currentId)
//     .then(ui.UpdateTaskSuccess)
//     .then(() => {
//       api.showsTasks(data)
//         .then(ui.showTaskSuccess)
//         .catch(ui.showTaskFailure)
//     })
//     .catch(ui.UpdateTaskFailure)
// }

const addHandlers = () => {
  $('#new-post').on('submit', onAddPost)
  $('#show-posts').on('submit', onShowPosts)
  // $('.supersize').on('click', function() {
  //   $('#new-post').toggle()
  // })
  // $('#update-task').on('submit', onUpdateTask)
}

module.exports = {
  addHandlers
}
