import {VStack, Row, Column, Skeleton, Center} from 'native-base'

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
