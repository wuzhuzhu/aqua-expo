import {Column, Icon, Row, Stagger, Text} from 'native-base'
import {TouchableOpacity} from "react-native"
import {formatDistanceToNow} from "date-fns"
import {Feather} from "@expo/vector-icons"
import {COLOR_SCHEME} from "../../constants/Colors"
import {VideoType} from "../../types"

type IVideoLineProps = {
  videoRef: any // todo: ref的ts定义
  videos: VideoType[]
  handleVideoClick: any
  onPlayingIndex: number
}

const VideoList = function ({videoRef, videos, handleVideoClick, onPlayingIndex, video}: IVideoLineProps) {
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
        return <TouchableOpacity key={`video-${i}`} onPress={() => handleVideoClick(i)}>
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
              >{v.title}</Text>
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

export default VideoList
