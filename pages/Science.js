import React from "react";

import { StyleSheet, View, Text } from "react-native";
import TopicPage from "../components/TopicPage";

const Science = (props) => {
  const { navigation } = props;
  return (
    <View style={styles.container}>
      <TopicPage
        title="Science"
        textColor="#a5cf91"
        navigation={navigation}
        search="Science"
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#a5cf91",
    alignItems: "center",
    justifyContent: "center",
  },
});
export default Science;
