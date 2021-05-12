import React from "react";
import { View, StyleSheet, Text, FlatList, Linking } from "react-native";
import { Card, Button, Icon } from "react-native-elements";

const Stories = (props) => {
  // const { title } = props.route.params;
  const { title, articles } = props.route.params;
  console.log(title);
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
          onPress={() => {
            Linking.openURL(item.url);
          }}
        />
      </Card>
    );
  };
  return (
    <View>
      <Text style={{ fontSize: 30, textAlign: "center" }}>
        {"Top related " + title + " Stories"}
      </Text>
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
