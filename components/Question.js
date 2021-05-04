import React, { useState } from "react";

import { Text, View, StyleSheet } from "react-native";
import Button from "./Button";

const Question = (props) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const { type, question, a, b, c, d, answer } = props.json[currentQuestion];
  const [selected, setSelected] = useState(null);
  const nextHandler = () => {
    setCurrentQuestion(currentQuestion + 1);
  };
  const selectedA = () => {
    setSelected("a");
  };
  const selectedB = () => {
    setSelected("a");
  };
  const selectedC = () => {
    setSelected("a");
  };
  const selectedD = () => {
    setSelected("a");
  };

  return (
    <View>
      <Text style={styles.title}>{props.title + "Quiz stuff goes here"}</Text>
      <View
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <Button
            text={"A"}
            style={styles.buttonStyle}
            textColor={props.textColor}
            onPress={props.selectedA}
          />
          <Button
            text="B"
            style={styles.buttonStyle}
            textColor={props.textColor}
            onPress={props.selectedB}
          />
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <Button
            text="C"
            style={styles.buttonStyle}
            textColor={props.textColor}
            onPress={props.selectedC}
          />
          <Button
            text="D"
            style={styles.buttonStyle}
            textColor={props.textColor}
            onPress={props.selectedD}
          />
        </View>
      </View>
      <Button
        text="Close Quiz"
        onPress={props.exitHandler}
        color="#DDDDDD"
      ></Button>
    </View>
  );
};

export default Question;

const styles = StyleSheet.create({
  buttonContainer: {
    justifyContent: "center",
  },
  title: {
    fontSize: 40,
    textAlign: "center",
    marginBottom: 100,
    marginTop: 40,
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
  buttonStyle: {
    backgroundColor: "#555555",
    height: 150,
    width: 175,
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
});
