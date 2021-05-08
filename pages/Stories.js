import React from "react";
import { View, StyleSheet, Text, FlatList, Image } from "react-native";
import { Card, Button, Icon } from "react-native-elements";

const Stories = (props) => {
  // const { title } = props.route.params;
  const { articles } = props.route.params;
  // console.log(props.route);
  const renderItem = ({ item }) => {
    return (
      <Card>
        <Card.Title>{item.title}</Card.Title>
        <Card.Divider />
        <Card.Image
          source={{
            uri: item.urlToImage,
          }}
        />
        <Text style={{ marginBottom: 10 }}>{item.content}</Text>
        <Button
          buttonStyle={{ borderRadius: 0, marginLeft: 0, marginBottom: 0 }}
          title="View Now"
        />
      </Card>
    );
  };
  return (
    <View>
      <FlatList
        data={articles}
        renderItem={renderItem}
        keyExtractor={(item) => item.url}
      />
      {/* <Text>Stories</Text> */}
    </View>
  );
};

export default Stories;
