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

const TopicDetailsHeader = (props) => {
    
return (
    <View style={{
      backgroundColor: props.backgroundColor,
      borderRadius: 20,
      flex: 1,
    }}>
     <SafeAreaView style={styles.detailsContainer}>
        <TouchableOpacity activeOpacity={0.5} onPress={props.exitHandler}>
        <Image
          source={require('../assets/goBackBtn.png')}
          style={styles.goBackBtn}
        />
        </TouchableOpacity>
        <Text style={styles.mainTitle}>{props.category} Topics</Text> 
          <View style={styles.imgContainer}>
          <Image 
            source= {props.topicImage}
            style={styles.topicImage}
          />
          </View>
    </SafeAreaView>  
    </View>            
  );
};

export default TopicDetailsHeader;

const styles = StyleSheet.create({
    detailsContainer: {
      // height: '50%',
      flex: 1,
    },
    goBackBtn: {
      marginLeft: 30,
      marginBottom: 20
    },
    mainTitle :{
      fontSize: 30,
      color: 'white',
      fontWeight: 'bold',
      marginLeft: 30
    },
    topicImage: {
      height: 250,
      width: 280
      
    },
    imgContainer: {
      flex: 3,
      justifyContent: 'center',
      alignItems: 'center',
    }
});
