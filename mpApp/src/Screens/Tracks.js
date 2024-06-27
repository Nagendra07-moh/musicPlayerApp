import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  ScrollView,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Surface } from "react-native-paper";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";
const { height, width } = Dimensions.get("screen");
import { AntDesign } from "@expo/vector-icons";
import { useSelector, useDispatch } from "react-redux";
import { addTracks } from "../Redux/Slices/TracksSlice";
import { selectSong, removeSong } from "../Redux/Slices/SelectedSongSlice";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
const Tracks = (props) => {
  const getTracks = useSelector((state) => state.Tracks.Tracks);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const { id } = props.route.params.data;
  const API_TO_GET_Tracks = async () => {
    const options = {
      method: "GET",
      url: `https://napi-v2-2-cloud-run-b3gtd5nmxq-uw.a.run.app/v2.2/albums/${id}/tracks?apikey=MWU3N2YwMzYtYTVjOS00Mzk0LTg5NjItZGUzYjJkY2JiNjVi`,
    };
    try {
      const response = await axios.request(options);
      dispatch(addTracks(response.data));
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    API_TO_GET_Tracks();
  }, []);

  const HandleSelectEvent = (item, index) => {
    dispatch(removeSong());
    dispatch(selectSong(item));
    navigation.navigate("Song", (data = { id, index }));
  };
  return (
    <ScrollView style={styles.cointaner}>
      <View
        style={{
          position: "absolute",
          zIndex: 1,
          backfaceVisibility: "visible",
          left: width * 0.05,
          top: height * 0.02,
        }}
      >
        <AntDesign
          name="banckward"
          size={24}
          color="white"
          onPress={() => navigation.goBack()}
        />
      </View>
      <Surface elevation={5}>
        <Image
          source={{
            uri: `https://api.napster.com/imageserver/v2/albums/${id}/images/633x422.png`,
          }}
          style={{ width: width, height: height * 0.2, borderTopLeftRadius: 5 }}
        />
      </Surface>
      <View style={{ flexDirection: "row", alignSelf: "center" }}>
        <Text style={styles.headerText}>Songs</Text>
        <View style={{ flexDirection: "row" }}>
          <MaterialIcons
            name="audiotrack"
            size={30}
            color="black"
            style={{ marginTop: 16 }}
          />
        </View>
        {getTracks != null && (
          <Text style={{ fontSize: 20, marginTop: 20 }}>
            {getTracks.meta.returnedCount}
          </Text>
        )}
      </View>
      <ScrollView>
        {getTracks != null &&
          getTracks.tracks.map((item, index) => {
            return (
              <TouchableOpacity
                key={index}
                onPress={() => HandleSelectEvent(item, index)}
              >
                <Surface style={styles.cointanerCards} elevation={4}>
                  <View>
                    <Image
                      source={{
                        uri: `https://api.napster.com/imageserver/v2/albums/${id}/images/150x100.png`,
                      }}
                      style={{
                        width: 150,
                        height: 100,
                        borderTopLeftRadius: 5,
                        borderBottomLeftRadius: 5,
                      }}
                    />
                  </View>
                  <View style={[styles.textSpace]}>
                    <Text
                      style={{
                        color: "white",
                        alignSelf: "center",
                        fontSize: 20,
                        fontWeight: "500",
                      }}
                    >
                      {item.name}
                    </Text>
                    <View style={{ flexDirection: "row", marginTop: 5 }}>
                      <Ionicons
                        name="stopwatch-outline"
                        size={18}
                        color="white"
                      />
                      <Text style={[styles.textStyle, { marginLeft: 5 }]}>
                        {Math.floor(item.playbackSeconds / 60)}
                      </Text>
                    </View>
                    <View style={{ flexDirection: "row", marginTop: 5 }}>
                      <Fontisto name="person" size={18} color="white" />
                      <Text style={[styles.textStyle, { marginLeft: 5 }]}>
                        {item.artistName}
                      </Text>
                    </View>
                  </View>
                  <View
                    style={{
                      position: "absolute",
                      zIndex: 1,
                      top: 35,
                      right: 10,
                    }}
                  >
                    <MaterialIcons
                      name="play-circle-outline"
                      size={38}
                      color="white"
                    />
                  </View>
                </Surface>
              </TouchableOpacity>
            );
          })}
      </ScrollView>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="#F0F0F0"
        hidden={true}
      />
    </ScrollView>
  );
};

export default Tracks;

const styles = StyleSheet.create({
  cointaner: {
    flex: 1,
    backgroundColor: "white",
  },
  cointanerCards: {
    backgroundColor: "gray",
    margin: 10,
    flexDirection: "row",
    borderRadius: 5,
  },
  headerText: {
    fontSize: 30,
    fontWeight: "bold",
    color: "black",
    marginLeft: 10,
    marginTop: 10,
    marginBottom: 10,
  },
  textStyle: {
    color: "white",
  },
  textSpace: {
    margin: 10,
  },
});
