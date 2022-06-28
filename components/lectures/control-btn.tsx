import {Pressable, Circle, Icon, Center} from 'native-base'
import {Feather} from '@expo/vector-icons'
import {COLOR_SCHEME} from '../../constants/Colors'
import {VideoType} from "../../types"
import {useNavigation} from "@react-navigation/native"

type IControlBtnProps = {
  video: VideoType
}

export default function ContolBtn({video}: IControlBtnProps) {
  const navigation = useNavigation()

  const openYoutubeModal = () => {
    navigation.navigate("WebModal", {
      title: video?.title,
      url: video?.videoUrl,
    });
  }

  return <Center bg="transparent" pt={4} safeAreaBottom><Pressable style={{backgroundColor: 'transparent'}} onPress={openYoutubeModal}>
    {({
        isPressed
      }) => {
      return <Circle size="lg" bg={COLOR_SCHEME.NARA_GREEN}>
        <Icon as={<Feather name='play' />} color="white" size="2xl" />
      </Circle>
    }}
  </Pressable></Center>
}
