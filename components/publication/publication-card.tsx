import {Column, Row, Box, Text, Image, AspectRatio, Pressable} from "native-base"
import React, {useMemo, memo, useCallback} from "react"
import {PublicationType} from "../../types"
import {getImagePlaceHolder, getTimeDistanceStr} from '../../utils/helper'
import {formatDistanceToNow} from "date-fns"

import BetterButton from '../common/better-btn'
import {PDF_URL_BASE} from "../../utils/config"

type IPublicationCardType = {
  cardWidth: number
  rank: number
  marginRight: number
  p: PublicationType
}

const PublicationCard = function ({p, cardWidth, marginRight = 0}: IPublicationCardType) {
  const wrapperStyle = {
    mb: 4,
    mr: marginRight,
    // bg: 'warning.200',
    width: cardWidth,
    borderWidth: 1,
    borderColor: '#e2e8f0',
    // display: 'inline-block',
  }
  const timeToNow = getTimeDistanceStr(p.createdAt)
  return (<BetterButton onPressBtn={() => console.log('hi')}>
  <Column {...wrapperStyle}>
    <AspectRatio ratio={3/4}>
      <Image
        source={{uri: p.imgUrl || getImagePlaceHolder(300, 400)}}
        resizeMode="cover" alt={p.title}
        borderTopLeftRadius={6}
        borderTopRightRadius={6}
      />
    </AspectRatio>
    <Column>
      <Text numberOfLines={1}>{p.title}</Text>
      <Text numberOfLines={1}>{p.author}</Text>
      <Text numberOfLines={1}>{timeToNow}</Text>
    </Column>
  </Column>
  </ BetterButton>)
}

export default PublicationCard
