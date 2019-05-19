import React from 'react'
import { renderToString } from 'react-dom/server'
import RGB from './universal/RGB'
import template from './template'

export default function render(req, res) {
  const html = renderToString(<RGB />)
  res.send(template(html))
}
