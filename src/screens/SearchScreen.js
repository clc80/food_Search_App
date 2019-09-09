import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

const SearchScreen = () => {
  const [term, setTerm ] = useState('');
  const [searchApi, results, errorMessage] = useResults();

  const filterResultsByPrice = (price) => {
    return results.filter(result => {
      return result.price === price
    });
  };

  return (
    <>
      <SearchBar
        term={term}
        onTermChange={ newTerm => setTerm(newTerm) }
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null }
      <ScrollView>
        <ResultsList
          header="Cost Effective"
          results={filterResultsByPrice('$')}
        />
        <ResultsList
          header="Bit Pricier"
          results={filterResultsByPrice('$$')}
        />
        <ResultsList
          header="Big Spender"
          results={filterResultsByPrice('$$$')}
        />
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default SearchScreen;
