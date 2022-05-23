import React, {useMemo, useCallback} from "react"
import {Image, View, StyleSheet} from "react-native"
import { useNavigation } from '@react-navigation/native';
import {Text, Box, Heading, Row, Icon, Badge} from 'native-base'
// fix useNavigation & push ts err
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { MotiPressable } from 'moti/interactions'
import { formatDistanceToNow, subDays } from 'date-fns'
import {Feather, MaterialIcons} from '@expo/vector-icons'

import {LectureType, RootStackParamList} from "../../types"
import {COLOR_SCHEME} from '../../constants/Colors'
import {isDev} from "../../utils/helper"
import BetterButton from '../common/better-btn'
import {MotifiBtn} from "../../utils/motify"
import {PDF_URL_BASE} from '../../utils/config'

export default function MasonryCard(lecture: LectureType): JSX.Element {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()
  const onPressCard = useCallback(function () {
    navigation.navigate('Lecture', { id: lecture?.id, title: lecture?.title })
  },[lecture])
  const lastUpdatedStr = lecture?.updatedAt ?
    useMemo(() => {
      const updatedAt = lecture?.updatedAt as number
      return formatDistanceToNow(new Date(updatedAt))
    }, []) : 'never'
  const videoCount = (Array.isArray(lecture?.videos) && (lecture?.videos.length !== 0)) ? lecture?.videos.length : 'no'
  return <BetterButton onPressBtn={onPressCard}>
    <Box
      // shadow={1}
      bg='blueGray.50'
      m={1}
      p={2}
      style={styles.wrapper}
    >
      <Image
        source={{ uri: lecture.imgUrl }}
        style={styles.image}
        resizeMode="cover"
      />
      <Heading
        numberOfLines={1}
        ellipsizeMode='tail'
        mt={2}
        color={COLOR_SCHEME.NARA_BlUE}
        size='sm'
      >{lecture.title}</Heading>
      <Row mt={2} justifyContent="space-between" overflow="hidden">
        <Badge colorScheme="success" alignSelf="center" variant="outline">{`${videoCount} videos`}</Badge>
        <Row space={2} alignItems="flex-end" maxWidth="80%">
          <Icon as={<Feather name="upload-cloud" />} size='sm' ml="2" color="muted.400" />
          <Text
            numberOfLines={1}
            ellipsizeMode='tail'
            fontSize='xs'
          >
            <Text
              color="muted.400"
            >in {lastUpdatedStr}</Text>
          </Text>
        </Row>
      </Row>

    </Box>
  </BetterButton>
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#e2e8f0',
    borderRadius: 10
  },
  image: {
    height: 130,
    alignSelf: "stretch",
    borderTopRightRadius: 6,
    borderTopLeftRadius: 6,
    margin: -8,
    marginBottom: 0
  }
})
