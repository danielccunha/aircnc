import React, { useState, useEffect } from "react";
import {
  AsyncStorage,
  StyleSheet,
  View,
  Image,
  ScrollView,
} from "react-native";
import Constants from "expo-constants";

import SpotList from "../components/SpotList";

import logo from "../assets/logo.png";

export default () => {
  const [techs, setTechs] = useState([]);

  useEffect(() => {
    AsyncStorage.getItem("techs").then((techs) => {
      const techsArray = techs.split(",").map((tech) => tech.trim());
      setTechs(techsArray);
    });
  }, []);

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={logo} />

      <ScrollView>
        {techs.map((tech) => (
          <SpotList key={tech} tech={tech} />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    paddingBottom: 30,
  },

  logo: {
    height: 32,
    resizeMode: "contain",
    alignSelf: "center",
    marginTop: 10,
  },
});
