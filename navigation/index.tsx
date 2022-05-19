/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { FontAwesome } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName, Pressable } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
// 页面引用
import HomeScreen from '../screens/home';
import ModalScreen from '../screens/ModalScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import MembersScreen from '../screens/members';
import Lectures from '../screens/lectures';
import MotiScreen from '../screens/moti-demo';
import WebModal from '../screens/modals/web-modal'

import { RootStackParamList, RootTabParamList, RootTabScreenProps } from '../types';
import LinkingConfiguration from './LinkingConfiguration';

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Group screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Tab" component={BottomTabNavigator} />
      </Stack.Group>
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen
          name="WebModal"
          component={WebModal}
          options={({ route }) => ({ title: route?.params?.title })}
        />
        <Stack.Screen name="Modal2" component={ModalScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  const colorScheme = useColorScheme();
  const insets = useSafeAreaInsets();

  return (
    <BottomTab.Navigator
      initialRouteName="Members"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Colors[colorScheme].tint,
        tabBarStyle: { height: 48 + insets.bottom, paddingTop: 8 }
      }}
    >
      <BottomTab.Screen
        name="Members"
        component={MembersScreen}
        options={({ navigation }: RootTabScreenProps<'Members'>) => ({
          title: 'Membership',
          tabBarIcon: ({ color }) => <TabBarIcon name="users" color={color} />,
        })}
      />
      <BottomTab.Screen
        name="Lectures"
        component={Lectures}
        options={{
          title: 'Lectures',
          tabBarIcon: ({ color }) => <TabBarIcon name="play" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Publications"
        component={MotiScreen}
        options={{
          title: 'Publications',
          tabBarIcon: ({ color }) => <TabBarIcon name="book" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Database"
        component={MotiScreen}
        options={{
          title: 'Database',
          tabBarIcon: ({ color }) => <TabBarIcon name="server" color={color} />,
        }}

      />
    </BottomTab.Navigator>
  );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}