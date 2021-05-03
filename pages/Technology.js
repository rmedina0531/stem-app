import React from "react";

import { StyleSheet, View, Text } from "react-native";
import TopicPage from "../components/TopicPage";

const Technology = () => {
  return (
    <View>
      <TopicPage title="Technology" textColor="#80BFBB" backgroundImage="" />
    </View>
  );
};

export default Technology;

const styles = StyleSheet.create({
  buttonColor: {
    backgroundColor: "#000000",
  },
});
