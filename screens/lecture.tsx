import {useState, useRef} from 'react';
import { View, StyleSheet, Button } from 'react-native';
import { Box, Column, Text, AspectRatio, Image } from 'native-base'
import { Video, AVPlaybackStatus } from 'expo-av';
import {LectureType} from "../types"

export default function Lecture({route, navigation}):JSX.Element {
  const lecture = route.params?.lecture
  const video = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(undefined as number | undefined)
  const [status, setStatus] = useState({} as AVPlaybackStatus);
  return (
    <Box bg="muted.600">
      <AspectRatio w="100%" ratio={16 / 9}>
        {currentIndex ? <Video
          ref={video}
          source={{
            uri: 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
          }}
          useNativeControls
          resizeMode="contain"
          isLooping
          onPlaybackStatusUpdate={status => setStatus(() => status)}
        /> : <Image
          source={{
            uri: lecture?.imgUrl,
          }}
        />}
      </AspectRatio>

      <View style={styles.buttons}>
        <Button
          title={status?.isPlaying ? 'Pause' : 'Play'}
          onPress={() =>
            status?.isPlaying ? video.current.pauseAsync() : video.current.playAsync()
          }
        />
      </View>
    </Box>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
