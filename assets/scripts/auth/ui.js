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
  $('.mess-display').text('Sorry, Something went wrong signing up :-(').fadeIn().delay(2000).fadeOut('slow')
  $('#signUpModal').modal('hide')
  $('input').val('')
}

// add shows where applicable
const signInSuccess = (data) => {
  console.log('sign in success')
  $('.mess-display').text('Welcome to Game Tracker!')
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
  $('.mess-display').text('Sorry, Something went wrong signing in').fadeIn().delay(2000).fadeOut('slow')
  $('#signInModal').modal('hide')
  $('input').val('')
}

const changePasswordSuccess = (data) => {
  $('.mess-display').text('Password changed successfully').fadeIn().delay(2000).fadeOut('slow')
  $('#changePasswordModal').modal('hide')
  $('input').val('')
}

const changePasswordFailure = () => {
  $('.mess-display').text('Error changing password').fadeIn().delay(2000).fadeOut('slow')
  $('#changePasswordModal').modal('hide')
  $('input').val('')
}

const signOutSuccess = (data) => {
  $('.mess-display').text('Come Back Soon!')
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
  $('.mess-display').text('Sorry, Something went wrong :-(').fadeIn().delay(2000).fadeOut('slow')
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
