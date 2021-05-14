import React from "react";
import { StyleSheet, Text, View } from "react-native";

// import custom components
import Button from "../components/Button";

const Home = (props) => {
  const { navigation } = props;
  const scienceHandler = () => navigation.navigate("Science");
  const technologyHandler = () => navigation.navigate("Technology");
  const engineeringHandler = () => navigation.navigate("Engineering");
  const mathHandler = () => navigation.navigate("Math");
  return (
    <View style={styles.container}>
      <Text style={styles.title}>STEM-VERSE</Text>
      <View style={styles.buttonContainer}>
        <Button text="Science" onPress={scienceHandler} color="#5EAC79" />
        <Button text="Technology" onPress={technologyHandler} color="#3698B4" />
        <Button
          text="Engineering"
          onPress={engineeringHandler}
          color="#E54C4C"
        />
        <Button text="Math" onPress={mathHandler} color="#E99A46" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1C1C1C",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  title: {
    fontSize: 40,
    color: "#FFFFFF",
  },
});

export default Home;
