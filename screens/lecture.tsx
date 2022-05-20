import React, {useState, useRef, useMemo} from 'react';
import { View, StyleSheet, Button } from 'react-native';
import {Box, Column, Row, Text, AspectRatio, Image, Heading} from 'native-base'
import { Video, AVPlaybackStatus } from 'expo-av';
import {useLecture} from '../api/lectures'
import {LectureLoading} from '../components/common/loading'
import {LectureType} from "../types"
import {useMembers} from "../api/members"
import {COLOR_SCHEME} from "../constants/Colors"
import {isDev} from '../utils/helper'

export default function Lecture({route, navigation}):JSX.Element {
  const lectureId = route?.params?.id
  const {data: lecture, isLoading, isSuccess, refetch, isFetching} = useLecture(lectureId)
  const video = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(undefined as number | undefined)
  const [status, setStatus] = useState({} as AVPlaybackStatus);

  const hasVideo = Array.isArray(lecture?.videos) && (lecture?.videos?.length > 0)
  const hasSelectedIndex = useMemo(() => !isNaN(currentIndex), [currentIndex]);

  function handleVideoClick(i) {
    console.log(i)
    setCurrentIndex(i)
  }

  if (isLoading) return <LectureLoading />
  return (
    <Box safeAreaBottom safeAreaTop={hasSelectedIndex ? true : void 0}>
      <AspectRatio w="100%" ratio={hasSelectedIndex ? 16 / 9 : 4 / 3}>
        {hasSelectedIndex ? <Video
          ref={video}
          source={{
            uri: isDev ? 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4' : lecture?.videos?.[`${currentIndex}`]?.videoUrl,
          }}
          useNativeControls
          resizeMode="contain"
          isLooping
          onPlaybackStatusUpdate={status => setStatus(() => status)}
        /> : <Image
          source={{
            uri: lecture?.imgUrl,
          }}
          alt="lecture image"
        />}
      </AspectRatio>
      <Column mx={4}>
        <Heading
          numberOfLines={1}
          ellipsizeMode='tail'
          mt={2}
          color={COLOR_SCHEME.NARA_BlUE}
          size='lg'
        >{lecture.title}</Heading>
        {hasVideo ? (lecture.videos.map((v, i) => {
          return <Row key={`video-${i}`} >
            <Text
              onPress={() => handleVideoClick(i)}
              numberOfLines={1}
              maxWidth="65%"
              fontSize="lg"
              mt={2}
            >{v.title}</Text>
          </Row>
        }) ): <Text>There's no video available yet.</Text>}


        <View>
          <Button
            title={status?.isPlaying ? 'Pause' : 'Play'}
            onPress={() =>
              status?.isPlaying ? video.current.pauseAsync() : video.current.playAsync()
            }
          />
        </View>
      </Column>

    </Box>
  );
}

function VideoLine(video: Video): JSX.Element {
  return null
}
