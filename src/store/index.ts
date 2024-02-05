import { create } from 'zustand'
import { IRainSettings } from '../types'
import { persist } from 'zustand/middleware'

interface RainSettingsStore {
    settings: IRainSettings
    setSettings: (newSettings: IRainSettings) => void
}

export const useRainSettings = create<RainSettingsStore>()(
    persist(
        set => ({
            settings: {
                amount: 150,
                angle: 0,
                width: 1,
                speed: 1
            },
            setSettings: (newSettings: IRainSettings) => {
                set({ settings: newSettings })
            }
        }),
        {
            name: 'rainStore'
        }
    )
)