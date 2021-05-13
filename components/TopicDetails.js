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
} from "react-native";

import TopicDetailsHeader from "./TopicDetailsHeader";
import TopicDetailList from "./TopicDetailList";

const TopicDetails = (props) => {

const detailsList = props.json;
// let { topicIcon, topicTitle, topicIntro, topicDescription, resources} = detailsList[0];  //depends on which category I'm in
const datajson = require("../data/topicDetails.json");
const topics = datajson[props.title];
    
    return (
       <View style={styles.listContainer}>
            <TopicDetailsHeader 
                category = {props.topic}  
                exitHandler= {props.exit}
                backgroundColor = {props.color}
                topicImage = {props.headImg}
            />
            <TopicDetailList
                category = {props.topic}  
            />
       </View>
      );
    };

export default TopicDetails;
    
const styles = StyleSheet.create({ 
    listContainer:{
        height: '100%',
        width: '100%'
    }
 });
    