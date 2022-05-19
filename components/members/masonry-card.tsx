import React, {useMemo} from "react"
import {Image, View, TouchableOpacity} from "react-native"
import { useNavigation } from '@react-navigation/native';
// fix useNavigation & push ts err
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import {MemberType} from "../../types"
import {isDev} from "../../utils/helper"

export default function MasonryCard(member: MemberType): JSX.Element {
  const navigation = useNavigation<NativeStackNavigationProp<any>>()
  const RandomBool = useMemo(() => {
    return Math.random() < 0.5
  }, [])
  const RandomBoolB = Math.random() < 0.5
  const mockUri = RandomBool ? 'https://cdn.dribbble.com/users/24078/screenshots/15522433/media/e92e58ec9d338a234945ae3d3ffd5be3.jpg?compress=1&resize=400x300':
    (RandomBoolB ? 'https://cdn.motor1.com/images/mgl/2RQQg/s3/volkswagen-new-logo.jpg' : 'https://static.mybrandnewlogo.com/images/thumbnail.jpg')
  const onPressCard = function () {
    console.log(member)
    navigation.navigate('WebModal', { title: member?.name, url: member?.url })
  }
  return <TouchableOpacity onPress={onPressCard}>
    <View key={member.id} style={{ flex: 1, margin: 4 }}>
      <Image
        source={{ uri: isDev ? mockUri : member.logo }}
        style={{ height: RandomBool ? 120 : 150, alignSelf: 'stretch' }}
        resizeMode="cover"
      />
    </View>
  </TouchableOpacity>
}
