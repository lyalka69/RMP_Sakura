import React from 'react';
import {StyleSheet, View} from 'react-native';

const Flex = () => {
  return (
    <View
      style={[
        styles.container,
        {
          flexDirection: 'column',
        },
      ]}>
      <View style={{flex: 1, backgroundColor: '#b2222d'}} />
      <View style={{flex: 1, backgroundColor: 'white'}} />
      <View style={{flex: 1, backgroundColor: '#b2222d'}} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    aspectRatio: 3 / 2, // соотношение 2:3 (ширина:высота) = 3/2
    padding: 20,
  },
});

export default Flex;
