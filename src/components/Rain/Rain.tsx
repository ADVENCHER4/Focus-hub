import React from 'react'
import { Layer } from 'react-konva'
import { useRain } from '../../hooks/useRain'
import Drop from '../Drop/Drop'

const Rain = () => {
  const rain = useRain()
  return (
    <Layer>
      {rain.map((drop, index) => <Drop startX={drop.x} startY={drop.y} endX={drop.offsetX} endY={drop.offsetY} color={drop.color} width={drop.width} key={index}/>)}
    </Layer>
  )
}

export default Rain