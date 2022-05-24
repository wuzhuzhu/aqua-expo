import {Column, Row, Box, Text, Image, Icon, AspectRatio, Pressable} from "native-base"
import React, {useMemo, memo, useCallback, useState, useEffect} from "react"
import { View, StyleSheet, Button, LayoutAnimation, Platform, UIManager, TouchableOpacity } from 'react-native';
import {ImageBackground} from '../../utils/motify'
import {PublicationType} from "../../types"
import {getImagePlaceHolder, getTimeDistanceStr} from '../../utils/helper'
import {Feather} from '@expo/vector-icons'
import Animated, {useSharedValue, useAnimatedStyle, withTiming, withRepeat, withDelay, withSequence, withSpring, Easing} from 'react-native-reanimated'

import BetterButton from '../common/better-btn'
import {NBAnimatedView} from '../../utils/motify'
import {PDF_URL_BASE} from "../../utils/config"

type IPublicationCardType = {
  cardWidth: number
  rank: number
  marginRight: number
  p: PublicationType
}

const PublicationCard = function ({p, cardWidth, marginRight = 0, rank}: IPublicationCardType) {
  // animations
  const [isChaptersShow, _toggleChaptersShow] = useState(false)
  const [wrapperWidth, setWrapperWidth] = useState(cardWidth)
  const layoutAnimatedStyle = {
    width: wrapperWidth
  }
  function toggleChapter() {
    // use automate layout animation
    LayoutAnimation.configureNext(LayoutAnimation.Presets.linear);
    setWrapperWidth(!isChaptersShow ? (cardWidth * 2 + marginRight) : cardWidth)
    _toggleChaptersShow(!isChaptersShow)
  };

  // btn show up alert
  const rotation = useSharedValue(0);
  function animate()  {
    rotation.value = withSequence(
      withDelay(1500, withTiming(-10, { duration: 50 })),
      withRepeat(withTiming(20, { duration: 100 }), 6, true),
      withTiming(0, { duration: 50 })
    )
  }
  useEffect(animate, [])
  const showUpAnimationStyles = useAnimatedStyle(() => {
    return {
      transform: [{ rotateZ: `${rotation.value}deg` }],
    };
  })

  const wrapperStyle = {
    mb: 4,
    mr: (marginRight > 0) ? marginRight : 0,
    // bg: 'warning.200',
    width: cardWidth,
    borderWidth: 1,
    borderColor: '#e2e8f0',
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6
    // display: 'inline-block',
  }
  const timeToNow = getTimeDistanceStr(p.createdAt)
  return (<BetterButton onPressBtn={() => console.log('hi')}>
  <NBAnimatedView {...wrapperStyle} style={layoutAnimatedStyle}>
    <AspectRatio ratio={3/4}>
      <ImageBackground
        source={{uri: p.imgUrl || getImagePlaceHolder(300, 400)}}
        resizeMode="cover" alt={p.title}
        borderTopLeftRadius={6}
        borderTopRightRadius={6}
        overflow="hidden"
      >
        <BetterButton onPressBtn={toggleChapter}>
          <Box p={3}>
            <NBAnimatedView style={rank === 0 ? showUpAnimationStyles : null}>
              <Icon as={Feather} name={isChaptersShow ? 'book-open' : 'book'} color="muted.100" size='xl' shadow={1} />
            </NBAnimatedView>
          </Box>
        </BetterButton>
      </ImageBackground>
    </AspectRatio>
    <Column p={2} bg="muted.100">
      <Text numberOfLines={1}>{rank}</Text>
      <Text numberOfLines={1}>{p.title}</Text>
      <Text numberOfLines={1}>{p.author}</Text>
      <Text numberOfLines={1}>{timeToNow}</Text>
    </Column>
  </NBAnimatedView>
  </ BetterButton>)
}

export default memo(PublicationCard)
