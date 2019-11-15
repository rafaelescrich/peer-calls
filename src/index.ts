#!/usr/bin/env node
if (!process.env.DEBUG) {
  process.env.DEBUG = 'peercalls'
}

import app from './server/app'
import _debug from 'debug'

const debug = _debug('peercalls')

const port = process.env.PORT || 3000
const server = app.listen(port, () => debug('Listening on: %s', port))

function close () {
  debug('Closing server...')
  server.close(() => {
    debug('Bye!')
    process.exit()
  })
}

process.on('SIGINT', close)
process.on('SIGTERM', close)