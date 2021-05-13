import React from "react";

import { StyleSheet, View, Text } from "react-native";
import TopicPage from "../components/TopicPage";

const Science = (props) => {
  const { navigation } = props;
  return (
    <View style={styles.container}>
      <TopicPage
        title="Science"
        textColor="#5EAC79"
        navigation={navigation}
        search="Science"
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#5EAC79",
    alignItems: "center",
    justifyContent: "center",
  },
});
export default Science;
