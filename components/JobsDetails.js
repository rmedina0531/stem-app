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
import TopicDetailsHeader from "./TopicDetailsHeader";

const JobsDetails = (props) => {
  const category = props.topic;
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.listContainer}>
      {/* <Modal animationType={"slide"} transparent={false} visible={modalVisible}>
      <Button
                    style={{
                      height: 20,
                      width: 20,
                    }}
                    title="Close"
                    color="white"
                    onPress={() => {
                      setModalVisible(!modalVisible);
                    }}
                  />
      </Modal> */}
      <Text style={styles.mainTitle}>{category}, When I Grow Up</Text>
      {/* <TopicDetailsHeader
      jobImg ={props.jobsImg}
      /> */}
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
