import React from "react";

import { StyleSheet, View, Text } from "react-native";
import TopicPage from "../components/TopicPage";

const MathPage = (props) => {
  const { navigation } = props;
  return (
    <View>
      <TopicPage title="Math" textColor="#E99A46" navigation={navigation} />
    </View>
  );
};

export default MathPage;
