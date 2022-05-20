import {Column, Text, Image} from 'native-base'
import {TouchableOpacity} from 'react-native'
import { SharedElement } from 'react-navigation-shared-element';


export default function SharedDetail({navigation, route}) {
  const { item } = route.params;
  return (
    <SharedElement id={`item.${item.id}.imgUrl`}>
      <Image source={{
        uri: item.imgUrl
      }} alt="Alternate Text" size="xl" />
    </SharedElement>
  );
}
