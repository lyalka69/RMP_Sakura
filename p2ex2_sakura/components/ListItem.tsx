import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

interface ListItemProps {
  item: {
    text: string;
    key: string;
  };
  deleteHandler: (key: string) => void;
}

export default function ListItem(props: ListItemProps) {
  return (
    <TouchableOpacity onPress={() => props.deleteHandler(props.item.key)}>
      <View style={styles.listItem}>
        <Text style={styles.listItemText}>{props.item.text}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  listItem: {
    padding: 20,
    marginTop: 10,
    backgroundColor: '#E8EAF6',
    borderRadius: 5,
  },
  listItemText: {
    fontSize: 18,
    color: '#333',
  },
});