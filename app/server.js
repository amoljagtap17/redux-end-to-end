import express from 'express'
import cors from 'cors'
import Tokens from 'csrf'
import cookieParser from 'cookie-parser'
import bodyParser from 'body-parser'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import render from './serverRender'
import User from './server/models/User'

const tokens = new Tokens()
const csrfSecret = tokens.secretSync()

const app = express()
app.use(bodyParser.json())
app.use(cookieParser())
app.use(cors({ origin: 'http://localhost:3000', credentials: true }))

function setCsrf(req, res, next) {
  res.cookie('XSRF-TOKEN', tokens.create(csrfSecret))
  next()
}

function checkCsrf(req, res, next) {
  const token = req.get('X-XSRF-TOKEN')

  if (!tokens.verify(csrfSecret, token)) {
    return res.status(403).json({ code: 'invalid_csrf_token' })
  }

  next()
}

function lookup(username = '') {
  return User.where({ username }).fetch().then(user => user && user.toJSON())
}

const api = express.Router()

app.use('/api', api)

api.post('/session', (req, res) => {
  const { username, password } = req.body

  lookup(username).then(user => {
    if (!username || !bcrypt.compareSync(password, user.password)) {
      res.status(422).json({ code: 'invalid_credentials' })
    } else {
      const { password: _, ...rest } = user
      const token = jwt.sign(rest, 'SUPERDUPERSECRET', { expiresIn: '24h' })

      setCsrf(req, res, () => {
        res
          .cookie('auth-token', token, { httpOnly: true })
          .json({ token, user: rest })
      })
    }
  })
})

function decode(req, res, next) {
  const token = req.get('auth-token') || req.cookies['auth-token']

  if (token) {
    jwt.verify(token, 'SUPERDUPERSECRET', (err, decoded) => {
      if (err) {
        return res.status(403).json({ message: 'Failed to authenticate token' })
      } else {
        req.currentUser = decoded
        next()
      }
    })
  } else {
    return res.status(403).json({ message: 'No token provided!' })
  }
}

api.use(decode)
api.use(checkCsrf)
api.use(setCsrf)

api.get('/session', (req, res) => {
  res.json({ user: req.currentUser })
})

app.use('/assets', express.static('assets'))

app.use(render)

app.listen(9999)
