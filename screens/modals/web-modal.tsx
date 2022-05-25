import { WebView } from 'react-native-webview';
import { StyleSheet } from 'react-native';
import { View } from 'native-base'
import {RootStackScreenProps, RootTabScreenProps} from "../../types"
import {isDev} from "../../utils/helper"

export default function App({route}:RootStackScreenProps<'WebModal'>) {
  const url = route?.params?.url || `https://www.google.com.hk/search?q=${route?.params?.name}`
  if (isDev) { console.log('webModal:',url) }
  return (
    <WebView
      source={{ uri: url }}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
