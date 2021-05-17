import React from "react";

import { StyleSheet, View, Text, Image, TouchableOpacity,SafeAreaView } from "react-native";
import TopicPage from "../components/TopicPage";


const Science = (props) => {
  const { navigation } = props;

  return (
    <SafeAreaView style={styles.container}>
      <TopicPage
        title="Science"
        textColor="#99D080"
        navigation={navigation}
        search="Science"
      />
      <Image 
            source={require('../assets/science.png')}
            style={styles.img}
          />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#99D080",
    alignItems: "center",
    justifyContent: "center",
  },
  img: {
    width: '100%',
    height: '40%'
  },
});
export default Science;
