import React, { useState } from 'react';
import { StyleSheet, FlatList, View, Text } from 'react-native';
import TodoInput from './components/TodoInput';
import TodoItem from './components/TodoItem';

export default function App() {
  const [todoList, setTodoList] = useState([]);

  function addTodo(todoItem) {
    console.log(todoList)
    setTodoList(prev => [...prev, { id: Math.random().toString(), value: todoItem }])
  };

  function deleteTodo(todoId) {
    console.log(todoId)
    setTodoList(prev => {
      return prev.filter((todoItem) => todoItem.id !== todoId)
    })
  }

  return (
    <View style={styles.container}>
      <TodoInput addTodo={addTodo} />
      <Text style={styles.note}>Tap to delete item!</Text>
      <View style={styles.list}>
        <FlatList
          keyExtractor={item => item.id}
          data={todoList}
          renderItem={(item) => <TodoItem item={item} deleteTodo={deleteTodo} />}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 80,
  },
  list: {
    flex: 1,
    marginTop: 20
  },
  note: {
    marginTop: 15,
    fontSize: 16,
    color: 'red'
  }
});
