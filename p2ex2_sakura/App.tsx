import React, { useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import Header from './components/Header';
import ListItem from './components/ListItem';
import AddItem from './components/AddItem';

interface TodoItem {
  text: string;
  key: string;
}

export default function App() {
  const [listOfItems, setListOfItems] = useState<TodoItem[]>([
    { text: 'Купить молоко', key: '1' },
    { text: 'Помыть машину', key: '2' },
    { text: 'Купить картошку', key: '3' },
    { text: 'Стать миллионера', key: '4' },
  ]);

  const addHandler = (text: string): void => {
    const newItem: TodoItem = {
      text: text,
      key: Date.now().toString(),
    };
    setListOfItems((prevItems) => [newItem, ...prevItems]);
  };

  const deleteHandler = (key: string): void => {
    setListOfItems((prevItems) => prevItems.filter((item) => item.key !== key));
  };

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <AddItem addHandler={addHandler} />
        <FlatList
          data={listOfItems}
          renderItem={({ item }) => (
            <ListItem item={item} deleteHandler={deleteHandler} />
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    padding: 20,
  },
});