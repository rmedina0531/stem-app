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
import images from '../assets/images';
import TopicDetailsHeader from "./TopicDetailsHeader";
import { FlatList } from "react-native-gesture-handler";

const DetailEntry = (props) => {
  let [modalVisible, setModalVisible] = useState(false);
  let item = props.data;
  return (
    <View style={styles.topicContainer}>
     
      {/* more info modal --------------------------------- */}
      <Modal
        animationType={"slide"}
        transparent={false}
        visible={modalVisible}
        >
        <SafeAreaView style={{ backgroundColor: props.maincolor}}>
        <View style={styles.infoContainer}>
            <View style={styles.textInfoContainer}>
                <View  style={styles.moreInfoHeader}>
                    <Image 
                        source={images.topicIcon[item.topicTitle]} 
                        style={styles.topicIcon} 
                    />
                    <Text style={{ fontSize: 40, margin: 25 }} >{item.topicTitle}</Text>
                </View>
                <View  style={styles.moreInfoText}>
                    <Text style={{ fontSize: 20, textAlign: 'center', margin: 20}} >{item.topicDescription}</Text>
                </View>
                <Button
                    title="Click me"
                    color="red"
                    onPress={() => {
                        setModalVisible(!modalVisible);
                    }}
                />
            </View>
        </View>
        </SafeAreaView>
      </Modal>

      {/* Topic Cards ------------------------------------------- */}
      {/* icon */}
      <View style={styles.imgContainer}>
        <Image 
            source={images.topicIcon[item.topicTitle]} 
            style={styles.topicIcon} 
        />
      </View>
      {/* text */}
      <View style={styles.textContainer}>
        <Text style={styles.topicTitle}>{item.topicTitle}</Text>
        <Text style={styles.topicIntro}>{item.topicIntro}</Text>
        <TouchableOpacity
            onPress={() => {
            setModalVisible(!modalVisible);
            }}
        >
        <Text style={styles.topicLink}>Learn More</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
};

const TopicDetails = (props) => {
  const renderItem = ({ item }) => {
    return <DetailEntry data={item} topicTitle={props.topic} maincolor={props.color}/>;
  };

  const dataList = require("../data/topicDetails.json")[props.topic];
  const imgList = require("../assets/images.js")[props.topicIcon];

  return (
    <View style={styles.listContainer}>
      <TopicDetailsHeader
        style={styles.tpContainer}
        category={props.topic}
        exitHandler={props.exit}
        backgroundColor={props.color}
        topicImage={props.headImg}
      />
      <FlatList
        style={styles.flatlistContainer}
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
  tpContainer: {
    // backgroundColor: 'yellow',
    width: "100%",
  },
//   moreInfoContainer: {
//       backgroundColor: 'blue'
//   },
  topicContainer: {
    backgroundColor: "#f0f0f0",
    flexDirection: "row",
    margin: 15,
    padding: 15,
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
    color: '#5EAC79',
    fontSize: 15
  },
  flatlistContainer: {
    flex: 0.5,
  },
  textInfoContainer: {
    backgroundColor: '#f0f0f0',
    height: '95%',
    margin: 20,
    borderRadius: 15,
   
  },
  infoContainer: {
    // backgroundColor: 'blue'

  },
  moreInfoHeader: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 40
  },
  moreInfoText: {
      alignItems: 'center',
      justifyContent: 'center',
  }
});
