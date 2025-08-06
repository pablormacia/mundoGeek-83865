import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import Header from './src/components/Header';
import CategoriesScreen from './src/screens/CategoriesScreen';
import ProductsScreen from './src/screens/ProductsScreen';
import { useState,useEffect } from 'react';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [categorySelected, setCategorySelected] = useState("")
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
    <>
      <StatusBar style="light" />
      {
        categorySelected
          ?
          <>
            <Header title="Mundo Geek" subtitle="Productos" />
            <ProductsScreen category={categorySelected} />
          </>
          :
          <>
            <Header title="Mundo Geek" subtitle="Categorías" />
            <CategoriesScreen setCategorySelected={setCategorySelected} />
          </>
      }

    </>
  );
}

const styles = StyleSheet.create({
});
