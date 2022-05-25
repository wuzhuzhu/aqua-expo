import {AspectRatio, Box, Column, Icon, Row, Spacer, Text, Center, Badge, Stack, Heading} from "native-base"
import React, {useEffect, useMemo, useCallback} from "react"
import {LayoutAnimation, StyleSheet} from 'react-native'
import {
  AnimatedCenter,
  AnimatedLinearGradient,
  ImageBackground,
  NBAnimatedText,
  NBAnimatedView
} from '../../utils/motify'
import {PublicationType} from "../../types"
import {getTimeDistanceStr} from '../../utils/helper'
import {Feather} from '@expo/vector-icons'
import Animated, {
  Extrapolation,
  interpolate,
  interpolateColor,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
  SlideInLeft,
  SlideOutRight, useDerivedValue
} from 'react-native-reanimated'
import { LinearGradient } from 'expo-linear-gradient';

import BetterButton from '../common/better-btn'
import {useShowUpAnimation} from '../../hooks/useAnimation'
import ChapterCard from './chapters-card'
import PublicationInfo from './publication-info'
import {COLOR_SCHEME} from "../../constants/Colors"
import {PDF_URL_BASE} from "../../utils/config"
import {NativeStackNavigationProp} from "@react-navigation/native-stack"
import {background} from "native-base/lib/typescript/theme/styled-system"
import {transform} from "@babel/core"

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
    // console.log('opening pdf: ',pdfUrl,page)
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

  // !interpolate! chapter rows scroll animation
  const scrollDistance = useSharedValue(0)
  const scrollHandler = useAnimatedScrollHandler((e) => {
    scrollDistance.value = e.contentOffset.x
    // console.log(scrollDistance.value)
  })
  const pageW = cardWidth + 16
  const inputRange =[0, pageW*2, pageW*4]
  const animateBg = useAnimatedStyle(() =>{
    const backgroundColor = interpolateColor(
      scrollDistance.value,
      inputRange,
      ['#1469a8', '#37b055'],
    )
    const margin = interpolate(
      scrollDistance.value,
      inputRange,
      [0, 5],
    )
    return {
      backgroundColor,
      margin
    }
  })
  const Colors = {
    dark: {
      background: '#1469A8',
      circle: '#252525',
      text: '#F8F8F8',
    },
    light: {
      background: '#37B055',
      circle: '#FFF',
      text: '#1E1E1E',
    },
  };
  const animatedStyles = useAnimatedStyle(() => {
    const color = interpolateColor(
      scrollDistance.value,
      [0, 1],
      ['#1469A8', '#37B055']
    );
    const translateX = interpolate(
      scrollDistance.value,
      inputRange,
      [-250, 0, -250],
      { extrapolateRight: Extrapolation.CLAMP });

    return {
      // color,
      transform: [{ translateX }],
    };
  });

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
          <Box style={[{overflow: 'hidden'}]}>
            <BetterButton onPressBtn={toggleChapter}>
              <AnimatedLinearGradient
                style={[animatedStyles, {width: '600%', alignItems: 'flex-start'}]}
                height={18}
                // Button Linear Gradient
                opacity={0.8}
                colors={['#1469A8', '#8c036e', '#161f07', '#37B055']}
                end={{x: -1, y: 3}}
              />

              <Center style={{transform: [{translateY: -25}]}} flexDirection="row" p={2}>
                <Icon mr="1" as={Feather} name={isChaptersShow ? 'book-open' : 'book'} color="warmGray.50" size="sm"/>
                <NBAnimatedText fontWeight="bold" color="warmGray.50"
                                fontSize="xs">{`${chapters.length} Chapters`}</NBAnimatedText>
              </Center>
            </BetterButton>
          </Box>
        </NBAnimatedView>
      </ImageBackground>
    </AspectRatio>
      <PublicationInfo isAbsolute={isChaptersShow} p={p} />
    </Animated.View>
    {/* interpolate Demo <Animated.View style={animatedStyles} width={20} height={20}></Animated.View>*/}
    {isChaptersShow ? <Box h={imgHeight} bg="muted.100" shadow={3}>
      <Animated.ScrollView
        entering={SlideInLeft}
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

const styles = StyleSheet.create({
  gradient: {
    transform: [{ translateY: 0 }],
    // left: 0,
    zIndex: 200
  }
})

export default PublicationCard
