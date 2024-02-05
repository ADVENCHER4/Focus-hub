import { useEffect, useState } from 'react'
import { IDrop } from '../types'
import {
  degToRad,
  maxLength,
  maxSpeed,
  minLength,
  minSpeed, offsetX,
} from '../utils/constants'
import { useRainSettings } from '../store'

export const useRain = (): IDrop[] => {
  const { angle, amount, speed, width } = useRainSettings(state => state.settings)
  const [rain, setRain] = useState<IDrop[]>([])
  useEffect(() => {
    const timer = setInterval(() => {
      update()
    }, 10)
    return () => clearInterval(timer)
  })
  const update = () => {
    const newRain: IDrop[] = []
    for (let i = 0; i < rain.length; i++) {
      let drop = rain![i]
      drop.x += drop.speed * Math.sin(angle * degToRad)
      drop.y += drop.speed * Math.cos(angle * degToRad)
      drop.offsetX = drop.length * Math.sin(angle * degToRad)
      drop.offsetY = drop.length * Math.cos(angle * degToRad)
      if (drop.x > window.innerWidth) {
        drop.x -= window.innerWidth
      } else if (drop.x < 0) {
        drop.x += window.innerWidth
      }
      if (drop.y > window.innerHeight) {
        drop = moveUpDrop(drop)
      }
      newRain.push(drop)
    }
    if (amount > newRain.length) {
      for (let i = 0; i < 4; i++) {
        newRain.push(createDrop())
      }
    } else if (amount < newRain.length) {
      newRain.splice(0, newRain.length - amount);
    }
    setRain(newRain)
  }

  const createDrop = (): IDrop => {
    const x = Math.ceil(Math.random() * window.innerWidth)
    const newSpeed = Math.ceil(
      (Math.random() * (maxSpeed - minSpeed) + minSpeed) * speed,
    )
    const length = Math.ceil(
      Math.random() * (maxLength - minLength) + minLength)
    return {
      offsetX: 0,
      offsetY: 0,
      x: x,
      y: 0,
      speed: newSpeed,
      length: length,
      color: 'cyan',
      width: width
    }
  }

  const updateDrop = (drop: IDrop) => {

  }

  const moveUpDrop = (drop: IDrop): IDrop => {
    drop.y -= window.innerHeight
    drop.x -= Math.random() * offsetX * 2 - offsetX
    const newSpeed = Math.ceil(
      (Math.random() * (maxSpeed - minSpeed) + minSpeed) * speed,
    )
    return {...drop, speed: newSpeed, width: width}
  }
  return rain
}