export interface IDrop {
  x: number
  y: number
  offsetX: number
  offsetY: number
  length: number
  color: string
  speed: number
  width: number
}

export interface IModal {
  isVisible: boolean
  toggle: () => void
}

export interface IRainSettings {
  amount: number
  angle: number
  width: number
  speed: number
}