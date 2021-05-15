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

import JobsList from "./JobsList";

const JobsDetails = (props) => {

    const category = props.topic;

    return (
       <View style={styles.listContainer}>
           <Text style={styles.mainTitle}>{category}, When I Grow Up</Text>
            <JobsList
                category = {category}  
            />
       </View>
      );
    };

export default JobsDetails;
    
const styles = StyleSheet.create({ 
    listContainer:{
        height: '100%',
        width: '100%'
    },
    mainTitle :{
        fontSize: 30,
        color: 'black',
        fontWeight: 'bold',
        marginLeft: 30
      },
 });
    