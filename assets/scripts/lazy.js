'use strict'

const ytload = function (ytobject) {
  const ytid = ytobject.getAttribute('ytid')
  ytobject.innerHTML = '<iframe width="560" height="315" src="https://www.youtube.com/embed/' + ytid + '?vq=720&autoplay=1" frameborder="0" allowfullscreen></iframe>'
}

// function ytload () {
//   console.log('hello world')
// }

module.exports = {
  ytload
}
