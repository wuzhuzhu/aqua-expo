import {StyleSheet} from 'react-native'
import {FlatList, TouchableOpacity} from 'react-native'
import {MotiView} from 'moti'

import EditScreenInfo from '../components/EditScreenInfo'
import {Text, View} from '../components/Themed'
import {RootTabScreenProps} from '../types'
import {usePosts} from '../api/demo'

export default function TabOneScreen({navigation}: RootTabScreenProps<'Members'>) {
  const {data, isLoading, isSuccess} = usePosts()
  return (
    <>
      <Text style={styles.title}>Tab One</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)"/>
      <EditScreenInfo path="/screens/TabOneScreen.tsx"/>
      {isLoading ? <Text>加载中...</Text> :
        <MotiView
          style={styles.container}
          from={{opacity: 0, scale: 0.5}}
          animate={{opacity: 1, scale: 1}}
          transition={{
            // default settings for all style values
            type: 'timing',
            duration: 650,
            // set a custom transition for scale
            scale: {
              type: 'spring',
              delay: 100,
            },
          }}
        >
          <FlatList
            data={data}
            keyExtractor={(item) => `${item.id}`}
            renderItem={({item}) => (
              <View>
                <Text>
                  {item.title}
                </Text>
              </View>
            )}
          />
        </MotiView>}
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
})
