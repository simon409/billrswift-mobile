import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Stack } from 'expo-router';
import { NativeBaseProvider } from 'native-base';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
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

  Stack.defaultProps = {
    screenOptions: {
      headerShown: false,
    },
  };

  // Set the initial route name to your desired screen
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
        <SafeAreaProvider>
          <NativeBaseProvider>
            <Stack>
              <Stack.Screen name="(intro)"/>
              <Stack.Screen name="(onBoarding)"/>
              <Stack.Screen name="(login)"/>
              <Stack.Screen name="(register)"/>
              <Stack.Screen name="(otp)"/>
              <Stack.Screen name="(main)"/>
              <Stack.Screen name="+not-found" />
            </Stack>
          </NativeBaseProvider>
        </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}
