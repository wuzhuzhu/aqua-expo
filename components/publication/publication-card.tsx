import {Column, Row, Box, Text, Image, AspectRatio} from "native-base"
import React, {memo} from "react"
import {PublicationType} from "../../types"

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
    bg: 'warning.200',
    width: cardWidth,
    // display: 'inline-block',
  }
  return <Column {...wrapperStyle}>
    <AspectRatio ratio={3/4}>
      <Image source={{uri: p.imgUrl}} resizeMode="cover" alt={p.title} />
    </AspectRatio>
    <Text>{p.title}</Text>
  </Column>
}

export default memo(PublicationCard)
