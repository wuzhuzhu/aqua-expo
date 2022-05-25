import {AspectRatio, Box, Column, Icon, Row, Spacer, Text, Center, Badge, Stack, Heading} from "native-base"
import React, {useEffect, useMemo, useCallback} from "react"
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
import PublicationInfo from './publication-info'
import {COLOR_SCHEME} from "../../constants/Colors"
import {PDF_URL_BASE} from "../../utils/config"
import {NativeStackNavigationProp} from "@react-navigation/native-stack"

type IPublicationCardType = {
  cardWidth: number
  rank: number
  isLeft: boolean
  cardSpace: number
  p: PublicationType
  expandedIndex: number
  setExpandedIndex: Function
  navigation: NativeStackNavigationProp<any>
}

const PublicationCard = function ({p, cardWidth, cardSpace, isLeft, rank, expandedIndex, setExpandedIndex, navigation}: IPublicationCardType) {
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
    if (chapters.length > 0) {
      // use automate layout animation
      LayoutAnimation.configureNext({...LayoutAnimation.Presets.linear, duration: 250});
      setExpandedIndex(isChaptersShow ? -1 : rank)
    } else {
      return
    }
  };

  const navigatePublication = function (navigation, pdfUrl, page = 1 as number | undefined, title) {
    console.log('opening pdf: ',pdfUrl,page)
    let pdfViewPageUrl =  `${PDF_URL_BASE}/pdf/${encodeURIComponent(pdfUrl)}/${page}`
    // if (page) pdfViewPageUrl += `/${page}`
    navigation.navigate('WebModal', {title, url: pdfViewPageUrl})
  }

  const wrapperStyle = {
    mb: 4,
    // bg: 'warning.200',
    borderWidth: 1,
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

  return (<BetterButton onPressBtn={() => navigatePublication(navigation, p.pdfUrl, undefined, p.title)} bg="muted.100">
  <NBAnimatedView {...wrapperStyle} w={wrapperWidth} overflow="hidden" mr={mr}>
    <Animated.View style={[{overflow: 'hidden'}]}>
    <AspectRatio ratio={3/4} height={imgHeight}>
      <ImageBackground
        bg="muted.100"
        source={{uri: p.imgUrl}}
        width={cardWidth}
        resizeMode="cover" alt={p.title}
        borderTopLeftRadius={6}
        borderTopRightRadius={isChaptersShow ? 0 : 6}
        overflow="hidden"
      >
        {/*<NBAnimatedView flex={1} style={[dynamicImgStyle]}></NBAnimatedView>*/}
        <NBAnimatedView position="absolute" top="3" py="1.5" style={rank === 0 ? showUpAnimationStyles : null}>
          <BetterButton onPressBtn={toggleChapter}>
              <Center bg={COLOR_SCHEME.NARA_BLUE} flexDirection="row" p={2}>
                <Icon mr="1" as={Feather} name={isChaptersShow ? 'book-open' : 'book'} color="warmGray.50" size='sm'  />
                <Text fontWeight="bold" fontSize="xs" color="warmGray.50">{`${chapters.length} Chapters`}</Text>
              </Center>
          </BetterButton>
        </NBAnimatedView>
      </ImageBackground>
    </AspectRatio>
      <PublicationInfo isAbsolute={isChaptersShow} p={p} />
    </Animated.View>
    {isChaptersShow ? <Box h={imgHeight} bg="muted.100">
      <Animated.ScrollView
        h="100"
        snapToInterval={cardWidth + 16}
        horizontal
        onScroll={scrollHandler}
        scrollEventThrottle={16}
        showsHorizontalScrollIndicator={false}
      >
        <Column bg="muted.100" flexWrap pr={wrapperWidth - cardWidth}>
          {chapters.map(c => <ChapterCard
            key={`chapter-${c.id}`}
            c={c} rowWidth={wrapperWidth - cardWidth}
            pdfUrl={p.pdfUrl}
            navigatePublication={navigatePublication}
            navigation={navigation}
          />)}
        </Column>
      </Animated.ScrollView>
    </Box> : <></>}
  </NBAnimatedView>
  </ BetterButton>)
}

export default PublicationCard
