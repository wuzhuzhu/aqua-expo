import {memo} from 'react'
import {VStack, Row, Column, Skeleton, Center, Text, Icon} from 'native-base'
import {Feather} from '@expo/vector-icons'
import Animated, {BounceIn, FadeInDown, FadeInUp} from 'react-native-reanimated'
import {NBAnimatedText, NBAnimatedView} from '../../utils/motify'

import {COLOR_SCHEME} from '../../constants/Colors'

export const MasoryLoading = () => {
  return <Center safeAreaTop w="100%">
    <VStack w="90%" maxW="400" space={2} overflow="hidden" rounded="md">
      <Skeleton h="45" rounded="md" />
      <Skeleton h="60" w="70%" mb="6" rounded="md" startColor="primary.100" />
      <Row space={2}>
        <Skeleton h="40" w="32%"/>
        <Skeleton h="40" w="32%"/>
        <Skeleton h="40" w="32%"/>
      </Row>
      <Row space={2}>
        <Skeleton h="40" w="32%"/>
        <Skeleton h="40" w="32%"/>
        <Skeleton h="40" w="32%"/>
      </Row>
      <Row space={2}>
        <Skeleton h="40" w="32%"/>
        <Skeleton h="40" w="32%"/>
        <Skeleton h="40" w="32%"/>
      </Row>
    </VStack>
  </Center>;
};

export const MasoryLoading2 = () => {
  return <Center safeAreaTop w="100%">
    <VStack w="90%" maxW="400" space={2} overflow="hidden" rounded="md">
      <Skeleton h="45" rounded="md" />
      <Skeleton h="60" w="70%" mb="6" rounded="md" startColor="primary.100" />
      <Row space={2}>
        <Skeleton h="40" w="45%"/>
        <Skeleton h="40" w="45%"/>
      </Row>
      <Row space={2}>
        <Skeleton h="40" w="45%"/>
        <Skeleton h="40" w="45%"/>
      </Row>
      <Row space={2}>
        <Skeleton h="40" w="45%"/>
        <Skeleton h="40" w="45%"/>
      </Row>
    </VStack>
  </Center>;
};

export const LectureLoading = () => {
  return <Center mt={4} w="100%">
    <VStack w="90%" maxW="400" space={2} overflow="hidden" rounded="md">
      <Skeleton mb={4} h="250" rounded="md" />
      <Skeleton h="60" w="70%" mb="6" rounded="md" startColor="primary.100" />
      <Skeleton.Text />
      <Skeleton.Text />
    </VStack>
  </Center>;
};

export const ListCardsLoading = () => {
  return <Center safeArea mt={4} w="100%">
    <VStack w="90%" maxW="400" space={6} overflow="hidden" rounded="md">
      <Skeleton h={20} w="60%" startColor='amber.100'  />
      <Skeleton.Text mb={6} />

      <Skeleton h={50} rounded="md" />
      <Skeleton h={50} rounded="md" />
      <Skeleton h={50} rounded="md" />
      <Skeleton h={50} rounded="md" />
    </VStack>
  </Center>;
};



export const EmptyList = memo(({text = "There's Nothing Here."}: {text: string}) => {
  return <Column flex={1} justifyContent='center' alignItems='center'>
    <NBAnimatedView entering={FadeInDown}>
      <Icon as={Feather} name='cloud-off' color={COLOR_SCHEME.NARA_BLUE} size="4xl" />
    </NBAnimatedView>
    <NBAnimatedText entering={BounceIn} color="muted.500" mt={4}>OOOOps!</NBAnimatedText>
    <Text color="muted.500" mt={2}>{text}</Text>
  </Column>
})

type IListFooterType = {
  hasMore: boolean;
  isLoading: boolean;
  isRefetching: boolean;
  isFetching: boolean;
}

export const ListFooter = memo(({hasMore, isFetching, isLoading, isRefetching}: IListFooterType) => {
  return <Center mb={4}>
    {!hasMore && <Text color="muted.400">Reach the bottom already</Text>}
    {isFetching||isLoading||isRefetching && <Text color="muted.400">Loading more..</Text>}
  </Center>
})
