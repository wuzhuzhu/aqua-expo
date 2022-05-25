import {Heading, Row, Stack, Text} from "native-base"
import { LinearGradient } from 'expo-linear-gradient';

import {PublicationType} from "../../types"
import {COLOR_SCHEME} from "../../constants/Colors"
import React, {memo} from "react"

const PublicationInfo = memo(function ({p, isAbsolute}: {p: PublicationType, isAbsolute: boolean}) {
  const styles = {
    bg: 'muted.100',
    position: isAbsolute ? 'absolute' : 'relative',
    bottom: isAbsolute ? '0' : undefined,
    right: isAbsolute ? '0' : undefined,
    left: isAbsolute ? '0' : undefined,
  }
  const chapters = Array.isArray(p?.chapters) ? p.chapters : []
  return <Stack p={2} space={3} {...styles}>

    <Stack space={2}>
      <Heading size="md">
        {p.title}
      </Heading>
      <Row alignItems="baseline" justifyContent="flex-start">
        <Text fontSize="xs" color={COLOR_SCHEME.NARA_GREEN} fontWeight="500" ml="-0.5" mt="-1">
          {chapters.length ? `Tap Book Icon to ${isAbsolute ? 'Close' : 'Expand'}`: 'Tap Card to view'}
        </Text>
      </Row>
    </Stack>
    <Row alignItems="center" space={4} justifyContent="space-between">
      <Text fontWeight="400">{p.author}</Text>
      <Text color="coolGray.600" _dark={{
        color: "warmGray.200"
      }} fontWeight="400">
        6 mins ago
      </Text>
    </Row>
  </Stack>
})

export default PublicationInfo
