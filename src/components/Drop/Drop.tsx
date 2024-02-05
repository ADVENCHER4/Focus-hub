import React, { FC } from 'react'
import { Line } from 'react-konva'

interface DropProps {
  startX: number
  startY: number
  endX: number
  endY: number
  color: string
  width: number
}

const Drop: FC<DropProps> = ({ startX, startY, endX, endY, color, width }) => {
  return (
    <Line
      x={startX}
      y={startY}
      points={[0, 0, endX, endY]}
      stroke={color}
      strokeWidth={width}
    />
  )
}

export default Drop