import React from "react";
import { StyleSheet, Text, TouchableOpacity,View } from "react-native";
// import { TouchableOpacity } from "react-native-gesture-handler";

const Button = (props) => {
  // console.log(props.color);
  return (
    <View style={styles.buttonStyle}>
    <TouchableOpacity
      style={
        props.style
          ? props.style
          : [styles.button, { backgroundColor: props.color }]
      }
      onPress={props.onPress}
    >
      <Text
        style={
          props.textColor
            ? [styles.text, { color: props.textColor }]
            : styles.text
        }
      >
        {props.text}
      </Text>
    </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
    width: 200,
    borderRadius: 30,
    margin: 10,
  },
  text: {
    color: "#ffffff",
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center'
    // padding: 10
  },
});

export default Button;
