import React, { useState } from 'react';
import { ScrollView, Text, View, TextInput, Button } from 'react-native';

const ToDoList = () => {
    const [tasks, setTasks] = useState(["Do laundry", "Go to gym", "Walk dog,", "Buy groceries"]);
    const [newTask, setNewTask] = useState('');

    const addTask = () => {
        if (newTask.trim()) {
            setTasks([...tasks, newTask]);
            setNewTask('');
        }
    };

    return (
        <View>
            <TextInput
                placeholder="Enter new task"
                value={newTask}
                onChangeText={setNewTask}
            />
            <Button title="Add Task" onPress={addTask} />
            <ScrollView>
                {tasks.length > 0 ? (
                    tasks.map((task, index) => (
                        <View key={index}>
                            <Text>{task}</Text>
                        </View>
                    ))
                ) : (
                    <Text>No tasks available</Text>
                )}
            </ScrollView>
        </View>
    );
};

export default ToDoList;
