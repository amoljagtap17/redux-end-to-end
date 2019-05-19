import express from 'express'
import render from './serverRender'
import { kx } from './server/connection'
import User from './server/models/User'

kx.on('query', data => console.log('data => ', data))

const app = express()

app.use('/assets', express.static('assets'))

// const renderClient = (req, res) => res.send(template)
// app.use(renderClient)

app.use(render)

const invoices = kx.from('invoices')
  .select('total', 'email', 'username')
  .innerJoin('users', 'users.id', 'invoices.user_id')
  .then(rows => {
    return rows
  })

const users = kx.from('users')
  .select('username', 'total', 'email')
  .innerJoin('invoices', 'users.id', 'invoices.user_id')
  .then(rows => {
    return rows
  })

const eagerUsers = User.fetchAll({
  withRelated: ['invoices']
}).then(relation => {
  return relation
})

app.listen(9999)
