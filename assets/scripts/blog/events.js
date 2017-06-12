'use strict'
// requiring the necesary files...
const getFormFields = require(`../../../lib/get-form-fields`)
const api = require('./api')
const ui = require('./ui')
const store = require('../store.js')

// const showTasks = function (event) {
//   event.preventDefault()
//   api.showsTasks()
//     .then(ui.showTaskSuccess)
//     .catch(ui.showTaskFailure)
// }

// chains showTask to allow list at all times
const addTask = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  if (data.task.name.length >= 1) {
    api.addsTask(data)
      .then(ui.addTaskSuccess)
      .then(() => {
        api.showsTasks(data)
          .then(ui.showTaskSuccess)
          .catch(ui.showTaskFailure)
      })
      .catch(ui.addTaskFailure)
  } else {
    $('.UAtext').text('Houston, please enter a valid task...')
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
  $('#new-task').on('submit', addTask)
  $('#show-tasks').on('submit', showTasks)
  $('#update-task').on('submit', onUpdateTask)
}

module.exports = {
  addHandlers
}
