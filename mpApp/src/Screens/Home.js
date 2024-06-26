import { View, Text, StatusBar, StyleSheet } from "react-native";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { add } from "../Redux/AlbumSlice";

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
      //   console.log("This is Response->", response.data.albums);
      dispatch(add(response.data));
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    API_TO_GET_ALBUMS();
  }, []);
  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="#F0F0F0"
        hidde={true}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
