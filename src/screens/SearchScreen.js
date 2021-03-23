import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";
import ResultsList from "../components/ResultsList"

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [searchYelp, results, error] = useResults()
  

     const priceFilter = (price) => {
          return results.filter( result => {
               return result.price === price
          })
     }


  return (
    <View >
      <SearchBar term={term} onTermChange={setTerm} onTermSubmit={()=> searchYelp(term)} />
      {error ? <Text> {error}</Text> : null}
      <Text>We have found {results.length} results</Text>
      <ResultsList results={priceFilter("$")} title="Cheap food"/>
      <ResultsList results={priceFilter("$$")} title="Less Cheap Food"/>
      <ResultsList results={priceFilter("$$$")} title="Fancy Food"/>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
