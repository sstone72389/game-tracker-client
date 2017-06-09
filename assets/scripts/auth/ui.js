'use strict'
const store = require('../store.js')
const api = require('./api.js')
const getFormFields = require(`../../../lib/get-form-fields`)

const signUpSuccess = (data) => {
  $('#signUpModal').modal('hide')
  $('input').val('')
}

const signUpFailure = () => {
  console.log('sign up failure')
  $('.mess-display').text('Sorry, Something went wrong signing up :-(').fadeTo(0, 1)
  $('#signUpModal').modal('hide')
  $('input').val('')
}

// add shows where applicable
const signInSuccess = (data) => {
  console.log('sign in success')
  $('.mess-display').text('Welcome to Game Tracker!').fadeTo(0, 1)
  $('.mess-display').show()
  $('.hideOnStart').show()
  $('.hideOnStartTwo').show()
  $('.hideOnSignIn').hide()
  $('.hideOnSignInTwo').hide()
  $('#signInModal').modal('hide')
  $('input').val('')

  // store the user object as per below
  store.user = data.user
}

const signInFailure = () => {
  $('.mess-display').text('Sorry, Something went wrong signing in').fadeTo(0, 1)
  $('#signInModal').modal('hide')
  $('input').val('')
}

const changePasswordSuccess = (data) => {
  $('.mess-display').text(' ').fadeTo(2000, 1)
  $('.mess-display').text('Password changed successfully').fadeTo(2000, 0)
  $('#changePasswordModal').modal('hide')
  $('input').val('')
}

const changePasswordFailure = () => {
  $('.mess-display').text(' ').fadeTo(3000, 1)
  $('.mess-display').text('Error changing password').fadeTo(2000, 0)
  $('#changePasswordModal').modal('hide')
  $('input').val('')
}

const signOutSuccess = (data) => {
  $('.mess-display').text('Come Back Soon!').fadeTo(2000, 1)
  $('.mess-display').show()
  $('.hideOnStart').hide()
  $('.hideOnStartTwo').hide()
  $('.hideOnSignIn').show()
  $('.hideOnSignInTwo').show()
  $('#signOutModal').modal('hide')
  // store the user with a value of null as per below
  store.user = null
}

const signOutFailure = () => {
  $('.mess-display').text('Sorry, Something went wrong :-(').fadeTo(0, 1)
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
