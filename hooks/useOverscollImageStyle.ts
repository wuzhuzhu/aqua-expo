import {useAnimatedScrollHandler, useAnimatedStyle, useSharedValue} from "react-native-reanimated"

export default function useOverscrollImageStyle() {
  const translationY = useSharedValue(0);
  const isScrolledMuch = useSharedValue(false);
  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      translationY.value = event.contentOffset.y;
      if (event.contentOffset.y > 60) {
        isScrolledMuch.value = true
      } else {
        isScrolledMuch.value = false
      }
    },
  });
  const overscollImageStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: (translationY.value > 0) ? 1 : 1+(-translationY.value/100),
        },
      ],
    };
  });

  return {overscollImageStyle, scrollHandler}
}
