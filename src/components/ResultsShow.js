import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";

const ResultsShow = ({result}) => {
     return (
          <View>
               <Image style={styles.image} source={{ uri: result.image_url}} />
               <Text>{result.name}</Text>
<Text>{result.rating} Stars, {result.review_count} Reviews</Text>
          </View>
     )
}

const styles = StyleSheet.create({
     image: {
          width: 250,
          height: 120,
          borderRadius: 4
     }

})

export default ResultsShow