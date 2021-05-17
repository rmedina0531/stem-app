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
import { createStore } from "redux";
import { Provider } from "react-redux";

const Stack = createStackNavigator();

const initialState = {
  quizData: {
    Science: {
      maxScore: 0,
      topicDetailsOpen: false,
      quizOpen: false,
      jobsDetailsOpen: false,
    },
    Math: {
      maxScore: 0,
      topicDetailsOpen: false,
      quizOpen: false,
      jobsDetailsOpen: false,
    },
    Engineering: {
      maxScore: 0,
      topicDetailsOpen: false,
      quizOpen: false,
      jobsDetailsOpen: false,
    },
    Technology: {
      maxScore: 0,
      topicDetailsOpen: false,
      quizOpen: false,
      jobsDetailsOpen: false,
    },
  },
};

const reducer = (state = initialState, action) => {
  let newState = { ...state };
  // console.log(state.quizData[action.quizName]);
  switch (action.type) {
    case "SET_MAX_SCORE":
      newState.quizData[action.quizName].maxScore = action.score;
  }
  return state;
};
const store = createStore(reducer);

export default function App() {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
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
      </Provider>
    </SafeAreaProvider>
  );
}
