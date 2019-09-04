import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SearchBar from '../components/SearchBar';

const SearchScreen = () => {
  const [term, setTerm ] = useState('');

  return (
    <View>
      <Text>Search Screen</Text>
      <SearchBar
        term={term}
        onTermChange={ newTerm => setTerm(newTerm) }
        onTermSubmit={() => console.log("term was submitted")}
      />
      <Text> {term}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
});

export default SearchScreen;
