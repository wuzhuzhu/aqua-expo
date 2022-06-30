import { BottomTabBarHeightContext } from '@react-navigation/bottom-tabs';
import {Box} from "native-base"
import {memo} from "react"

function BottomTabSpacer() {
  return <BottomTabBarHeightContext.Consumer>
    {tabBarHeight => (
      <Box safeAreaBottom my={tabBarHeight} />
    )}
  </BottomTabBarHeightContext.Consumer>
}

export default memo(BottomTabSpacer)
