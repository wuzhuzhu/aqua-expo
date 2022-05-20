import React, {useMemo} from "react"
import {Image, View, StyleSheet} from "react-native"
import { useNavigation } from '@react-navigation/native';
import {Text, Box, Heading, Row, Icon, Badge} from 'native-base'
// fix useNavigation & push ts err
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { MotiPressable } from 'moti/interactions'
import { formatDistanceToNow, subDays } from 'date-fns'
import {Feather, MaterialIcons} from '@expo/vector-icons'


import {LectureType} from "../../types"
import {COLOR_SCHEME} from '../../constants/Colors'
import {isDev} from "../../utils/helper"

export default function MasonryCard(lecture: LectureType): JSX.Element {
  const navigation = useNavigation<NativeStackNavigationProp<any>>()
  const onPressCard = function () {
    // TODO: 跳转到详情页
    // navigation.navigate('WebModal', { title: lecture?.name, url: lecture?.url })
  }
  const lastUpdatedStr = lecture?.updatedAt ?
    useMemo(() => {
      const updatedAt = isDev ? (subDays(new Date(), Math.random()*10)) : lecture.updatedAt
      return formatDistanceToNow(updatedAt as Date | number)
    }, []) : 'never'
  return <MotiPressable
    key={lecture.id}
    onPress={() => {console.log('press')}}
    animate={useMemo(
      () => ({ hovered, pressed }) => {
        'worklet'

        return {
          opacity: hovered || pressed ? 0.5 : 1,
          scale: hovered || pressed ? 0.96 : 1,
        }
      },
      []
    )}
  >
    <Box
      shadow={1}
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
        <Badge colorScheme="success" alignSelf="center" variant="outline">{`${lecture.videoCount} videos`}</Badge>
        <Row space={2} alignItems="center" maxWidth="80%">
          <Icon as={<Feather name="upload-cloud" />} size='sm' ml="2" color="muted.400" />
          <Text
            numberOfLines={1}
            ellipsizeMode='tail'
            color="muted.400"
          >
            <Text
              color="muted.600"
            >in {lastUpdatedStr}</Text>
          </Text>
        </Row>
      </Row>

    </Box>
  </MotiPressable>
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
