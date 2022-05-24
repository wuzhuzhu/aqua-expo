import {ChapterType} from "../../types"
import {Box, Text} from "native-base"
import Animated, {FadeInRight} from "react-native-reanimated"
import React from "react"

type IChapterCardType = {
  c: ChapterType
  w: number
}

const ChapterCard = function ({c, w}: IChapterCardType) {
  return <Box mx={2} mt={3} w={w}>
    <Text fontSize="md" color="muted.800" fontWeight="semibold" numberOfLines={1}>{c.title}</Text>
    <Text fontSize="md" color="muted.500">[Page{c.page}]</Text>
  </Box>
}

export default React.memo(ChapterCard)
