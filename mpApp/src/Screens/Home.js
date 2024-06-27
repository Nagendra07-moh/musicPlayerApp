import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  FlatList,
  Platform,
  ScrollView,
  Button,
} from "react-native";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { add } from "../Redux/Slices/AlbumSlice";
import ScrollList from "../Components/ScrollList";
import { AntDesign } from "@expo/vector-icons";

const Home = () => {
  const getAlbum = useSelector((state) => state.Albums.Albums);
  const dispatch = useDispatch();
  const API_TO_GET_ALBUMS = async () => {
    const options = {
      method: "GET",
      url: "https://napi-v2-2-cloud-run-b3gtd5nmxq-uw.a.run.app/v2.2/albums/new?apikey=YTkxZTRhNzAtODdlNy00ZjMzLTg0MWItOTc0NmZmNjU4Yzk4",
    };
    try {
      const response = await axios.request(options);
      dispatch(add(response.data.albums));
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    API_TO_GET_ALBUMS();
  }, []);
  return (
    <View style={styles.container}>
      <Text style={styles.MainHeader}>Albums</Text>
      <ScrollView style={{ paddingBottom: 70 }}>
        {getAlbum != null &&
          getAlbum.map((item, index) => {
            return <ScrollList data={item} key={index} />;
          })}
      </ScrollView>
      <StatusBar backgroundColor="#2CB67D" />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFE3B3",
  },
  MainHeader: {
    fontSize: 30,
    marginTop: Platform.OS === "ios" ? 50 : 0,
    fontWeight: "bold",
    backgroundColor: "#2CB67D",
    textAlign: "center",
    color: "white",
  },
});
