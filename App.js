import React, { useEffect } from "react";
import { useColorScheme } from "react-native";
// react-navigation 모듈
import { ThemeProvider } from "styled-components";
import { createSwitchNavigator } from "react-navigation";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Main from "./view/Main";
import LoginView from "./components/LoginView";
import { darkTheme, lightTheme } from "./components/ThemeMode";

const Home = createNativeStackNavigator();
// const Login = createSwitchNavigator();

export default function App() {
  useEffect(() => {}, []);
  const isLight = useColorScheme() === "light";

  return (
    <ThemeProvider theme={isLight ? lightTheme : darkTheme}>
      <NavigationContainer>
        <Home.Navigator
          screenOptions={{ headerBlurEffect: "light", headerTransparent: true }}
        >
          <Home.Screen
            name="Main"
            component={Main}
            options={{ headerShown: false }}
          />
          {/* <Home.Screen
            name="LoginView"
            component={LoginView}
            options={{ headerShown: false }}
          /> */}
        </Home.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}
