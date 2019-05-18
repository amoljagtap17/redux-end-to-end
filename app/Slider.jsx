import React from 'react'

const Slider = ({ value, slide }) => {
  const position = (value * 100) / 255
  const update = e => slide(Math.ceil((e.target.value / 100) * 255))

  return (
    <div>
      <input type="range" value={position} onChange={update} />
    </div>
  )
}

export default Slider
