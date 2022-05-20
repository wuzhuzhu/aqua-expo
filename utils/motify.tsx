import React, {useMemo} from "react"
import {motify, MotiPressable} from "moti"
import {Badge, Factory, Heading, Icon, Row, Text} from 'native-base'
import {Box, Center} from "native-base"
import {Image, ImageBackground as IBg} from 'react-native'
import {COLOR_SCHEME} from "../constants/Colors"
import {Feather} from "@expo/vector-icons"

export const MotifiedBox = motify(Box)()
export const MotifiedCenter = motify(Center)()

// todo: fix reusabel btn
export const MotifiBtn = function (props) {
  return <MotiPressable
    {...props}
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
    {props.children}
  </MotiPressable>
}

export const ImageBackground = Factory(IBg);
