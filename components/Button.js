import React from "react";
import { StyleSheet, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const Button = (props) => {
  // console.log(props.color);
  return (
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
    fontSize: 20,
  },
});

export default Button;
