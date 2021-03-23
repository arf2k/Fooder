import React from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";
import ResultsShow from "../components/ResultsShow"

const ResultsList = ({title, results}) => {
     return(
          <View>
               <Text style={styles.titleStyle}> {title} </Text>
               <FlatList 
               horizontal={true}
               data={results}
               keyExtractor={result => result.id}
               renderItem={({item}) => {
                   return <ResultsShow result={item}/>
               } }
               />
              
          </View>
     )
}

const styles = StyleSheet.create({
     titleStyle : {
          fontSize: 18,
          fontWeight: "bold"
      }
})

export default ResultsList