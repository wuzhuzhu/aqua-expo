import React, {useState, useRef, useMemo} from 'react';
import { View, StyleSheet, Button, LayoutAnimation, Platform, UIManager } from 'react-native';
import {Box, Column, Row, Text, AspectRatio, Image, Heading} from 'native-base'
import { Video, AVPlaybackStatus } from 'expo-av';
import { StatusBar } from 'expo-status-bar';

import {useLecture} from '../api/lectures'
import {LectureLoading} from '../components/common/loading'
import {LectureType} from "../types"
import {useMembers} from "../api/members"
import {COLOR_SCHEME} from "../constants/Colors"
import {ImageBackground} from '../utils/motify'
import {isDev, windowHeight} from '../utils/helper'

if (
  Platform.OS === "android" &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

export default function Lecture({route, navigation}):JSX.Element {
  const lectureId = route?.params?.id
  const {data: lecture, isLoading, isSuccess, refetch, isFetching} = useLecture(lectureId)
  const video = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(undefined as number | undefined)
  const [status, setStatus] = useState({} as AVPlaybackStatus);

  const hasVideo = Array.isArray(lecture?.videos) && (lecture?.videos?.length > 0)
  const hasSelectedIndex = useMemo(() => !isNaN(currentIndex), [currentIndex]);

  function handleVideoClick(i) {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setCurrentIndex(i)
  }

  if (isLoading) return <LectureLoading />
  return (
    <Box safeAreaBottom safeAreaTop={hasSelectedIndex ? true : void 0}>
      <StatusBar style={hasSelectedIndex ? "dark" : "light"} />
      <AspectRatio
        mb={8}
        maxHeight={0.6*windowHeight}
        ShadowBottomHeight="80"
        shadowRadius={20}
        shadowOpacity={0.5}
        w="100%" ratio={hasSelectedIndex ? 16 / 9 : 4 / 3}>
        {hasSelectedIndex ? <Video
          ref={video}
          source={{
            uri: isDev ? 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4' : lecture?.videos?.[`${currentIndex}`]?.videoUrl,
          }}
          useNativeControls
          resizeMode="contain"
          isLooping
          onPlaybackStatusUpdate={status => setStatus(() => status)}
        /> : <ImageBackground
          source={{
            uri: lecture?.imgUrl,
          }}
          alt="lecture image"
        >
          <Title isLight title={lecture?.title} />
        </ImageBackground>}
      </AspectRatio>
      <Column mx={4}>
        {hasSelectedIndex && <Title title={lecture?.title}/>}
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

const Title = function ({isLight = false, title}) {
  const lightStyles = {
    position: "absolute",
    color: "muted.100",
    left: "4",
    bottom: "6"
  }
  return <Heading
    numberOfLines={1}
    ellipsizeMode='tail'
    mt={2}
    color={COLOR_SCHEME.NARA_BlUE}
    size='xl'
    {...isLight ? lightStyles : {}}
  >{title}</Heading>
}

function VideoLine(video: Video): JSX.Element {
  return null
}
