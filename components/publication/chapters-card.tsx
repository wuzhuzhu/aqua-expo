import {ChapterType} from "../../types"
import {Box, Text} from "native-base"
import Animated, {FadeInRight} from "react-native-reanimated"
import React from "react"
import BetterButton from '../common/better-btn'
import {NativeStackNavigationProp} from "@react-navigation/native-stack"

type IChapterCardType = {
  c: ChapterType
  rowWidth: number
  pdfUrl: string
  navigatePublication: Function
  navigation: NativeStackNavigationProp<any>
}

const ChapterCard = function ({c, rowWidth, navigatePublication, navigation, pdfUrl}: IChapterCardType) {
  return <BetterButton onPressBtn={() => navigatePublication(navigation, pdfUrl, c.page, c.title)}>
    <Box mx={2} mt={4} w={rowWidth}>
      <Text fontSize="md" color="muted.800" fontWeight="semibold" numberOfLines={1}>{c.title}</Text>
      <Text fontSize="md" color="muted.500">[Page{c.page}]</Text>
    </Box>
  </BetterButton>
}

export default React.memo(ChapterCard)
