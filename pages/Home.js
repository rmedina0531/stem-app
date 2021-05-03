import React from "react";
import { Text, View } from "react-native";

// import custom components
import Button from "../components/Button";

const Home = (props) => {
  const { navigation } = props;
  const scienceHandler = () => navigation.navigate("Science");
  const technologyHandler = () => navigation.navigate("Technology");
  const engineeringHandler = () => navigation.navigate("Engineering");
  const mathHandler = () => navigation.navigate("Math");
  return (
    <View>
      <Text>My STEM APP</Text>
      <Button text="Science" onPress={scienceHandler} />
      <Button text="Technology" onPress={technologyHandler} />
      <Button text="Engineering" onPress={engineeringHandler} />
      <Button text="Math" onPress={mathHandler} />
    </View>
  );
};

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });

export default Home;
