import React from 'react'
import Canvas from './components/UI/Canvas/Canvas'
import Rain from './components/Rain/Rain'
import Sidebar from './components/Sidebar/Sidebar'
import { useModal } from './hooks/useModal'
import RainSettingsModal from './components/RainSettingsModal/RainSettingsModal'


function App () {
  const settingsModal = useModal()
  return (
    <div className="App">
      <Canvas>
        <Rain/>
      </Canvas>
      <Sidebar settingsModal={settingsModal}/>
      <RainSettingsModal isVisible={settingsModal.isVisible} toggle={settingsModal.toggle}/>
    </div>
  )
}

export default App
