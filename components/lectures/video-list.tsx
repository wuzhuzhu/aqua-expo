import {memo, useEffect, useMemo} from 'react'
import {Column, Icon, Row, Stagger, Text, FlatList, Box, Avatar, VStack, HStack, Spacer} from 'native-base'
import {TouchableOpacity} from "react-native"
import {formatDistanceToNow} from "date-fns"
import {Feather} from "@expo/vector-icons"
import {COLOR_SCHEME} from "../../constants/Colors"
import {VideoType} from "../../types"

type IVideoRowProps = {
  v: VideoType
  handleVideoClick: any
  togglePlayback: any
  onPlayingIndex: number | boolean
  currentIndex: number
  i: number
}

const VideoRow = memo(function ({v, i, handleVideoClick, onPlayingIndex, currentIndex}: IVideoRowProps) {
  const iconName = useMemo(() => {
    if (v.isYoutube) {
      return 'youtube'
    } else {
      return (onPlayingIndex === i) ? 'pause' : 'film'
    }
  }, [i])
  return <TouchableOpacity onPress={() => handleVideoClick(i)}>
    <Row
         mt={3} py={2}
         alignItems="center"
         justifyContent="space-between"
    >
      <Column>
        <Text
          color={currentIndex === i ? COLOR_SCHEME.NARA_GREEN : 'muted.600'}
          numberOfLines={1}
          maxWidth="85%"
          fontSize="lg"
          fontWeight="bold"
          mt={2}
        >{`${i + 1}. ${v.title}`}</Text>
        <Text
          color="muted.400"
        >{formatDistanceToNow(new Date(v.createdAt), {addSuffix: true})}</Text>
      </Column>
      <Icon as={<Feather name={iconName}/>} size="md" mr="2"
            color={currentIndex === i ? COLOR_SCHEME.NARA_GREEN : 'muted.400'}/>
    </Row>
  </TouchableOpacity>
})

export default VideoRow
