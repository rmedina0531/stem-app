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
          <Stack.Screen options={{headerShown: false}} name="Home" component={Home} />
          <Stack.Screen options={{headerShown: false}} name="Science" component={Science} />
          <Stack.Screen options={{headerShown: false}} name="Technology" component={Technology} />
          <Stack.Screen options={{headerShown: false}} name="Engineering" component={Engineering} />
          <Stack.Screen options={{headerShown: false}} name="Math" component={MathPage} />
          <Stack.Screen options={{headerShown: false}} name="Stories" component={Stories} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
