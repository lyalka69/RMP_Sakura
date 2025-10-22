import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface HeaderProps {}

export default function Header(props: HeaderProps) {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>Список дел</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 80,
    paddingTop: 30,
    backgroundColor: '#3949AB',
  },
  headerText: {
    fontSize: 24,
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});