import { StatusBar } from 'expo-status-bar';
import { NativeBaseProvider, Box  } from 'native-base'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {
  QueryClientProvider,
} from 'react-query'

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import queryClient from './utils/query'

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <NativeBaseProvider>
        <QueryClientProvider client={queryClient}>
          <Navigation colorScheme={colorScheme} />
          <StatusBar />
        </QueryClientProvider>
      </NativeBaseProvider>
    );
  }
}
