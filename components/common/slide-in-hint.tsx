import {Slide, Alert, Text} from 'native-base'
import {memo} from 'react'

type ISlideInHintType = {
  isOpen: boolean
  content: string
}

const SlideInHint = ({isOpen, content}: ISlideInHintType) => {
  return <Slide in={isOpen} placement="bottom" duration={600}>
    <Alert justifyContent="center" status="warning" variant="top-accent">
      <Alert.Icon />
      <Text color="error.600" fontWeight="medium">
        {content}
      </Text>
    </Alert>
  </Slide>
}

export default memo(SlideInHint)
