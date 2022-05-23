import {Pressable, Circle, Icon, Center} from 'native-base'
import {Feather} from '@expo/vector-icons'
import {COLOR_SCHEME} from '../../constants/Colors'

type IControlBtnProps = {
  status?: {
    isPlaying?: boolean
  }
  video: any // todo: ref type
}

export default function ContolBtn({status, video}: IControlBtnProps) {
  const isPlaying = status?.isPlaying
  return <Center bg="transparent" pt={4} safeAreaBottom><Pressable style={{backgroundColor: 'transparent'}} onPress={() => isPlaying ? video.current.pauseAsync() : video.current.playAsync()}>
    {({
        isPressed
      }) => {
      return <Circle size="lg" bg={COLOR_SCHEME.NARA_GREEN}>
        <Icon as={<Feather name={isPlaying ? 'pause' : 'play'} />} color="white" size="2xl" />
      </Circle>
    }}
  </Pressable></Center>
}
