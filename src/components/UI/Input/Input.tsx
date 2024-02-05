import React, { FC, InputHTMLAttributes } from 'react'
import styles from './Input.module.css'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  title: string
}

const Input: FC<InputProps> = ({ title, ...props }) => {
  return (
    <div className={styles.inputBlock}>
      <label >{title}</label>
      <input {...props} />
    </div>
  )
}

export default Input