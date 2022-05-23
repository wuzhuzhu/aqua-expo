import {Column, Row, Box, Text, Image, Icon, AspectRatio, Pressable} from "native-base"
import React, {useMemo, memo, useCallback, useState} from "react"
import {ImageBackground} from '../../utils/motify'
import {PublicationType} from "../../types"
import {getImagePlaceHolder, getTimeDistanceStr} from '../../utils/helper'
import {Feather} from '@expo/vector-icons'
import Animated, {useSharedValue, useAnimatedStyle, withTiming} from 'react-native-reanimated'

import BetterButton from '../common/better-btn'
import {PDF_URL_BASE} from "../../utils/config"

type IPublicationCardType = {
  cardWidth: number
  rank: number
  marginRight: number
  p: PublicationType
}

const PublicationCard = function ({p, cardWidth, marginRight = 0}: IPublicationCardType) {
  // animations
  const [isChaptersShow, _toggleChaptersShow] = useState(false)
  const wrapperWidth = useSharedValue(150);
  const wrapperAnimation = useAnimatedStyle(() => {
    return {
      width: withTiming(wrapperWidth.value, {duration: 750})
    }
  });
  function toggleChapter() {
    // !important: change the width base on [PREV] state
    !isChaptersShow ?
      wrapperWidth.value = cardWidth * 2 + marginRight :
      wrapperWidth.value = cardWidth
    _toggleChaptersShow(!isChaptersShow)
  };

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
  <Column {...wrapperStyle}>
    <AspectRatio ratio={3/4}>
      <ImageBackground
        source={{uri: p.imgUrl || getImagePlaceHolder(300, 400)}}
        resizeMode="cover" alt={p.title}
        borderTopLeftRadius={6}
        borderTopRightRadius={6}
      >
        <BetterButton onPressBtn={toggleChapter}>
          <Box p={2}>
            <Icon as={Feather} name="book" color="muted.100" size='lg' />
          </Box>
        </BetterButton>
      </ImageBackground>
    </AspectRatio>
    <Column>
      <Text numberOfLines={1}>{wrapperWidth.value}</Text>
      <Text numberOfLines={1}>{isChaptersShow.toString()}</Text>
      <Text numberOfLines={1}>{p.title}</Text>
      {/*<Text numberOfLines={1}>{p.title}</Text>*/}
      {/*<Text numberOfLines={1}>{p.author}</Text>*/}
      {/*<Text numberOfLines={1}>{timeToNow}</Text>*/}
    </Column>
  </Column>
  </ BetterButton>)
}

export default PublicationCard
