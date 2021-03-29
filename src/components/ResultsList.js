import React from "react";
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { withNavigation } from "react-navigation";
import ResultsShow from "../components/ResultsShow";

const ResultsList = ({ title, results, navigation }) => {
     if(!results.length) {
          return null
     }
  return (

    <View style={styles.container}>
      <Text style={styles.titleStyle}> {title} </Text>
      <FlatList
        horizontal={true}
        data={results}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(result) => result.id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity onPress={() => navigation.navigate("Showpage", {id: item.id})}>
              <ResultsShow result={item} />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 15,
    marginBottom: 5,
  },
  container: {
    marginBottom: 10,
  },
});

export default withNavigation(ResultsList);
