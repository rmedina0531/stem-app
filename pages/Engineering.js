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

const Engineering = (props) => {
  const { navigation } = props;
  return (
    <SafeAreaView style={styles.container}>
      <TopicPage
        title="Engineering"
        textColor="#EC5555"
        navigation={navigation}
        search="Engineering"
        image={require("../assets/engineeringJob.png")}
      />
      <Image source={require("../assets/engineer.png")} style={styles.img} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FF6F6F",
    alignItems: "center",
    justifyContent: "center",
  },
  img: {
    width: "100%",
    height: "40%",
  },
});
export default Engineering;
