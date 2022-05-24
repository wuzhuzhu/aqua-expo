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
import {useShowUpAnimation} from '../../hooks/useAnimation'

type IPublicationCardType = {
  cardWidth: number
  rank: number
  marginRight: number
  p: PublicationType
}

const PublicationCard = function ({p, cardWidth, marginRight = 0, rank}: IPublicationCardType) {
  // animations
  const [isChaptersShow, _toggleChaptersShow] = useState(false)
  const [animate, showUpAnimationStyles ] = useShowUpAnimation()
  const [wrapperWidth, setWrapperWidth] = useState(cardWidth)
  const layoutAnimatedStyle = {
    width: wrapperWidth
  }

  // btn show up alert
  useEffect(animate, [])
  function toggleChapter() {
    // use automate layout animation
    LayoutAnimation.configureNext({...LayoutAnimation.Presets.linear, duration: 300});
    setWrapperWidth(!isChaptersShow ? (cardWidth * 2 + Math.abs(marginRight)) : cardWidth)
    _toggleChaptersShow(!isChaptersShow)
  };

  const wrapperStyle = {
    mb: 4,
    mr: isChaptersShow ? 0 : ((marginRight > 0) ? marginRight : 0),
    // bg: 'warning.200',
    width: cardWidth,
    borderWidth: 1,
    borderColor: '#e2e8f0',
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    flexDirection: isChaptersShow ? 'row' : 'column',
    // display: 'inline-block',
  }
  const timeToNow = getTimeDistanceStr(p.createdAt)
  return (<BetterButton onPressBtn={() => console.log('hi')}>
  <NBAnimatedView {...wrapperStyle} style={layoutAnimatedStyle}>
    <AspectRatio ratio={3/4} width={cardWidth}>
      <ImageBackground
        source={{uri: p.imgUrl || getImagePlaceHolder(300, 400)}}
        resizeMode="cover" alt={p.title}
        borderTopLeftRadius={6}
        borderTopRightRadius={isChaptersShow ? 0 : 6}
        overflow="hidden"
      >
        <BetterButton onPressBtn={toggleChapter}>
          <Box p={3}>
            <NBAnimatedView style={rank === 0 ? showUpAnimationStyles : null}>
              <Icon as={Feather} name={isChaptersShow ? 'book-open' : 'book'} color="muted.100" size='xl' shadow={2} bg="rgba(0, 0, 0, 0.25)" />
            </NBAnimatedView>
          </Box>
        </BetterButton>
      </ImageBackground>
    </AspectRatio>
    <Column p={2} bg="muted.100">
      <Text numberOfLines={1}>cardWidth{cardWidth}</Text>
      <Text numberOfLines={1}>margin right{marginRight}</Text>
      <Text numberOfLines={1}>{wrapperWidth}</Text>
      <Text numberOfLines={1}>{timeToNow}</Text>
    </Column>
  </NBAnimatedView>
  </ BetterButton>)
}

export default memo(PublicationCard)
