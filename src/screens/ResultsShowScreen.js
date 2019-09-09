import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList, Image } from 'react-native';
import yelp from '../api/yelp';

const ResultsShowScreen = ({ navigation }) => {
  const [result, setResult]= useState(null);

  const id = navigation.getParam('id');

  const getResult = async (id) => {
    const response = await yelp.get(`/${id}`);
    setResult(response.data);
  };

  useEffect(() => {
    getResult(id);
  }, []);

  if(!result) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.TextStyle}> {result.name} </Text>
      <FlatList
        data={result.photos}
        keyExtractor={(photo) => photo}
        renderItem={({ item }) => {
          return (
            <Image
              source={{uri: item }}
              style={styles.ImageStyle}
            />
          )
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  TextStyle: {
    fontWeight: 'bold',
    fontSize: 14,
    marginTop: 7,
  },
  ImageStyle: {
    height: 200,
    width: 300,
    borderRadius: 4,
    marginVertical: 10,
  }
});

export default ResultsShowScreen;
