/**
 * My To Do List App
 *
 * @format
 */

import React from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import { useState } from 'react';
import {
  SafeAreaView,
  Pressable,
  View,
  ScrollView,
} from 'react-native';


function App() {
  const [todos, setTodos] = useState([
    'Do the laundry',
    'Take out the trash',
    'go to the gym',
    'walk the dog',
  ]);

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  map = (todos) => {
    return todos.map((todo, index) => {
      return (
        <View key={index}>
          <Text>{todo}</Text>
        </View>
      );
    });
  }

  return (
    <SafeAreaView>
      <ScrollView>
        <Pressable>
          <View>
            <TodoList todos={todos} />
            <TodoForm addTodo={addTodo} />
          </View>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
