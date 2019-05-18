import React from 'react'

const ColorBlock = ({ r, g, b }) => {
  const style = {
    width: '500px',
    height: '100px',
    backgroundColor: `rgb(${r}, ${g}, ${b})`
  }

  return <div style={style} />
}

export default ColorBlock
