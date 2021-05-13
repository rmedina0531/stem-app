import { StatusBar } from "expo-status-bar";
import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
// import pages
import Home from "./pages/Home";
import Science from "./pages/Science";
import Technology from "./pages/Technology";
import Engineering from "./pages/Engineering";
import MathPage from "./pages/MathPage";
import Stories from "./pages/Stories";

const Stack = createStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Science" component={Science} />
          <Stack.Screen name="Technology" component={Technology} />
          <Stack.Screen name="Engineering" component={Engineering} />
          <Stack.Screen name="Math" component={MathPage} />
          <Stack.Screen name="Stories" component={Stories} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
