import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import Header from './src/components/Header';
import { useState, useEffect } from 'react';
import ShopStackNavigator from './src/navigation/shop/ShopStackNavigator';
import { NavigationContainer } from "@react-navigation/native";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [loaded, error] = useFonts({
    'Karla-Regular': require('./assets/fonts/Karla-Regular.ttf'),
    'Karla-Bold': require('./assets/fonts/Karla-Bold.ttf'),
    'Karla-Light': require('./assets/fonts/Karla-Light.ttf'),
    'Karla-Italic': require('./assets/fonts/Karla-Italic.ttf'),
    'PressStart2P-Regular': require('./assets/fonts/PressStart2P-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <NavigationContainer>
      <StatusBar style="light" />
      <ShopStackNavigator />
    </NavigationContainer>
  );
}

