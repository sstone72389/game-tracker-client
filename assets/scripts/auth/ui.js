'use strict'
const store = require('../store.js')
const api = require('./api.js')
const getFormFields = require(`../../../lib/get-form-fields`)

const signUpSuccess = (data) => {
  console.log('sign up success')
  $('#signUpModal').modal('hide')
  $('input').val('')
}

const signUpFailure = () => {
  console.log('sign up failure')
  $('#signUpModal').modal('hide')
  $('input').val('')
}

// add shows where applicable
const signInSuccess = (data) => {
  console.log('sign in success')
  $('.hideOnStart').show()
  $('.hideOnStartTwo').show()
  $('.hideOnSignIn').hide()
  $('.hideOnSignInTwo').hide()
  $('#signInModal').modal('hide')
  $('input').val('')
  $('.center').empty()

  // store the user object as per below
  store.user = data.user
}

const signInFailure = () => {
  console.log('sign in failure')
  $('#signInModal').modal('hide')
  $('input').val('')
}

const changePasswordSuccess = (data) => {
  console.log('pw change success')
  $('#changePasswordModal').modal('hide')
  $('input').val('')
}

const changePasswordFailure = () => {
  console.log('pw failure')
  $('#changePasswordModal').modal('hide')
  $('input').val('')
}

const signOutSuccess = (data) => {
  console.log('sign out success')
  $('.hideOnStart').hide()
  $('.hideOnStartTwo').hide()
  $('.hideOnSignIn').show()
  $('.hideOnSignInTwo').show()
  $('#signOutModal').modal('hide')
  // store the user with a value of null as per below
  store.user = null
}

const signOutFailure = () => {
  console.log('sign out failure')
  $('#signOutModal').modal('hide')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutFailure,
  signOutSuccess
}
