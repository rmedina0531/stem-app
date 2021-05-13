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
import Button from "./Button";
import images from '../assets/images';


const datajson = require("../data/topicDetails.json");

const TopicDetailList = (props) => {

    const currentTopic = props.category;  // SCIENCE

    let card_list = datajson[currentTopic].map((card, i) => {
        // console.log(card);
        return <View key={i} style={styles.topicContainer}>
                    <View style={styles.imgContainer}>
                    <Image 
                        source={images.topicIcon[card.topicTitle]}
                        style={styles.topicIcon}
                    />
                    </View>
                    <View style={styles.textContainer}>
                        <Text style={styles.topicTitle}>{card.topicTitle}</Text>
                        <Text style={styles.topicIntro}>{card.topicIntro}</Text>
                        <Text style={styles.topicLink} onPress={() => 
                        console.log("here")
                        }>Learn More</Text>
                    </View>
                </View>
    });
    
    
    return (
       <SafeAreaView style={styles.listContainer}>
       <ScrollView style={styles.scrollContainer}>
            {card_list}
       </ScrollView>
       </SafeAreaView>
      );
    };
    
    export default TopicDetailList;
    
    const styles = StyleSheet.create({
        listContainer: {
          // height: '50%',
          flex: 0.5,
        //   backgroundColor: 'blue'
        },
        scrollContainer: {
            // backgroundColor: 'yellow',
            width: '100%'
        },
        topicContainer: {
            backgroundColor: '#f0f0f0',
            flexDirection: "row",
            margin: 20,
            padding: 10,
            borderRadius: 20
        },
        imgContainer: {
            flex: 0.5,
            justifyContent: 'center',
            alignItems: 'center'
        },
        topicIcon: {
            height: 100,
            width: 100,
            borderRadius: 20
        },
        textContainer: {
            flex: 1,
            marginTop: 5
        },
        topicTitle: {
            fontSize: 25,
            color: '#595959',
            fontWeight: 'bold',
        },
        topicIntro: {
            color: '#595959',
            marginTop: 5,
            marginBottom: 15,
            fontSize: 15
        },
        topicLink: {
            color: '#5EAC79',
            fontSize: 15
        }
    });
    