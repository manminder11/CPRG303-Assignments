/**
 * My To Do List App
 *
 * @format
 */

import React, { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import { SafeAreaView, Pressable, View, ScrollView, Text } from "react-native";

function App() {
  const [todos, setTodos] = useState(["Do laundry", "Go to gym", "Walk dog"]);

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <Pressable>
          <View>
            <TodoList tasks={todos} />
            <TodoForm addTodo={addTodo} />
          </View>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
}

function List({ tasks }) {
  return tasks.map((task, index) => (
    <View key={index}>
      <Text>{task}</Text>
    </View>
  ));
}

export default App;
