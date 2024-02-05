import { useState } from "react"
import { IModal } from "../types"

export const useModal = (): IModal => {
    const [isVisible, setVisibility] = useState<boolean>(true)

    const toggle = () => {
        setVisibility(!isVisible)
    }

    return { isVisible, toggle }
}