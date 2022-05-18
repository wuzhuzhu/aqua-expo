import React, { useReducer } from 'react'
import { StyleSheet, Pressable } from 'react-native'
import { MotifiedBox } from '../utils/motify'
import {Box, HStack, Factory} from 'native-base'

function Shape() {
  return (
    <Box m={2}>
      <HStack justifyContent="center" space={2}>
        <Box bg="emerald.400" borderRadius={4} size={16}></Box>
        <Box bg="emerald.400" borderRadius={4} size={16}></Box>
        <Box bg="emerald.400" borderRadius={4} size={16}></Box>
        <MotifiedBox bg="emerald.400" borderRadius={4} size={16} animate={{ scale: [1.2, 0.8] }} transition={{
          loop: true,
          type: 'timing',
          duration: 500,
          delay: 100,
        }}></MotifiedBox>
      </HStack>
    </Box>
  )
}

export default function HelloWorld() {
  const [visible, toggle] = useReducer((s) => !s, true)
  return (
    <Pressable onPress={toggle} style={styles.container}>
      {visible && <Shape />}
    </Pressable>
  )
}

const styles = StyleSheet.create({
  shape: {
    justifyContent: 'center',
    height: 220,
    width: 220,
    borderRadius: 25,
    marginRight: 10,
    backgroundColor: 'white',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: 'red',
  },
})
