import {Column, Icon, Row, Stagger, Text, FlatList, Box, Avatar, VStack, HStack, Spacer} from 'native-base'
import {TouchableOpacity} from "react-native"
import {formatDistanceToNow} from "date-fns"
import {Feather} from "@expo/vector-icons"
import {COLOR_SCHEME} from "../../constants/Colors"
import {VideoType} from "../../types"

type IVideoListProps = {
  videoRef: any // todo: ref的ts定义
  videos: VideoType[]
  handleVideoClick: any
  onPlayingIndex: number
}

// TODO: 解决重复刷新问题
const VideoList = function ({videoRef: video, videos, handleVideoClick, onPlayingIndex}: IVideoListProps) {
  return (
    <Stagger
      visible
      initial={{
        opacity: 0,
        translateY: 10
      }}
      animate={{
        opacity: 1,
        translateY: 0,
        transition: {
          delay: 100,
          duration: 350,
          stagger: {
            offset: 50,
          }
        }
      }}
      exit={{
        opacity: 0
      }}
    >
      {videos.map((v, i) => {
        return <TouchableOpacity key={v.id} onPress={() => handleVideoClick(i)}>
          <Row key={i}
            mt={4} py={2}
            alignItems="center"
            justifyContent="space-between"
          >
            <Column>
              <Text
                numberOfLines={1}
                maxWidth="70%"
                fontSize="lg"
                fontWeight="bold"
                mt={2}
              >{i+1}{v.title}</Text>
              <Text
                color="muted.400"
              >{formatDistanceToNow(new Date(v.createdAt), {addSuffix: true})}</Text>
            </Column>
            <TouchableOpacity
              onPress={() => status?.isPlaying ? video.current.pauseAsync() : video.current.playAsync()}>
              <Icon as={<Feather name={(onPlayingIndex === i) ? 'pause' : 'play'}/>} size="md" mr="2"
                    color={onPlayingIndex !== i ? COLOR_SCHEME.NARA_GREEN : 'muted.400'}/>
            </TouchableOpacity>
          </Row>
        </TouchableOpacity>
      })}
    </Stagger>
  )
}

const VideoList2 = function ({videoRef: video, videos, handleVideoClick, onPlayingIndex}: IVideoListProps) {
  return <Stagger
    visible
    initial={{
      opacity: 0,
      translateY: 10
    }}
    animate={{
      opacity: 1,
      translateY: 0,
      transition: {
        delay: 100,
        duration: 350,
        stagger: {
          offset: 50,
        }
      }
    }}
    exit={{
      opacity: 0
    }}>
    <Text>123123</Text>
    <Text>123123</Text>
    <Text>123123</Text>
    <Text>123123</Text>
      <FlatList data={videos} renderItem={({
                                                item
                                              }) => <Box borderBottomWidth="1" _dark={{
      borderColor: "gray.600"
    }} borderColor="coolGray.200" pl="4" pr="5" py="2">
      <HStack space={3} justifyContent="space-between">
        <Avatar size="48px" source={{
          uri: item?.videoUrl
        }} />
        <VStack>
          <Text _dark={{
            color: "warmGray.50"
          }} color="coolGray.800" bold>
            {item?.title}
          </Text>
          <Text color="coolGray.600" _dark={{
            color: "warmGray.200"
          }}>
            {item?.title}
          </Text>
        </VStack>
        <Spacer />
        <Text fontSize="xs" _dark={{
          color: "warmGray.50"
        }} color="coolGray.800" alignSelf="flex-start">
          {item?.createdAt}
        </Text>
      </HStack>
    </Box>} keyExtractor={item => item.id} />
    </ Stagger>
}

export default VideoList
