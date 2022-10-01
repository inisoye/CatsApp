import * as React from 'react';
import { Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useTheme } from '@shopify/restyle';

import { AllCats, LikedCats } from 'screens';
import { AllCatsIcon, HeartIcon } from 'assets';
import { Theme } from 'lib';

export type NavigatorParamList = {
  'All cats': undefined;
  'Cats I like': undefined;
};

const { Navigator, Screen } = createBottomTabNavigator<NavigatorParamList>();

export const AppScreens: React.FunctionComponent = () => {
  const { colors, textVariants } = useTheme<Theme>();

  return (
    <NavigationContainer>
      <Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            /* Tab bar flex property has a higher impact on Android */
            flex: Platform.OS === 'ios' ? 0.11 : 0.13,
            elevation: 0,
            paddingHorizontal: 35,
            borderTopColor: '#e6e6e6',
          },
          tabBarItemStyle: {
            height: 48,
            alignSelf: 'center',
            padding: 0,
          },
          tabBarActiveTintColor: colors.primary,
          /* Static colour used as not repeated anywhere else. */
          tabBarInactiveTintColor: '#d3d3d4',
          tabBarLabelStyle: textVariants.tab,
        }}>
        <Screen
          component={AllCats}
          name="All cats"
          options={{
            tabBarIcon: ({ color, size }) => (
              <AllCatsIcon color={color} size={size} />
            ),

            tabBarTestID: 'menu-tab',
          }}
        />
        <Screen
          component={LikedCats}
          name="Cats I like"
          options={{
            tabBarIcon: ({ color, size }) => (
              <HeartIcon color={color} size={size} />
            ),
          }}
        />
      </Navigator>
    </NavigationContainer>
  );
};
