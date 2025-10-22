import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

interface AddItemProps {
  addHandler: (text: string) => void;
}

export default function AddItem(props: AddItemProps) {
  const [text, setText] = useState<string>('');

  const onChange = (textValue: string): void => {
    setText(textValue);
  };

  const handleAddPress = (): void => {
    if (text.trim().length > 0) {
      props.addHandler(text);
      setText(''); // Очищаем поле после добавления
    }
  };

  return (
    <View style={styles.addItemContainer}>
      <TextInput
        style={styles.input}
        placeholder="Добавить задачу"
        onChangeText={onChange}
        value={text}
      />
      <Button title="Добавить" color="#3949AB" onPress={handleAddPress} />
    </View>
  );
}

const styles = StyleSheet.create({
  addItemContainer: {
    marginTop: 20,
    marginBottom: 20,
  },
  input: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#3949AB',
    marginBottom: 10,
    fontSize: 18,
  },
});