import React from "react";

import { StyleSheet, View, Text } from "react-native";
import TopicPage from "../components/TopicPage";

const MathPage = (props) => {
  const { navigation } = props;
  return (
    <View style={styles.container}>
      <TopicPage
        title="Math"
        textColor="#E99A46"
        navigation={navigation}
        search="Math"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E99A46",
    alignItems: "center",
    justifyContent: "center",
  },
});
export default MathPage;
