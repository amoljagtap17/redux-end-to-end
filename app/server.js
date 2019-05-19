import express from 'express'
import render from './serverRender'

const app = express()

app.use('/assets', express.static('assets'))

// const renderClient = (req, res) => res.send(template)
// app.use(renderClient)

app.use(render)

app.listen(9999)
