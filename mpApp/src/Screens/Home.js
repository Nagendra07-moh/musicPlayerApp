import { View, Text, StatusBar, StyleSheet } from "react-native";

import React, { useState, useEffect } from "react";

const Home = () => {
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
