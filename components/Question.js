import React, { useState } from "react";

import { Text, View, StyleSheet } from "react-native";
import Button from "./Button";

import { connect } from "react-redux";

const Question = (props) => {
  const questionList = props.json;
  let [currentQuestion, setCurrentQuestion] = useState(0);
  let [resultFlag, setResultFlag] = useState(false);
  let [score, setScore] = useState(0);
  let { type, question, a, b, c, d, answer } = questionList[currentQuestion];
  const [selected, setSelected] = useState(null);

  const nextHandler = () => {
    // check if question was correct and update score
    if (!selected) {
      return;
    }

    tempScore = score + 1;
    if (selected === answer) {
      setScore(tempScore);
    }
    // change to next question
    if (currentQuestion + 1 < questionList.length) {
      currentQuestion = currentQuestion + 1;
      setCurrentQuestion(currentQuestion);
    } else {
      if (score > props.quizData[props.title].maxScore) {
        props.setMaxScore(props.title, tempScore);
      }
      // props.prevScoreHandler(score);
      setResultFlag(true);
    }
    setSelected(null);
  };
  const selectedA = () => {
    if (selected === "a") {
      setSelected(null);
    } else {
      setSelected("a");
    }
  };
  const selectedB = () => {
    if (selected === "b") {
      setSelected(null);
    } else {
      setSelected("b");
    }
  };
  const selectedC = () => {
    if (selected === "c") {
      setSelected(null);
    } else {
      setSelected("c");
    }
  };
  const selectedD = () => {
    if (selected === "d") {
      setSelected(null);
    } else {
      setSelected("d");
    }
  };

  if (resultFlag) {
    return (
      <View style={styles.container}>
        <View style={{backgroundColor: props.mainColor}}>
        <Text style={styles.title}>Results</Text>
        <Text style={styles.title}>Score: {score}</Text>
        </View>

        <View style={styles.bottomButtons}>

          <Button 
          style={styles.bottomButtonStyle}
          text="return" 
          onPress={props.closeHandler}
          />

        </View>


      </View>
    );
  } else {
    return (
      <View style={styles.container}>

        <View style={{backgroundColor: props.mainColor}}>
        <Text style={styles.title}>{question}</Text>
        </View>

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
                selected === "a" ? [styles.activeButtonStyle, { backgroundColor: props.mainColor }] : [styles.buttonStyle, { backgroundColor: props.mainColor }]
              }
              onPress={selectedA}
            />
            <Button
              text={b}
              style={
                selected === "b" ? [styles.activeButtonStyle, { backgroundColor: props.mainColor }] : [styles.buttonStyle, { backgroundColor: props.mainColor }]
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
                selected === "c" ? [styles.activeButtonStyle, { backgroundColor: props.mainColor }] : [styles.buttonStyle, { backgroundColor: props.mainColor }]
              }
              textColor={props.textColor}
              onPress={selectedC}
            />
            <Button
              text={d}
              style={
                selected === "d" ? [styles.activeButtonStyle, { backgroundColor: props.mainColor }] : [styles.buttonStyle, { backgroundColor: props.mainColor }]
              }
              textColor={props.textColor}
              onPress={selectedD}
            />
          </View>
        </View>

        <View style={styles.bottomButtons}>

        <Button
            style={styles.bottomButtonStyle}
            text="Close Quiz"
            onPress={props.closeHandler}
          ></Button>

          <Button
            style={styles.bottomButtonStyle}
            text="Next"
            onPress={nextHandler}
          ></Button>

        </View>

      </View>
    );
  }
};

// export default Question;

export default connect(mapStateToProps, mapDispatchToProps)(Question);

function mapDispatchToProps(dispatch) {
  return {
    setMaxScore: (quizName, score) =>
      dispatch({ type: "SET_MAX_SCORE", quizName: quizName, score: score }),
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
    marginBottom: 100,
    marginTop: 40,
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
    color: '#FFFFFF',
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
    backgroundColor: "#AAAAAA",

  },
});
