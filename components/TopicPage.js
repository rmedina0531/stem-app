import React, { useState } from "react";
import { StyleSheet, View, Text, Modal } from "react-native";
import Button from "./Button";

import Quiz from "../components/Quiz";

const TopicPage = (props) => {
  const [quizOpen, setQuizOpen] = useState(false);
  const closeQuizHandler = () => setQuizOpen(false);
  return (
    <View style={{ backgroundColor: props.textColor }}>
      {/* quiz modal */}
      <Modal visible={quizOpen} animationType="slide">
        <Quiz title={props.title} exitHandler={closeQuizHandler} />
      </Modal>

      <Text style={[styles.title, { color: props.textColor }]}>
        {props.title}
      </Text>
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
            text={props.title + " Topics"}
            style={styles.buttonStyle}
            textColor={props.textColor}
          />
          <Button
            text="Stories"
            style={styles.buttonStyle}
            textColor={props.textColor}
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
            text="When I grow up!"
            style={styles.buttonStyle}
            textColor={props.textColor}
          />
          <Button
            text="Quiz Me!"
            style={styles.buttonStyle}
            textColor={props.textColor}
            onPress={() => setQuizOpen(true)}
          />
        </View>
      </View>
    </View>
  );
};

export default TopicPage;

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
    backgroundColor: "#FFFFFF",
    height: 150,
    width: 175,
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
});