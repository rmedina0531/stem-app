import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ViewPropTypes,
  Modal,
  SafeAreaView,
  TouchableOpacity,
  Button,
} from "react-native";
import { Image } from "react-native-elements";

import TopicDetailsHeader from "./TopicDetailsHeader";
import { FlatList } from "react-native-gesture-handler";

const DetailEntry = (props) => {
  let [modalVisible, setModalVisible] = useState(false);
  let item = props.data;
  return (
    <View style={styles.topicContainer}>
      {/* more info modal */}
      <Modal
        animationType={"slide"}
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => {
          console.log("Modal has been closed.");
        }}
      >
        <Text style={{ fontSize: 40 }}>{item.topicTitle}</Text>
        <Button
          title="Click me"
          color="red"
          onPress={() => {
            setModalVisible(!modalVisible);
          }}
        />
      </Modal>
      {/* icon */}
      <View style={styles.imgContainer}>
        <Image uri={item.topicIcon} style={styles.topicIcon} />
      </View>
      {/* text */}
      <View style={styles.textContainer}>
        <Text style={styles.topicTitle}>{item.topicTitle}</Text>
        <Text style={styles.topicIntro}>{item.topicIntro}</Text>
      </View>
      <TouchableOpacity
        onPress={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <Text style={styles.topicLink}>Learn More</Text>
      </TouchableOpacity>
    </View>
  );
};

const TopicDetails = (props) => {
  const renderItem = ({ item }) => {
    return <DetailEntry data={item} topicTitle={props.topic} />;
  };

  // const detailsList = props.json;
  // let { topicIcon, topicTitle, topicIntro, topicDescription, resources} = detailsList[0];  //depends on which category I'm in
  const dataList = require("../data/topicDetails.json")[props.topic];
  // const topics = datajson[props.title];

  return (
    <View style={styles.listContainer}>
      <TopicDetailsHeader
        category={props.topic}
        exitHandler={props.exit}
        backgroundColor={props.color}
        topicImage={props.headImg}
      />
      <FlatList
        data={dataList}
        renderItem={renderItem}
        keyExtractor={(item) => item.topicTitle}
      ></FlatList>
      {/* <TopicDetailList category={props.topic} /> */}
    </View>
  );
};

export default TopicDetails;

const styles = StyleSheet.create({
  listContainer: {
    height: "100%",
    width: "100%",
  },
  scrollContainer: {
    // backgroundColor: 'yellow',
    width: "100%",
  },
  topicContainer: {
    backgroundColor: "#f0f0f0",
    flexDirection: "row",
    margin: 20,
    padding: 10,
    borderRadius: 20,
  },
  imgContainer: {
    flex: 0.5,
    justifyContent: "center",
    alignItems: "center",
  },
  topicIcon: {
    height: 100,
    width: 100,
    borderRadius: 20,
  },
  textContainer: {
    flex: 1,
    marginTop: 5,
    marginLeft: 10,
  },
  topicTitle: {
    fontSize: 25,
    color: "#595959",
    fontWeight: "bold",
  },
  topicIntro: {
    color: "#595959",
    marginTop: 3,
    marginBottom: 10,
    fontSize: 15,
  },
  topicLink: {
    color: "#5EAC79",
    fontSize: 15,
  },
});
