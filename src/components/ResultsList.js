import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const ResultsList = ({ header, results }) => {
  return (
    <View>
      <Text style={styles.headerStyle}>{header}</Text>
      <Text>Results: {results.length} </Text>
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
