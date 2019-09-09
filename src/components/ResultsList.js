import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import ResultsDetail from './ResultsDetail';
import { withNavigation } from 'react-navigation';

const ResultsList = ({ header, results, navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerStyle}>{header}</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={results}
        keyExtractor={(result) => result.id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate('Results', { id: item.id })}
            >
              <ResultsDetail result={item}/>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  )
};

const styles = StyleSheet.create ({
  container: {
    marginBottom: 10,
  },
  headerStyle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 15,
    marginBottom: 5,
  },

});

export default withNavigation(ResultsList);
