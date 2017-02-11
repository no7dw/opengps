'use strict'

const mongoose = require('mongoose')
// mongoose.set('debug', true)
mongoose.Promise = require('bluebird')


function create (uri) {
  const db = mongoose.createConnection(uri)
  db.on('connected', function () {
    console.info('%s mongo connected: %s!!!', db.name, uri)
  })

  db.on('error', function (err) {
    console.error('%s mongo Error: %s', uri, err)
  })
  return db
}

exports.main = create("mongodb://localhost:27017/ip")
