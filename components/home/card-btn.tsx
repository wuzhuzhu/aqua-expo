import {AspectRatio, Center, Text, Pressable} from "native-base"
import {MotifiedCenter} from '../../utils/motify'
import {RootStackScreenProps, RootTabScreenProps} from "../../types"

type IHomeScreenCardProps = {
  bg: string,
  title: string,
  targetName: string,
  navigation: any,
}

export default function HomeScreenCard({ bg, title, targetName, navigation }: IHomeScreenCardProps): JSX.Element {
  return (
    <AspectRatio ratio={1} width="46%">
      <Pressable onPress={() => { navigation.navigate('Tab', {screen: targetName}) }}>
        {({
            isHovered,
            isFocused,
            isPressed
          }) => {
          return (
            <MotifiedCenter
              animate={{scale: isPressed || isHovered ? 0.96 : 1, opacity: isPressed ? 0.8 : 1}}
              transition={{
                type: 'timing',
                duration: 200,
              }}
              bg={bg} flexGrow="1" display="inline-block" m={1}>
              <Text color="trueGray.100" fontWeight="semibold">{title}</Text>
            </MotifiedCenter>
          )
        }}
      </Pressable>
    </AspectRatio>
  )
}
