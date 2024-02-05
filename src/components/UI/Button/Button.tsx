import React, { ButtonHTMLAttributes, FC, PropsWithChildren } from 'react'
import styles from './Button.module.css'
const Button: FC<PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>> = ({children, ...props}) => {
  return (
    <button {...props} className={styles.button}>
      {children}
    </button>
  )
}

export default Button