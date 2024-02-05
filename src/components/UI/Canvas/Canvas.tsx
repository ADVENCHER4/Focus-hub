import React, { FC } from 'react'
import { useWindowSize } from '../../../hooks/useWindowSize'
import { Stage } from 'react-konva'

const Canvas: FC<React.PropsWithChildren> = ({children}) => {
  const { width, height } = useWindowSize()
  return (
    <Stage width={width} height={height}>
      {children}
    </Stage>
  )
}

export default Canvas