import React from "react";

import { StyleSheet, View, Text } from "react-native";
import TopicPage from "../components/TopicPage";

const Science = (props) => {
  const { navigation } = props;
  return (
    <View>
      <TopicPage title="Science" textColor="#5EAC79" navigation={navigation} />
    </View>
  );
};

export default Science;
