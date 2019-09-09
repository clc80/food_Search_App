import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

const SearchScreen = () => {
  const [term, setTerm ] = useState('');
  const [searchApi, results, errorMessage] = useResults();

  return (
    <View>
      <SearchBar
        term={term}
        onTermChange={ newTerm => setTerm(newTerm) }
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null }
      <Text> We have found {results.length} results</Text>
      <ResultsList
        header="Cost Effective"
      />
      <ResultsList
        header="Bit Pricier"
      />
      <ResultsList
        header="Big Spender"
      />
    </View>
  );
}

const styles = StyleSheet.create({
});

export default SearchScreen;
