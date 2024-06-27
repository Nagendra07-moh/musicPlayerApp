import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { Surface } from "react-native-paper";
import axios from "axios";
import { Fontisto } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const ScrollList = ({ data }) => {
  const navigation = useNavigation();
  const HandlePressEvent = () => {
    navigation.navigate("Tracks", (data = { data }));
  };
  return (
    <TouchableOpacity onPress={HandlePressEvent}>
      <Surface style={styles.cointaner} elevation={4}>
        <View>
          <Image
            source={{
              uri: `https://api.napster.com/imageserver/v2/albums/${data.id}/images/150x100.png`,
            }}
            style={{
              width: 150,
              height: 100,
              borderTopLeftRadius: 5,
              borderBottomLeftRadius: 5,
            }}
          />
        </View>
        <View style={styles.textSpace}>
          <Text
            style={{
              color: "white",
              alignSelf: "center",
              fontSize: 20,
              fontWeight: "500",
            }}
          >
            {data.artistName}
          </Text>
          <View style={{ flexDirection: "row", marginTop: 5 }}>
            <Fontisto name="date" size={14} color="white" />
            <Text style={[styles.textStyle, { marginLeft: 5 }]}>
              {data.released ? data.released.substring(0, 10) : "2023-06-26"}
            </Text>
          </View>
          <View style={{ flexDirection: "row", marginTop: 5 }}>
            <MaterialIcons name="track-changes" size={14} color="white" />
            <Text style={[styles.textStyle, { marginLeft: 5 }]}>
              {data.trackCount}
            </Text>
          </View>
        </View>
      </Surface>
    </TouchableOpacity>
  );
};
export default ScrollList;
const styles = StyleSheet.create({
  cointaner: {
    backgroundColor: "gray",
    margin: 10,
    flexDirection: "row",
    borderRadius: 5,
  },
  textStyle: {
    color: "white",
  },
  textSpace: {
    margin: 10,
  },
});
