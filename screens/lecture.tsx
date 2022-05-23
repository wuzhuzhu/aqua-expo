import React, {memo, useState, useRef, useMemo, useCallback} from 'react';
import { View, StyleSheet, Button, LayoutAnimation, Platform, UIManager, TouchableOpacity } from 'react-native';
import {Box, Column, Row, Text, AspectRatio, Divider, Image, Heading, Icon, Stagger} from 'native-base'
import { Video, AVPlaybackStatus } from 'expo-av';
import { StatusBar } from 'expo-status-bar';
import { formatDistanceToNow } from 'date-fns'

import {useLecture} from '../api/lectures'
import {LectureLoading} from '../components/common/loading'
import StaggeredList from '../components/common/staggered-list'
import VideoRow from '../components/lectures/video-list'
import ContolBtn from '../components/lectures/control-btn'
import {LectureType} from "../types"
import {useMembers} from "../api/members"
import {COLOR_SCHEME} from "../constants/Colors"
import {ImageBackground, ScrollView} from '../utils/motify'
import {isDev, windowHeight} from '../utils/helper'
import {Feather} from "@expo/vector-icons"
import {NativeStackNavigationProp, NativeStackScreenProps} from "@react-navigation/native-stack"

const showDev = false

if (
  Platform.OS === "android" &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

export default function Lecture({route, navigation}: NativeStackScreenProps<any>):JSX.Element {
  const lectureId = route?.params?.id
  const {data: lecture, isLoading, isSuccess, refetch, isFetching} = useLecture(lectureId)
  const videos = lecture?.videos ? lecture.videos : []
  const video = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0)
  const [status, setStatus] = useState({} as AVPlaybackStatus);

  const hasVideo = useMemo(() => Array.isArray(lecture?.videos) && (lecture?.videos?.length > 0), [lecture])
  const hasSelectedIndex = useMemo(() => !isNaN(currentIndex), [currentIndex]);
  const onPlayingIndex = useMemo(() => hasSelectedIndex && status?.isPlaying, [currentIndex, status]);
  const togglePlayback = useCallback(() => status?.isPlaying ? video.current.pauseAsync() : video.current.playAsync(), [])

  const handleVideoClick = useCallback((i) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.linear);
    setCurrentIndex(i)
  }, [currentIndex])

  if (isLoading) return <LectureLoading />
  return (
    <Box safeAreaTop flex={1}>
      <StatusBar style={hasSelectedIndex ? "dark" : "light"} />
      <AspectRatio
        maxHeight={0.6*windowHeight}
        ShadowBottomHeight="80"
        shadowRadius={20}
        shadowOpacity={0.5}
        w="100%" ratio={hasSelectedIndex ? 16 / 9 : 4 / 3}>
        <Video
          ref={video}
          source={{
            uri: isDev ? 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4' : lecture?.videos?.[`${currentIndex}`]?.videoUrl,
          }}
          useNativeControls
          resizeMode="contain"
          isLooping
          onPlaybackStatusUpdate={status => setStatus(() => status)}
        />
      </AspectRatio>
      <ScrollView px={4} mt={6}>
        <><Title title={lecture?.title} /><Divider maxWidth="90%" mt="2" bg={COLOR_SCHEME.NARA_GREEN} /></>
          {videos.map((v, i) => {
            return <VideoRow key={i} v={v} i={i} handleVideoClick={handleVideoClick} togglePlayback={togglePlayback} onPlayingIndex={onPlayingIndex} />
          })}
      </ScrollView>
      <ContolBtn status={status} video={video}/>
    </Box>
  );
}

type ITitleProps = {
  isLight?: boolean
  title?: string
}

const Title = memo(function ({isLight = false, title}: ITitleProps): JSX.Element {
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
})

