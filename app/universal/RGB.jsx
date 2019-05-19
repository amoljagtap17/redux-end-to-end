import React, { useState } from 'react'
import ColorBlock from './ColorBlock'
import Slider from './Slider'

const initialState = {
  r: 244,
  g: 158,
  b: 66
}

const RGB = () => {
  const [color, setColor] = useState(initialState)
  const { r, g, b } = color
  const update = color => val =>
    setColor(prevColor => ({
      ...prevColor,
      [color]: val
    }))

  return (
    <center>
      <ColorBlock r={r} g={g} b={b} />
      <Slider value={r} slide={update('r')} />
      <Slider value={g} slide={update('g')} />
      <Slider value={b} slide={update('b')} />
    </center>
  )
}

export default RGB
