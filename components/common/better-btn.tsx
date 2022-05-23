import Animated, {useSharedValue} from 'react-native-reanimated'
import React, {useMemo} from "react"
import { MotiPressable } from 'moti/interactions'

type IBetterButtonType = {
  onPressBtn: Function
  children: React.ReactNode
}

export default function BetterButton ({onPressBtn = () => void 0, children}: IBetterButtonType) {
  const scale = useSharedValue(0)
  return <MotiPressable
    onPress={onPressBtn}
    animate={useMemo(
      () => ({ hovered, pressed }) => {
        'worklet'

        return {
          opacity: hovered || pressed ? 0.5 : 1,
          scale: hovered || pressed ? 0.96 : 1,
        }
      },
      []
    )}
  >
    {children}
  </MotiPressable>
}
