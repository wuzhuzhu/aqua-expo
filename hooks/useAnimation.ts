import {
  Extrapolation,
  interpolate,
  useAnimatedScrollHandler,
  useAnimatedStyle, useDerivedValue,
  useSharedValue,
  withDelay,
  withRepeat,
  withSequence,
  withTiming
} from "react-native-reanimated"

export function useShowUpAnimation () {
  // attach showUpAnimationStyles to Animated.XXX component
  // fire animate in useEffect(page init eg.)/guesture callback
  const rotation = useSharedValue(0);
  function animate()  {
    rotation.value = withSequence(
      withDelay(1500, withTiming(-10, { duration: 50 })),
      withRepeat(withTiming(5, { duration: 100 }), 6, true),
      withTiming(0, { duration: 50 })
    )
  }
  const showUpAnimationStyles = useAnimatedStyle(() => {
    return {
      transform: [{ rotateZ: `${rotation.value}deg` }],
    };
  })
  return [animate, showUpAnimationStyles]
}

/*
export function useScrollHandler () {
  const scrollDistance = useSharedValue(0)
  const scrollHandler = useAnimatedScrollHandler((e) => {
    scrollDistance.value = e.contentOffset.x
  })
  const width = useDerivedValue(() => {
    return scrollDistance.value * 250;
  });

  return [scrollDistance, scrollHandler, width]
}
*/
