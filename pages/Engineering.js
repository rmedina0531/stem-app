import React from "react";

import { StyleSheet, View, Text } from "react-native";
import TopicPage from "../components/TopicPage";

const Engineering = (props) => {
  const { navigation } = props;
  return (
    <View style={styles.container}>
      <TopicPage
        title="Engineering"
        textColor="#E54C4C"
        navigation={navigation}
        search="Engineering"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E54C4C",
    alignItems: "center",
    justifyContent: "center",
  },
});
export default Engineering;
