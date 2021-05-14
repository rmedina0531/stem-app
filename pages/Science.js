import React from "react";

import { StyleSheet, View, Text } from "react-native";
import TopicPage from "../components/TopicPage";

const Science = (props) => {
  const { navigation } = props;
  return (
    <View style={styles.container}>
      <TopicPage
        title="Science"
        textColor="#98c484"
        navigation={navigation}
        search="Science"
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#98c484",
    alignItems: "center",
    justifyContent: "center",
  },
});
export default Science;
