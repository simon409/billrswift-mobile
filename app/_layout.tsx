import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Stack } from 'expo-router';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    Roboto: require('../assets/fonts/Roboto-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  //TODO: Change the initial route name

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
        <SafeAreaProvider>
          <Stack screenOptions={{headerShown: false}} initialRouteName='(home)'>
            <Stack.Screen name="(intro)"/>
            <Stack.Screen name="(onBoarding)"/>
            <Stack.Screen name="(login)"/>
            <Stack.Screen name="(register)"/>
            <Stack.Screen name="(home)"/>
            <Stack.Screen name="(otp)"/>
            <Stack.Screen name="+not-found" />
          </Stack>
        </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}
