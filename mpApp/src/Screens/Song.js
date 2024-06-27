import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  StatusBar,
  Image,
  Slider,
} from "react-native";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Surface, ProgressBar } from "react-native-paper";

const { height, width } = Dimensions.get("window");
const Song = (props) => {
  const getSelectedSong = useSelector(
    //this is for the selected song
    (state) => state.SelectedSong.SelectedSong
  );
  const { id, index } = props.route.params; // This is id to show Image and index
  const getTracks = useSelector((state) => state.Tracks.Tracks); //to get all tracks

  // useEffect(() => {
  //   console.log(getTracks.tracks[index]);
  // }, [getTracks]);
  return (
    <View style={styles.container}>
      <Surface
        style={{ backgroundColor: "gray", height: height * 0.08 }}
        elevation={5}
      >
        <Text
          style={{
            fontSize: 30,
            alignSelf: "center",
            marginTop: 18,
            color: "white",
          }}
        >
          Song Name
        </Text>
      </Surface>
      <View style={{ flex: 1 }}>
        <Surface
          elevation={5}
          style={{
            width: width * 0.9,
            height: height * 0.5,
            borderRadius: 10,
            marginTop: 35,
            marginLeft: 20,
          }}
        >
          <Image
            source={{
              uri: `https://api.napster.com/imageserver/v2/albums/${getTracks.tracks[index].albumId}/images/633x422.png`,
            }}
            style={{
              width: width * 0.9,
              height: height * 0.5,
              borderRadius: 10,
            }}
          />
        </Surface>
        <View style={{ marginTop: 10 }}>
          <View>
            <Text style={{ fontSize: 30, alignSelf: "center" }}>
              {getTracks.tracks[index].name}
            </Text>
            <Text style={{ fontSize: 20, alignSelf: "center" }}>
              {getTracks.tracks[index].artistName}
            </Text>
          </View>
          <View style={{ marginTop: 25, marginHorizontal: 40 }}>
            <ProgressBar progress={0.05} color={"red"} />
          </View>
        </View>
      </View>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
    </View>
  );
};

export default Song;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});
