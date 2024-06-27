import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  StatusBar,
  Image,
  Slider,
  Pressable,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Surface, ProgressBar } from "react-native-paper";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
const { height, width } = Dimensions.get("window");
import { FontAwesome5 } from "@expo/vector-icons";
import { Audio } from "expo-av";
import TrackPlayer, { Capability } from "react-native-track-player";

const Song = (props) => {
  // const setupPlayer = async () => {
  //   try {
  //     await TrackPlayer.setupPlayer();
  //     await TrackPlayer.updateOptions({
  //       // Media controls capabilities
  //       capabilities: [
  //         Capability.Play,
  //         Capability.Pause,
  //         Capability.SkipToNext,
  //         Capability.SkipToPrevious,
  //         Capability.Stop,
  //       ],

  //       // Capabilities that will show up when the notification is in the compact form on Android
  //       compactCapabilities: [Capability.Play, Capability.Pause],
  //     });
  //   } catch (e) {}
  // };
  const navigation = useNavigation();
  const getSelectedSong = useSelector(
    //this is for the selected song
    (state) => state.SelectedSong.SelectedSong
  );
  const { id, index } = props.route.params; // This is id to show Image and index
  const getTracks = useSelector((state) => state.Tracks.Tracks); //to get all tracks

  useEffect(() => {
    playSound();
  }, []);

  const [index1, setIndex1] = useState(index);
  const HandleNextPrev = (order) => {
    if (order === "next") {
      setIndex1((prev) => (prev + 1) % getTracks.tracks.length);
      playSound();
    } else {
      setIndex1((prev) => (prev - 1) % getTracks.tracks.length);
      playSound();
    }
  };
  const [sound, setSound] = useState();
  const [isplaying, setIsplaying] = useState(true);

  async function playSound() {
    const { sound } = await Audio.Sound.createAsync({
      uri: getTracks.tracks[index1].previewURL,
    });
    setSound(sound);
    if (isplaying) {
      await sound.playAsync();
    } else {
      await sound.pauseAsync();
    }
    setIsplaying(!isplaying);
  }

  useEffect(() => {
    return sound
      ? () => {
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  return (
    <View style={styles.container}>
      <Surface
        style={{ backgroundColor: "gray", height: height * 0.08 }}
        elevation={5}
      >
        <Pressable
          style={{ position: "absolute", left: 15, top: 15 }}
          onPress={() => navigation.goBack()}
        >
          <AntDesign name="leftcircleo" size={30} color="white" />
        </Pressable>
        <Text
          style={{
            fontSize: 30,
            alignSelf: "center",
            marginTop: 10,
            fontWeight: "500",
            color: "white",
          }}
        >
          {getTracks.tracks[index1].albumName}
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
              uri: `https://api.napster.com/imageserver/v2/albums/${getTracks.tracks[index1].albumId}/images/633x422.png`,
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
              {getTracks.tracks[index1].name}
            </Text>

            <Text style={{ fontSize: 20, alignSelf: "center" }}>
              {getTracks.tracks[index1].artistName}
            </Text>
          </View>
          <View style={{ marginTop: 25, marginHorizontal: 40 }}>
            <ProgressBar progress={0.05} color={"red"} />
          </View>
        </View>
        <View style={{ marginTop: 50 }}>
          <View style={{ flexDirection: "row", alignSelf: "center" }}>
            <TouchableOpacity
              style={styles.btnStyle}
              onPress={() => HandleNextPrev("prev")}
            >
              <AntDesign name="stepbackward" size={38} color="black" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnStyle}>
              <AntDesign name="caretleft" size={38} color="black" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnStyle} onPress={playSound}>
              {!isplaying ? (
                <FontAwesome5 name="pause" size={40} color="black" />
              ) : (
                <FontAwesome5 name="play" size={40} color="black" />
              )}
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnStyle}>
              <AntDesign name="caretright" size={38} color="black" />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.btnStyle}
              onPress={() => HandleNextPrev("next")}
            >
              <AntDesign name="stepforward" size={38} color="black" />
            </TouchableOpacity>
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
  btnStyle: {
    marginHorizontal: 20,
  },
});
