import React, { useState } from 'react';
import { ScrollView, Text, View, TextInput, Button, TouchableOpacity, StyleSheet } from 'react-native';


const ToDoList = () => {
    const [tasks, setTasks] = useState(["Do laundry", "Go to gym", "Walk dog,", "Buy groceries"]);
    const [newTask, setNewTask] = useState('');

    const addTask = () => {
        if (newTask.trim()) {
            setTasks([...tasks, newTask]);
            setNewTask('');
        }
    };

    const handleTaskPress = (task) => {
        // Handle task click here
        console.log(`Task clicked: ${task}`);
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Enter new task"
                value={newTask}
                onChangeText={setNewTask}
            />
            <Button title="Add Task" onPress={addTask} />
            <ScrollView>
                {tasks.length > 0 ? (
                    tasks.map((task, index) => (
                        <TouchableOpacity key={index} onPress={() => handleTaskPress(task)}>
                            <View style={styles.task}>
                                <Text>{task}</Text>
                            </View>
                        </TouchableOpacity>
                    ))
                ) : (
                    <Text>No tasks available</Text>
                )}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
    },
    task: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: 'gray',
    },
});

export default ToDoList;
