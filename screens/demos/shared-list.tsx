import React from 'react'
import { View, TouchableOpacity, Image, StyleSheet } from 'react-native'
// Make sure this import isn't `react-native-shared-element` 👇
import { SharedElement } from 'react-navigation-shared-element'

const imageSource = { uri: 'https://source.unsplash.com/random' }

export default function Origin({navigation}) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('Detail')}>
        <SharedElement id="someUniqueId">
          <Image source={imageSource} style={styles.image} />
        </SharedElement>
      </TouchableOpacity>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    height: 200,
    width: 200,
  },
})
