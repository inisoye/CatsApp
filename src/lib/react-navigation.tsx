import * as React from 'react';
import { Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useTheme } from '@shopify/restyle';

import { AllCats, LikedCats } from 'screens';
import { AllCatsIcon, HeartIcon } from 'assets/icons';
import { Theme } from 'lib';

export type NavigatorParamList = {
  'All cats': undefined;
  'Cats I like': undefined;
};

const Tab = createBottomTabNavigator<NavigatorParamList>();

export const AllScreens: React.FunctionComponent = () => {
  const theme = useTheme<Theme>();
  const { primary } = theme.colors;
  const { tab } = theme.textVariants;

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            /* Tab bar flex property has a higher impact on Android */
            flex: Platform.OS === 'ios' ? 0.11 : 0.13,
            elevation: 0,
            paddingHorizontal: 35,
          },
          tabBarItemStyle: {
            height: 48,
            alignSelf: 'center',
            padding: 0,
          },
          tabBarActiveTintColor: primary,
          /* Static colour used as not repeated anywhere else. */
          tabBarInactiveTintColor: '#d3d3d4',
          tabBarLabelStyle: tab,
        }}>
        <Tab.Screen
          name="All cats"
          component={AllCats}
          options={{
            tabBarIcon: ({ color, size }) => (
              <AllCatsIcon color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Cats I like"
          component={LikedCats}
          options={{
            tabBarIcon: ({ color, size }) => (
              <HeartIcon color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
