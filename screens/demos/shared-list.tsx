import { SharedElement } from 'react-navigation-shared-element';
import {Column, Text, Image} from 'native-base'
import {TouchableOpacity} from 'react-native'
import {useLectures} from "../../api/lectures"

function renderItem(item, navigation) {
  return (<TouchableOpacity key={item.id} onPress={() => navigation.push('Detail', { item })}>
    <Text>name: {item.title}</Text>
    <SharedElement id={`item.${item.id}.imgUrl`}>
      <Image source={{
        uri: item.imgUrl
      }} alt="Alternate Text" size="xl" />
    </SharedElement>
  </TouchableOpacity>)
}

export default function SharedList({navigation}) {
  const {data, isLoading, isSuccess, refetch} = useLectures()
  if (isLoading) return <Text>loading</Text>
  return (
    <Column safeArea>
      <Text>123</Text>
      {data.map(i => renderItem(i, navigation))}
    </Column>
  )
}
