import React, {memo} from "react"
import {AspectRatio, Box, Center, Column, Image, Pressable, Text} from "native-base"
import {StyleSheet} from "react-native"
import {useNavigation} from "@react-navigation/native"
import {NativeStackNavigationProp} from "@react-navigation/native-stack"
import type {MemberType} from "../types"

type IMemberScreenType = {
  navigation: NativeStackNavigationProp<any>;
  children: React.ReactNode;
  route: { params: MemberType }
};

const MemberScreen = ({navigation, route}: IMemberScreenType) => {
  const {title: name='', url='', logo='', description=''} = route?.params;
  const goWebsite = function () {
    navigation.navigate('WebModal', { title: name, url })
  }
  return (
    <Pressable onPress={goWebsite}>
      <Center>
        <AspectRatio w="300" ratio={1}>
        <Image
          width={300}
          source={{
            uri: logo,
          }}
          resizeMode="contain"
          borderRadius={8}
          alt={name || "img"}
        />
        </AspectRatio>
        <Text>{description}</Text>
      </Center>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  wrapper: {},
})

export default memo(MemberScreen)
