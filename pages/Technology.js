import React from "react";

import { StyleSheet, View, Text } from "react-native";
import TopicPage from "../components/TopicPage";

const Technology = (props) => {
  const { navigation } = props;
  return (
    <View style={styles.container}>
      <TopicPage
        title="Technology"
        textColor="#3698B4"
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
    backgroundColor: "#3698B4",
    alignItems: "center",
    justifyContent: "center",
  },
});
