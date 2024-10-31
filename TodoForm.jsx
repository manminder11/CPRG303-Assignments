import { View, TextInput, Button, StyleSheet, Dimensions } from "react-native";
import React from "react";

const { width } = Dimensions.get("window");

const TodoForm = ({ handleChange, handleSubmit, text }) => (
  <View style={styles.container}>
    <TextInput
      style={styles.input}
      placeholder="Add Todo"
      placeholderTextColor={width > 400 ? "gray" : "darkgray"}
      onChangeText={handleChange}
      value={text}
    />
    <Button title="Add" onPress={handleSubmit} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    width: "100%",
  },
});

export default TodoForm;
