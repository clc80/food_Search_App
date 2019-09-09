import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';

const ResultsList = ({ header, results }) => {
  return (
    <View>
      <Text style={styles.headerStyle}>{header}</Text>
      <FlatList
        horizontal = {false}
        data={results}
        keyExtractor={(result) => result.id}
        renderItem={({ item }) => {
          return <Text>{item.name} </Text>
        }}
      />
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
