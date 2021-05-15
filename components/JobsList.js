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
  Linking,
} from "react-native";
import Button from "./Button";

const datajson = require("../data/jobs.json");

const JobsList = (props) => {
    
    const [modalVisible, setModalVisible] = useState(false);

    const currentTopic = props.category; 


    let card_list = datajson[currentTopic].map((card, i) => {
        return <View key={i} style={styles.topicContainer}>
                    <View style={styles.textContainer}>
                        
                        {/* display json file content */}
                        <Text style={styles.topicTitle}>{card.jobName}</Text>
                        
                        <TouchableOpacity onPress={() => {
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
                                    <Text></Text>
                                </SafeAreaView> 
                            </Modal>
                        }}>
                            <Text style={styles.topicLink} onPress={() => {Linking.openURL(card.link)}}>Learn More</Text>
                        </TouchableOpacity>
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
    
    export default JobsList;
    
    const styles = StyleSheet.create({
        listContainer: {
            flex: 1
        },
        scrollContainer: {
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
    