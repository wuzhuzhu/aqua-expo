import {Column, Icon, Row, Stagger, Text, FlatList, Box, Avatar, VStack, HStack, Spacer} from 'native-base'
import {TouchableOpacity} from "react-native"
import {formatDistanceToNow} from "date-fns"
import {Feather} from "@expo/vector-icons"
import {COLOR_SCHEME} from "../../constants/Colors"
import {VideoType} from "../../types"

type IVideoListProps = {
  videos: VideoType[]
  handleVideoClick: any
  togglePlayback: any
  onPlayingIndex: number
}
type IVideoRowProps = {
  v: VideoType
  handleVideoClick: any
  togglePlayback: any
  onPlayingIndex: number
  i: number
}

// TODO: 解决重复刷新问题
const VideoList = function ({videos, handleVideoClick, togglePlayback, onPlayingIndex}: IVideoListProps) {
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
        return <VideoRow key={v.id}  v={v} i={i} handleVideoClick={handleVideoClick} togglePlayback={togglePlayback} onPlayingIndex={onPlayingIndex} />
      })}
    </Stagger>
  )
}

export const VideoRow = function ({v, i, handleVideoClick, togglePlayback, onPlayingIndex}: IVideoRowProps) {
  return <TouchableOpacity onPress={() => handleVideoClick(i)}>
    <Row
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
        onPress={togglePlayback}>
        <Icon as={<Feather name={(onPlayingIndex === i) ? 'pause' : 'play'}/>} size="md" mr="2"
              color={onPlayingIndex !== i ? COLOR_SCHEME.NARA_GREEN : 'muted.400'}/>
      </TouchableOpacity>
    </Row>
  </TouchableOpacity>
}

export default VideoList
