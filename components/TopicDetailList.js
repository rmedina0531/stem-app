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
    
    const [modalVisible, setModalVisible] = useState(false);

    const currentTopic = props.category; 


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
                        <TouchableOpacity onPress={() => {
                            // setModalVisible(!modalVisible)
                            <Modal
                            animationType={'slide'}
                            transparent={false}
                            visible={setModalVisible(!modalVisible)}
                            onRequestClose={() => {
                                console.log('Modal has been closed.');
                            }}>
                            <SafeAreaView>
                                <Button
                                    title="Click me"
                                    color = "red"
                                    onPress={() => {
                                    setModalVisible(!modalVisible);
                                    console.log(i, card[i] + '2nd console')
                                }}/>
                                        {/* {open_Modal} */}
                                <Text></Text>
                        </SafeAreaView> 
                    </Modal>
                            console.log(i, card[i])
                        }}>
                            <Text style={styles.topicLink}>Learn More</Text>
                        </TouchableOpacity>
                    </View>
                </View>
    });

    // let open_Modal = datajson[currentTopic].map((topic, j) =>{
    //     return <Text key={j} style={styles.topicTitle}>{topic.topicTitle}</Text>
    // });
    
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
            marginTop: 5,
            marginLeft: 10
        },
        topicTitle: {
            fontSize: 25,
            color: '#595959',
            fontWeight: 'bold',
        },
        topicIntro: {
            color: '#595959',
            marginTop: 3,
            marginBottom: 10,
            fontSize: 15
        },
        topicLink: {
            color: '#5EAC79',
            fontSize: 15
        },
    });
    