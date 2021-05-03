import { StatusBar } from "expo-status-bar";
import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// import pages
import Home from "./pages/Home";
import Science from "./pages/Science";
import Technology from "./pages/Technology";
import Engineering from "./pages/Engineering";
import MathPage from "./pages/MathPage";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Science" component={Science} />
        <Stack.Screen name="Technology" component={Technology} />
        <Stack.Screen name="Engineering" component={Engineering} />
        <Stack.Screen name="Math" component={MathPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
