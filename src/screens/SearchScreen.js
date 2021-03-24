import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
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
    <View style={{flex: 1}}>

      <SearchBar term={term} onTermChange={setTerm} onTermSubmit={()=> searchYelp(term)} />
      {error ? <Text> {error}</Text> : null}
      <ScrollView>
      <ResultsList results={priceFilter("$")} title="Cheap food"/>
      <ResultsList results={priceFilter("$$")} title="Less Cheap Food"/>
      <ResultsList results={priceFilter("$$$")} title="Fancy Food"/>
      </ScrollView>
    // </View>
 
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
