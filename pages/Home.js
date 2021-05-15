import React from "react";
import { StyleSheet, Text, View, Image,ImageBackground } from "react-native";

// import custom components
import Button from "../components/Button";

const Home = (props) => {
  const { navigation } = props;
  const scienceHandler = () => navigation.navigate("Science");
  const technologyHandler = () => navigation.navigate("Technology");
  const engineeringHandler = () => navigation.navigate("Engineering");
  const mathHandler = () => navigation.navigate("Math");
  return (
    <ImageBackground source={require('../assets/background1.jpg')} style={styles.image}>
     <View style={styles.child}>
    <View style={styles.container}>
        <Image style={styles.logo} source={require('../assets/logo1.png')}/>
        <Text style={styles.title}>STEM-VERSE</Text>
        <View style={styles.buttonContainer}>
          <Button text="Science" onPress={scienceHandler} color="#7FD955" />
          <Button text="Technology" onPress={technologyHandler} color="#13D2F6" />
          <Button text="Engineering" onPress={engineeringHandler} color="#E54C4C"/>
          <Button text="Math" onPress={mathHandler} color="#F6C300" />
        </View>
    </View>
    </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#1C1C1C",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    flex: 1,
    resizeMode: 'center',
    justifyContent: "center",
  },
  child: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.7)',
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: "#FFFFFF",
    marginBottom: 30,
  },
  logo: {
    height: '26%',
    width: '65%',
    // marginTop: 150,
    marginBottom: 40
  },
});

export default Home;
