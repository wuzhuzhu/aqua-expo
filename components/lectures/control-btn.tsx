import {Pressable, Circle, Icon} from 'native-base'
import {Feather} from '@expo/vector-icons'

type IControlBtnProps = {
  status?: {
    isPlaying?: boolean
  }
  video: any // todo: ref type
}

export default function ContolBtn({status, video}: IControlBtnProps) {
  const isPlaying = status?.isPlaying
  return <Pressable onPress={() => isPlaying ? video.current.pauseAsync() : video.current.playAsync()}>
    {({
        isPressed
      }) => {
      return <Circle size="40px" bg="secondary.400">
        <Icon as={<Feather name={isPlaying ? 'pause' : 'play'} />} color="white" size={5} />
      </Circle>
    }}
  </Pressable>
}
