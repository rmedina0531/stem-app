import React from "react";

import { StyleSheet, View, Text } from "react-native";
import TopicPage from "../components/TopicPage";

const Technology = (props) => {
  const { navigation } = props;
  return (
    <View>
      <TopicPage
        title="Technology"
        textColor="#80BFBB"
        navigation={navigation}
      />
    </View>
  );
};

export default Technology;

const styles = StyleSheet.create({
  buttonColor: {
    backgroundColor: "#000000",
  },
});
