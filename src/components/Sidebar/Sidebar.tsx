import { FC, useState } from 'react'
import { MdOutlineSettingsInputComponent } from 'react-icons/md'
import RainSettingsModal from '../RainSettingsModal/RainSettingsModal'
import Button from '../UI/Button/Button'
import styles from './Sidebar.module.css'
import { IModal } from '../../types'

interface SidebarProps {
  settingsModal: IModal
}
const Sidebar: FC<SidebarProps> = ({ settingsModal }) => {
  return (
    <div className={styles.sidebar}>
      <Button onClick={settingsModal.toggle}>
        <MdOutlineSettingsInputComponent size={20} />
      </Button>
    </div>
  )
}

export default Sidebar