import React from 'react';
import {StyleSheet, View} from 'react-native';

const Flex = () => {
  return (
    <View
      style={[
        styles.container,
        {
          // Try setting `flexDirection` to `"row"`.
          flexDirection: 'column',
        },
      ]}>
      <View style={{flex: 2, backgroundColor: '#b2222d'}} />
      <View style={{flex: 1, backgroundColor: 'white'}} />
      <View style={{flex: 2, backgroundColor: '#b2222d'}} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    aspectRatio: 2,
    padding: 20,
  },
});

export default Flex;