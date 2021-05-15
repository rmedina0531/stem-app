import React, { useState } from "react";
import { StyleSheet, View, Text, Modal } from "react-native";
import Button from "./Button";

import Quiz from "../components/Quiz";
import TopicDetailsHeader from "./TopicDetailsHeader";
import TopicDetailList from "./TopicDetailList";
import TopicDetails from "./TopicDetails";

import JobsDetails from "./JobsDetails.js";

const TopicPage = (props) => {
  const { navigation } = props;
  const [quizOpen, setQuizOpen] = useState(false);
  const closeQuizHandler = () => setQuizOpen(false);

  const [topicDetailsOpen, setTopicDetailsOpen] = useState(false);
  const closeTopicDetails = () => setTopicDetailsOpen(false);

  const [jobsDetailsOpen, setJobsDetailsOpen] = useState(false);
  const closeJobsDetails = () => setJobsDetailsOpen(false);

  const currentTopic = (title) => {
    let topicDetailsHeaderImg = require("../assets/scienceTopicImg.png");

    if (title == "Science") {
      topicDetailsHeaderImg = require("../assets/scienceTopicImg.png");
    } else if (title == "Technology") {
      topicDetailsHeaderImg = require("../assets/techTopicImg.png");
    } else if (title == "Engineering") {
      topicDetailsHeaderImg = require("../assets/engineeringTopicImg.png");
    } else if (title == "Math") {
      topicDetailsHeaderImg = require("../assets/mathTopicImg.png");
    }
    return topicDetailsHeaderImg;
  };

  async function storiesHandler() {
    let key = "?apiKey=7ff285bdf33b42a083f63887f5b59503";
    let url = "https://newsapi.org/v2/everything" + key;
    // search parameter
    let search = "&q=" + props.search;
    let sortby = "&sortBy=" + "popularity";

    fetch(url + search + sortby)
      .then((data) => {
        return data.json();
      })
      .then((res) => {
        navigation.navigate("Stories", {
          title: props.title,
          articles: res.articles,
        });
      })
      .catch((error) => console.log(error));

    // //temporary data loading
    // const res = require("../data/testArticles.json");
    // console.log(res);
    // navigation.navigate("Stories", { articles: res.articles });
  }

  return (
    <View>
      {/* quiz modal */}
      <Modal visible={quizOpen} animationType="slide">
        <Quiz title={props.title} exitHandler={closeQuizHandler} />
      </Modal>

      {/* Topic Details */}
      <Modal visible={topicDetailsOpen} animationType="slide">
        <TopicDetails
          topic={props.title}
          exit={closeTopicDetails}
          color={props.textColor}
          headImg={currentTopic(props.title)}
        />
      </Modal>

      {/* Grow up modal */}
      <Modal visible={jobsDetailsOpen} animationType="slide">
        <JobsDetails topic={props.title} exit={closeJobsDetails} />
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
            onPress={() => setTopicDetailsOpen(true)}
          />

          <Button
            text="Stories"
            style={styles.buttonStyle}
            textColor={props.textColor}
            onPress={storiesHandler}
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
            onPress={() => setJobsDetailsOpen(true)}
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
