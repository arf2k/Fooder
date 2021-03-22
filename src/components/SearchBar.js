import React from "react";
import { View, TextInput, Text, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

const SearchBar = ({term, onTermChange, onTermSubmit}) => {
  return (
    <View style={styles.background}>
         <Feather name="search" style={styles.iconStyle} />
      <TextInput 
      placeholder="Search"
      style={styles.inputStyle}
      value={term}
      onChangeText={onTermChange}
      autoCapitalize="none"
      autoCorrect={false}
      onEndEditing={onTermSubmit}
       
       />
       <Text>{term}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: "#F0EEEE",
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    flexDirection: "row",
    marginTop: 10
  },
  inputStyle :{
       fontSize: 18,
       flex: 1
  },
  iconStyle: {
       fontSize: 40,
       alignSelf: "center",
       marginHorizontal: 15
  }

});

export default SearchBar;
