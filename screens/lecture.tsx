import React, {useState, useRef, useMemo} from 'react';
import { View, StyleSheet, Button, LayoutAnimation, Platform, UIManager, TouchableOpacity } from 'react-native';
import {Box, Column, Row, Text, AspectRatio, Divider, Image, Heading, Icon} from 'native-base'
import { Video, AVPlaybackStatus } from 'expo-av';
import { StatusBar } from 'expo-status-bar';
import { formatDistanceToNow } from 'date-fns'

import {useLecture} from '../api/lectures'
import {LectureLoading} from '../components/common/loading'
import {LectureType} from "../types"
import {useMembers} from "../api/members"
import {COLOR_SCHEME} from "../constants/Colors"
import {ImageBackground} from '../utils/motify'
import {isDev, windowHeight} from '../utils/helper'
import {Feather} from "@expo/vector-icons"

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
  const onPlayingIndex = useMemo(() => hasSelectedIndex && status?.isPlaying, [currentIndex, status]);

  function handleVideoClick(i) {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.linear);
    setCurrentIndex(i)
  }

  if (isLoading) return <LectureLoading />
  return (
    <Box safeAreaBottom safeAreaTop={hasSelectedIndex ? true : void 0}>
      <StatusBar style={hasSelectedIndex ? "dark" : "light"} />
      <AspectRatio
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
      <Column mx={4} mt={6}>
        {hasSelectedIndex && <><Title title={lecture?.title}/><Divider maxWidth="90%" my="2" /></>}
        {hasVideo ? (lecture.videos.map((v, i) => {
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
                >{formatDistanceToNow(new Date(v.createdAt), { addSuffix: true })}</Text>
              </Column>
              <TouchableOpacity onPress={() => status?.isPlaying ? video.current.pauseAsync() : video.current.playAsync()}>
                <Icon as={<Feather name={(onPlayingIndex === i) ? 'pause' : 'play'} />} size='md' mr="2" color={onPlayingIndex !== i ? COLOR_SCHEME.NARA_GREEN : 'muted.400'} />
              </TouchableOpacity>
            </Row>
          </TouchableOpacity>
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
    bottom: "6",
    shadow: "4",
  }
  return <Heading
    numberOfLines={1}
    ellipsizeMode='tail'
    color="muted.800"
    fontWeight="semibold"
    size='xl'
    maxWidth='80%'
    {...isLight ? lightStyles : {}}
  >{title}</Heading>
}

function VideoLine(video: Video): JSX.Element {
  return null
}
