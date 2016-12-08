'use strict'

const {send} = require('micro')
const get = require('../src')

module.exports = get(async (req, res) => {
  return send(res, 200, `It's a GET request!`)
})
