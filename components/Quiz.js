import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ViewPropTypes,
  Modal,
} from "react-native";
import Button from "./Button";
import Question from "./Question";

import AsyncStorage from "@react-native-community/async-storage";

// import quiz from "./otherquiz.json";
const Quiz = (props) => {
  const datajson = require("../data/quiz.json");
  const questions = datajson[props.title];

  const [score, setScore] = useState(0);
  const [prevScore, setPrevScore] = useState(0);

  const [questionOpen, setQuestionOpen] = useState(false);

  //   const startQuizHandler = () => {};
  return (
    <View>
      {/* display questions */}
      <Modal visible={questionOpen} animationType="slide">
        <Question
          json={questions}
          scoreHandler={setScore}
          prevScoreHandler={setPrevScore}
          closeHandler={setQuestionOpen}
        />
      </Modal>
      <Text style={styles.title}>{props.title} Quiz</Text>
      <Text style={styles.title}>Best Score: {prevScore}</Text>
      <Button
        text="Start Quiz"
        onPress={() => setQuestionOpen(true)}
        color="#AAAAAA"
      />
      <Button text="Exit" onPress={props.exitHandler} color="#AAAAAA" />
    </View>
  );
};

export default Quiz;
const styles = StyleSheet.create({
  buttonContainer: {
    justifyContent: "center",
  },
  title: {
    fontSize: 40,
    textAlign: "center",
    marginBottom: 50,
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
