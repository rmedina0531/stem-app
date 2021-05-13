import React from "react";

import { StyleSheet, View, Text } from "react-native";
import TopicPage from "../components/TopicPage";

const Technology = (props) => {
  const { navigation } = props;
  return (
    <View style={styles.container}>
      <TopicPage
        title="Technology"
        textColor="#80BFBB"
        navigation={navigation}
        search="Tech"
      />
    </View>
  );
};

export default Technology;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#80BFBB",
    alignItems: "center",
    justifyContent: "center",
  },
});
