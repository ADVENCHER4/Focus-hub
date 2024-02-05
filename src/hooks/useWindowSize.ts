import { useEffect, useState } from 'react'

export const useWindowSize = () => {
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  })
  useEffect(() => {
    window.onresize = resize
    return () => window.removeEventListener('resize', resize)
  })
  const resize = () => {
    setSize({
      width: window.innerWidth,
      height: window.innerHeight,
    })
  }
  return size
}