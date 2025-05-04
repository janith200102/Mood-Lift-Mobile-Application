import {useState,useEffect} from 'react';
import { StatusBar } from 'expo-status-bar';
import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import * as Font from "expo-font";
import AppNavigator from "./navigation/AppNavigator";
import RootNavigator from "./navigation/RootNavigator";
import {SafeAreaProvider} from "react-native-safe-area-context";
import {PaperProvider} from "react-native-paper";
import theme from './constant/theme';

export default function App() {

  const [fontsLoaded,setFontsLoaded] = useState(false);

  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        // Montserrat
        "Montserrat-Regular": require("./assets/fonts/Montserrat-Regular.ttf"),
        "Montserrat-Bold": require("./assets/fonts/Montserrat-Bold.ttf"),
        "Montserrat-SemiBold": require("./assets/fonts/Montserrat-SemiBold.ttf"),
        "Montserrat-Medium":require("./assets/fonts/Montserrat-Medium.ttf"),

        // Poppins
        "Poppins-Regular": require("./assets/fonts/Poppins-Regular.ttf"),
        "Poppins-Bold": require("./assets/fonts/Poppins-Bold.ttf"),
        "Poppins-Light": require("./assets/fonts/Poppins-Light.ttf"),
        "Poppins-Medium": require("./assets/fonts/Poppins-Medium.ttf"),
        "Poppins-Thin": require("./assets/fonts/Poppins-Thin.ttf"),

        // Aloevera Display
        "AloeveraDisplay-Light":require("./assets/fonts/AloeveraDisplay-Light.ttf"),
        "AloeveraDisplay-Regular": require('./assets/fonts/AloeveraDisplay-Regular.ttf'),
        "AloeveraDisplay-Bold":require('./assets/fonts/AloeveraDisplay-Bold.ttf')
      });
      setFontsLoaded(true);
    }

    loadFonts();
  }, []);

  if (!fontsLoaded) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }
  return (
      <SafeAreaProvider>
          <PaperProvider theme={theme}>
            <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
            <RootNavigator/>
          </PaperProvider>
      </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
