import {Center, Image, PresenceTransition} from 'native-base'
import Animated, {FadeInDown} from 'react-native-reanimated'
import logoImg from "../../assets/images/logo.png"

type ILogoProps = {
  height?: number
  mt?: number | string
  mb?: number
  imageMaxWidth?: number | string
  isAbsolute?: boolean
}

export default function Logo({height=200, mt=0, mb=0, imageMaxWidth="100%", isAbsolute=false}: ILogoProps): JSX.Element {
  const absolutProps = {
    position: "absolute",
    right: 0,
    top: -4,
    opacity: "0.4"
  }
  const wrapperProps = {
    height,
    mt,
    mb,
    ...(isAbsolute ? absolutProps : {})
  }
  return <Center {...wrapperProps}>
    <Animated.Image entering={FadeInDown.duration(600).delay(350)} resizeMode="contain" source={logoImg} flex={1} maxWidth={imageMaxWidth} alt="NARA Logo" />
  </Center>
}
