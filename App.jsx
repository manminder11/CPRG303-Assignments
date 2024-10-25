/**
 * My To Do List App
 *
 * @format
 */

import React from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import {
  SafeAreaView,
  Pressable,
  View,
  ScrollView,
} from 'react-native';


function App() {
  return (
    <SafeAreaView>
      <ScrollView>
        <Pressable>
          <View>
            <TodoList />
            <TodoForm />
          </View>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
