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

import { connect } from "react-redux";

const Quiz = (props) => {
  const datajson = require("../data/quiz.json");
  const questions = datajson[props.title];

  const [score, setScore] = useState(0);
  const [questionOpen, setQuestionOpen] = useState(false);

  let mainColor = null;

  if (props.title == "Science") {
    mainColor = "#98c484"
  }
  else if (props.title == "Technology") {
    mainColor = "#3698B4"
  }
  else if (props.title == "Engineering") {
    mainColor = "#E54C4C"
  }
  else {
    mainColor = "#E99A46"
  }

  return (
    <View style={[styles.container, { backgroundColor: mainColor}]}>
      {/* display questions */}
      <Modal visible={questionOpen} animationType="slide">
        <Question
          json={questions}
          title={props.title}
          scoreHandler={setScore}
          mainColor={mainColor}
          closeHandler={setQuestionOpen}
        />
      </Modal>
      <Text style={styles.title}>{props.title} Quiz</Text>
      <Text style={styles.title}>High Score: {props.quizData[props.title].maxScore}</Text>

      <View style={styles.bottomButtons}>

      <Button
          style={styles.bottomButtonStyle}
          textColor={mainColor}
          text="Exit"
          onPress={props.exitHandler}
          color="#AAAAAA"
        />

        <Button
          style={styles.bottomButtonStyle}
          textColor={mainColor}
          text="Start Quiz"
          onPress={() => setQuestionOpen(true)}
          color="#AAAAAA"
        />

      </View>
    </View>
  );
};

// export default Quiz;
export default connect(mapStateToProps, mapDispatchToProps)(Quiz);

function mapDispatchToProps(dispatch) {
  return {
    setMaxScore: (quizName) =>
      dispatch({ type: "SET_MAX_SCORE", quizName: quizName }),
  };
}

function mapStateToProps(state) {
  return {
    quizData: state.quizData,
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 40,
    textAlign: "center",
    marginBottom: 50,
    marginTop: 40,
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
    color: '#FFFFFF'
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
  bottomButtons: {

    flex: 1,
    justifyContent: "center",
    alignItems: "flex-end",
    display: "flex",
    flexDirection: "row",

  },

  bottomButtonStyle: {
    height: 50,
    width: 140,
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    backgroundColor: "white",

  },
});
