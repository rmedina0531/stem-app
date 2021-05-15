import React, { useState } from "react";

import { Text, View, StyleSheet } from "react-native";
import Button from "./Button";

const Question = (props) => {
  const questionList = props.json;
  let [currentQuestion, setCurrentQuestion] = useState(0);
  let [resultFlag, setResultFlag] = useState(false);
  let [score, setScore] = useState(0);
  let { type, question, a, b, c, d, answer } = questionList[currentQuestion];
  const [selected, setSelected] = useState(null);

  const nextHandler = () => {
    // check if question was correct and update score
    if (selected === answer) {
      setScore(score + 1);
    }
    // change to next question
    if (currentQuestion + 1 < questionList.length) {
      currentQuestion = currentQuestion + 1;
      setCurrentQuestion(currentQuestion);
      console.log(currentQuestion);
    } else {
      // console.log("flag trigger");
      // props.prevScoreHandler(score);
      setResultFlag(true);
    }
    setSelected(null);
  };
  const selectedA = () => {
    setSelected("a");
  };
  const selectedB = () => {
    setSelected("b");
  };
  const selectedC = () => {
    setSelected("c");
  };
  const selectedD = () => {
    setSelected("d");
  };

  if (resultFlag) {
    return (
      <View>
        <Text>Results</Text>
        <Text>Score: {score}</Text>
        <Button text="return" onPress={props.closeHandler} color="#AAAAAA" />
      </View>
    );
  } else {
    return (
      <View>
        <Text style={styles.title}>{question}</Text>
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
              text={a}
              style={
                selected === "a" ? styles.activeButtonStyle : styles.buttonStyle
              }
              textColor={props.textColor}
              onPress={selectedA}
            />
            <Button
              text={b}
              style={
                selected === "b" ? styles.activeButtonStyle : styles.buttonStyle
              }
              textColor={props.textColor}
              onPress={selectedB}
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
              text={c}
              style={
                selected === "c" ? styles.activeButtonStyle : styles.buttonStyle
              }
              textColor={props.textColor}
              onPress={selectedC}
            />
            <Button
              text={d}
              style={
                selected === "d" ? styles.activeButtonStyle : styles.buttonStyle
              }
              textColor={props.textColor}
              onPress={selectedD}
            />
          </View>
        </View>
        <Button text="Next" onPress={nextHandler} color="#AAAAAA"></Button>
        <Button
          text="Close Quiz"
          onPress={props.closeHandler}
          color="#DDDDDD"
        ></Button>
      </View>
    );
  }
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
  activeButtonStyle: {
    backgroundColor: "#555555",
    height: 150,
    width: 175,
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    borderWidth: 5,
    borderColor: "#00FF00",
  },
});
