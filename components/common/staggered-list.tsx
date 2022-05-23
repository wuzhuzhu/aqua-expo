import {memo} from 'react'
import {Stagger} from "native-base"

type IStaggerdList = {
  children: JSX.Element
}

export const StaggeredList = memo(function ({children}: IStaggerdList) {
  return (
    <Stagger
      visible
      initial={{
        opacity: 0,
        translateY: 10
      }}
      animate={{
        opacity: 1,
        translateY: 0,
        transition: {
          delay: 100,
          duration: 350,
          stagger: {
            offset: 50,
          }
        }
      }}
      exit={{
        opacity: 0
      }}
    >
      {children}
    </Stagger>
  )
})

export default StaggeredList
