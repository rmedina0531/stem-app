import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ViewPropTypes,
  Modal,
  Image,
  SafeAreaView,
  TouchableOpacity,
  Button,
} from "react-native";

import JobsList from "./JobsList";

const JobsDetails = (props) => {
  const category = props.topic;
  const [modalVisible, setModalVisible] = useState(false);
  const imgSrc = "../assets/" + category.toLowerCase() + "Job.png";
  return (
    <View style={styles.listContainer}>
      <Text style={styles.mainTitle}>{category}, When I Grow Up</Text>
      <Image
        source={props.image}
        style={{
          height: 150,
          width: 250,
          // resizeMode: "stretch",
          // marginHorizontal: 30,
        }}
      />
      <JobsList category={category} />
      <Button title="close" onPress={props.exit}></Button>
    </View>
  );
};

export default JobsDetails;

const styles = StyleSheet.create({
  listContainer: {
    height: "100%",
    width: "100%",
  },
  mainTitle: {
    fontSize: 30,
    color: "black",
    fontWeight: "bold",
    marginLeft: 30,
  },
});
