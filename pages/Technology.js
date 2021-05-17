import React from "react";

import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import TopicPage from "../components/TopicPage";

const Technology = (props) => {
  const { navigation } = props;
  return (
    <SafeAreaView style={styles.container}>
      <TopicPage
        title="Technology"
        textColor="#13D2F6"
        navigation={navigation}
        search="Tech"
        image={require("../assets/technologyJob.png")}
      />
      <Image source={require("../assets/tech.png")} style={styles.img} />
    </SafeAreaView>
  );
};

export default Technology;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#13D2F6",
    alignItems: "center",
    justifyContent: "center",
  },
  img: {
    width: "100%",
    height: "40%",
  },
});
