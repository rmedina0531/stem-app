import React from "react";

import { StyleSheet, View, Text } from "react-native";
import TopicPage from "../components/TopicPage";

const Engineering = (props) => {
  const { navigation } = props;
  return (
    <View>
      <TopicPage
        title="Engineering"
        textColor="#E54C4C"
        navigation={navigation}
      />
    </View>
  );
};

export default Engineering;
