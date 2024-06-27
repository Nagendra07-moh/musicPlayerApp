import { View, Text, StyleSheet } from "react-native";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

const Song = () => {
  const getSelectedSong = useSelector(
    (state) => state.SelectedSong.SelectedSong
  );
  // useEffect(() => {
  //   console.log("This is a song selected->>", getSelectedSong);
  // }, [getSelectedSong]);
  return (
    <View style={styles.container}>
      <Text>Song</Text>
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
