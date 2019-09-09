import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const ResultsList = ({ header }) => {
  return (
    <View>
      <Text style={styles.headerStyle}>{header}</Text>
    </View>
  )
};

const styles = StyleSheet.create ({
  headerStyle: {
    fontSize: 18,
    fontWeight: 'bold',
  }
});

export default ResultsList;
