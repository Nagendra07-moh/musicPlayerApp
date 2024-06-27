import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  ScrollView,
  StatusBar,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Surface } from "react-native-paper";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";
const { height, width } = Dimensions.get("screen");
import { AntDesign } from "@expo/vector-icons";
import { useSelector, useDispatch } from "react-redux";
import { add } from "../Redux/Slices/TracksSlice";
const Tracks = (props) => {
  const getTracks = useSelector((state) => state.Tracks.Tracks);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const { id } = props.route.params.data;

  const API_TO_GET_Tracks = async () => {
    const options = {
      method: "GET",
      url: "https://napi-v2-2-cloud-run-b3gtd5nmxq-uw.a.run.app/v2.2/tracks/top?apikey=YTkxZTRhNzAtODdlNy00ZjMzLTg0MWItOTc0NmZmNjU4Yzk4",
    };
    try {
      const response = await axios.request(options);
      dispatch(add(response.data.tracks));
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    API_TO_GET_Tracks();
  }, []);
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
});
