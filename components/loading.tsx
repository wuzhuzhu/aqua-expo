import { VStack, Row, Skeleton, Center } from 'native-base'

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
