import { View, Text, StyleSheet, Image } from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";

const ScrollList = ({ data }) => {
  useEffect(() => {
    //   console.log("This is data-->", data);
    // getImage();
  }, [data]);
  return (
    <View style={styles.cointaner}>
      <Text>{data.name}</Text>
      <Text>{data.released.substring(0, 10)}</Text>
      <Text>{data.trackCount}</Text>
      <Image
        source={{
          uri: `https://api.napster.com/imageserver/v2/albums/${data.id}/images/150x100.png`,
        }}
        style={{ width: 150, height: 100 }}
      />
    </View>
  );
};

export default ScrollList;
const styles = StyleSheet.create({
  cointaner: {
    backgroundColor: "red",
    margin: 10,
  },
});
