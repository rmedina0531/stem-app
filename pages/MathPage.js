import React from "react";

import { StyleSheet, View, Text, Image, TouchableOpacity,SafeAreaView } from "react-native";
import TopicPage from "../components/TopicPage";

const MathPage = (props) => {
  const { navigation } = props;
  return (
    <SafeAreaView style={styles.container}>
      <TopicPage
        title="Math"
        textColor="#FFD200"
        navigation={navigation}
        search="Math"
      />
      <Image 
            source={require('../assets/math.png')}
            style={styles.img}
          />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFD200",
    alignItems: "center",
    justifyContent: "center",
  },
  img: {
    width: '100%',
    height: '40%'
  },
});
export default MathPage;
