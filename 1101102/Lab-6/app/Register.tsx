import React from "react";
import { Ionicons } from "@expo/vector-icons";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
import { Link } from "expo-router";

export default function Register() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#FFFCDA",
      }}
    >
      <Ionicons name="person-add" size={100} />
      <TextInput style={styles.txtInput} placeholder="Email"></TextInput>
      <TextInput style={styles.txtInput} placeholder="Password"></TextInput>
      <TextInput style={styles.txtInput} placeholder="Name"></TextInput>

      <Link href={"Forget"} style={{margin:5}}>
        <View style={styles.btn}>
          <Text style={styles.txtBtn}>REGISTER</Text>
        </View>
      </Link>

      <Link href={"Login"} style={{margin:5}}>
        <View style={styles.btn}>
          <Text style={styles.txtBtn}>BACK</Text>
        </View>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  txtInput: {
    width: 350,
    backgroundColor: "#B0DBFF",
    borderColor: "black",
    borderWidth: 1,
    height: 60,
    padding: 10,
    margin: 5,
  },
  btn: {
    backgroundColor: "#CCBEFF",
    width: 350,
    height: 50,

    alignItems: "center",
    justifyContent: "center",
    margin: 5,
  },
  txtBtn: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
  },
});
