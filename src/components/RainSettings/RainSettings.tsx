import { FC } from 'react'
import { useRainSettings } from '../../store'
import Input from '../UI/Input/Input'
import styles from './RainSettings.module.css'


const RainSettings: FC = () => {
  const {settings, setSettings} = useRainSettings()
  return (
    <div className={styles.rainSettings}>
      <Input title="Drop's amount" type="range" min="150" max="400" step="5" onChange={(e) => { setSettings({ ...settings, amount: parseInt(e.target.value) }) }} value={settings.amount} />
      <Input title="Drop's angle" type="range" min="-45" max="45" step="5" onChange={(e) => { setSettings({ ...settings, angle: parseInt(e.target.value) }) }} value={settings.angle} />
      <Input title="Drop's size" type="range" min="1" max="7" step="1" onChange={(e) => { setSettings({ ...settings, width: parseInt(e.target.value) }) }} value={settings.width} />
      <Input title="Drop's speed" type="range" min="0.7" max="1.5" step="0.1" onChange={(e) => { setSettings({ ...settings, speed: parseFloat(e.target.value) }) }} value={settings.speed} />
    </div>
  )
}

export default RainSettings