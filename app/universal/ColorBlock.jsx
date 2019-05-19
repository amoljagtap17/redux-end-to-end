import React from 'react'

const ColorBlock = ({ r, g, b }) => {
  const style = {
    backgroundColor: `rgb(${r}, ${g}, ${b})`
  }

  return <div className="color-block" style={style} />
}

export default ColorBlock
