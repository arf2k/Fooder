import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import SearchBar from "../components/SearchBar";
import Yelp from "../api/Yelp"


const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [api, setApi] = useState([]);

  const searchApi = async () => {
      const response = await Yelp.get("/search", {
           params: {
                limit: 50,
                term: term,
                location: "Brooklyn"
           }
      })
      setApi(response.data.businesses) 
  }
  
  return (
    <View>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={searchApi}
      />
      <Text> Search Screen </Text>
      <Text>We have found {api.length} results</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
