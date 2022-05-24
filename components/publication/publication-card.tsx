import {AspectRatio, Box, Column, Icon, Row, Spacer, Text} from "native-base"
import React, {useEffect, useMemo} from "react"
import {LayoutAnimation} from 'react-native'
import {ImageBackground, NBAnimatedView} from '../../utils/motify'
import {PublicationType} from "../../types"
import {getTimeDistanceStr} from '../../utils/helper'
import {Feather} from '@expo/vector-icons'
import Animated, {
  Extrapolation,
  interpolate,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue
} from 'react-native-reanimated'

import BetterButton from '../common/better-btn'
import {useShowUpAnimation} from '../../hooks/useAnimation'
import ChapterCard from './chapters-card'

type IPublicationCardType = {
  cardWidth: number
  rank: number
  isLeft: boolean
  cardSpace: number
  p: PublicationType
  expandedIndex: number
  setExpandedIndex: Function
}

const PublicationCard = function ({p, cardWidth, cardSpace, isLeft, rank, expandedIndex, setExpandedIndex}: IPublicationCardType) {
  // show up Animation
  const [animate, showUpAnimationStyles ] = useShowUpAnimation()
  useEffect(animate, [])

  // animations
  const isChaptersShow = useMemo(() => expandedIndex === rank, [rank, expandedIndex])
  const wrapperWidth = useMemo(() => expandedIndex === rank ? (cardWidth * 2 + cardSpace) : cardWidth, [rank, expandedIndex]);
  const chapters = Array.isArray(p?.chapters) ? p.chapters : []
  const imgHeight = cardWidth *4/3
  const mr = isChaptersShow ? 0
    : isLeft ? cardSpace
      : 0
  // btn show up alert
  function toggleChapter() {
    // use automate layout animation
    LayoutAnimation.configureNext({...LayoutAnimation.Presets.linear, duration: 250});
    setExpandedIndex(isChaptersShow ? -1 : rank)
  };

  const wrapperStyle = {
    mb: 4,
    // bg: 'warning.200',
    // borderWidth: 1,
    borderColor: '#e2e8f0',
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    flexDirection: isChaptersShow ? 'row' : 'column',
    // display: 'inline-block',
  }
  const timeToNow = getTimeDistanceStr(p.createdAt)

  // !interpolate! chapter rows scroll animation
  const translateX = useSharedValue(0)
  const scrollHandler = useAnimatedScrollHandler((e) => {
    translateX.value = e.contentOffset.x
  })
  const dynamicImgStyle = useAnimatedStyle(() => {
    const pageW = cardWidth + 16
    const translateXViewPort = translateX.value % pageW
    const inputRange =[0, pageW/2, pageW]
    const scale = interpolate(
      translateXViewPort,
      inputRange,
      [1, 1.3, 1],
      Extrapolation.CLAMP
    )
    const borderRadius = interpolate(
      translateXViewPort,
      inputRange,
      [0, cardWidth/2, 0],
      Extrapolation.CLAMP
    )
    const opacity = interpolate(
      translateXViewPort,
      inputRange,
      [-0.5, 1, -0.5],
      Extrapolation.CLAMP
    )
    // todo: use translateY
    const translateY = interpolate(
      translateXViewPort,
      inputRange,
      [-imgHeight/2, 0, -imgHeight/2],
      Extrapolation.CLAMP
    )
    return {
      opacity,
      borderRadius,
      transform: [{
        scale,
      }]
    }
  })

  return (<BetterButton onPressBtn={() => console.log('hi')}>
  <NBAnimatedView {...wrapperStyle} w={wrapperWidth} overflow="hidden" mr={mr}>
    <Animated.View style={[{overflow: 'hidden'}]}>
    <AspectRatio ratio={3/4} height={imgHeight}>
      <ImageBackground
        source={{uri: p.imgUrl}}
        width={cardWidth}
        resizeMode="cover" alt={p.title}
        borderTopLeftRadius={6}
        borderTopRightRadius={isChaptersShow ? 0 : 6}
        overflow="hidden"
      >
        <BetterButton onPressBtn={toggleChapter}>
          <Row>
            <NBAnimatedView shadow={5} bg="rgba(0, 0, 0, 0.05)" p="2" style={rank === 0 ? showUpAnimationStyles : null}>
              <Icon as={Feather} name={isChaptersShow ? 'book-open' : 'book'} color="muted.100" size='xl'  />
            </NBAnimatedView>
            <Spacer flex={1} />
          </Row>
        </BetterButton>
        <NBAnimatedView bg="warning.600" flex={1} style={[dynamicImgStyle]}></NBAnimatedView>
      </ImageBackground>
    </AspectRatio>
    </Animated.View>
    <Box h={isChaptersShow ? imgHeight : 100} bg="muted.100">
      {
        !isChaptersShow ? <Column p={2} bg="muted.100">
          <Text numberOfLines={1}>rank: {rank}</Text>
          <Text numberOfLines={1}>cardWidth: {cardWidth}</Text>
          <Text numberOfLines={1}>margin right: {mr}</Text>
          <Text numberOfLines={1}>isLeft: {isLeft.toString()}</Text>
          <Text numberOfLines={1}>wrapper width: {wrapperWidth}</Text>
          <Text numberOfLines={1}>{timeToNow}</Text>
        </Column> : <Animated.ScrollView
          h="100"
          snapToInterval={cardWidth+16}
          horizontal
          onScroll={scrollHandler}
          scrollEventThrottle={16}
          showsHorizontalScrollIndicator={false}
        >
          <Column bg="muted.100" flexWrap pr={wrapperWidth-cardWidth}>
            {chapters.map(c => <ChapterCard key={`chapter-${c.id}`} c={c} rowWidth={wrapperWidth-cardWidth} />)}
          </Column>
        </Animated.ScrollView>
      }
    </Box>
  </NBAnimatedView>
  </ BetterButton>)
}

export default PublicationCard
