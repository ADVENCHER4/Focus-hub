import { FC } from 'react'
import { IModal } from '../../types'
import RainSettings from '../RainSettings/RainSettings'
import Modal from '../UI/Modal/Modal'


const RainSettingsModal: FC<IModal> = ({ toggle, isVisible }) => {
  // useDragger('settings')
  return (
    <Modal title='Settings' isVisible={isVisible} toggle={toggle} id='settings'>
      <RainSettings/>
    </Modal>
  )
}

export default RainSettingsModal